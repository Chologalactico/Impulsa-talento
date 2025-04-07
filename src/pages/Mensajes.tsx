
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  MessageSquare, 
  User, 
  Calendar, 
  Trash2,
  UserCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Tipo para los mensajes
interface Message {
  id: string;
  sender: string;
  senderType: "user" | "company" | "system";
  content: string;
  timestamp: string;
  read: boolean;
}

const Mensajes = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Comprobar si el usuario está logueado
  useEffect(() => {
    // Simular comprobación de login (reemplazar con autenticación real)
    const checkLoginStatus = () => {
      // Simular usuario logueado - en una implementación real esto vendría de un contexto de autenticación
      const userLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(userLoggedIn);
      
      if (!userLoggedIn) {
        toast({
          title: "Acceso restringido",
          description: "Debes iniciar sesión para ver tus mensajes",
          variant: "destructive",
        });
        navigate("/login");
      } else {
        // Cargar mensajes de prueba
        loadSampleMessages();
      }
    };
    
    checkLoginStatus();
  }, [navigate, toast]);

  // Cargar mensajes de ejemplo (reemplazar con llamada a API real)
  const loadSampleMessages = () => {
    setTimeout(() => {
      const sampleMessages: Message[] = [
        {
          id: "1",
          sender: "Empresa ABC",
          senderType: "company",
          content: "Hemos revisado tu solicitud para el puesto de Desarrollador Frontend y nos gustaría programar una entrevista contigo.",
          timestamp: "2025-04-06T14:30:00",
          read: false
        },
        {
          id: "2",
          sender: "María López",
          senderType: "user",
          content: "Gracias por unirte a mi red profesional. Me gustaría conocer más sobre tu experiencia en desarrollo web.",
          timestamp: "2025-04-05T10:15:00",
          read: true
        },
        {
          id: "3",
          sender: "Impulsa Talento",
          senderType: "system",
          content: "Tu perfil ha sido visitado por 12 reclutadores esta semana. Actualiza tu CV para mejorar tu visibilidad.",
          timestamp: "2025-04-04T09:45:00",
          read: true
        },
        {
          id: "4",
          sender: "Empresa XYZ",
          senderType: "company",
          content: "Hemos recibido tu aplicación para el puesto de Diseñador UX/UI. En breve nos pondremos en contacto contigo.",
          timestamp: "2025-04-03T16:20:00",
          read: false
        },
        {
          id: "5",
          sender: "Carlos Rodríguez",
          senderType: "user",
          content: "Hola! Vi que estás interesado en el curso de React avanzado. Yo lo tomé el mes pasado y puedo darte mi opinión.",
          timestamp: "2025-04-02T11:05:00",
          read: true
        }
      ];
      
      setMessages(sampleMessages);
      setIsLoading(false);
    }, 1000); // Simular carga
  };
  
  // Marcar mensaje como leído
  const markAsRead = (id: string) => {
    setMessages(messages.map(message => 
      message.id === id ? { ...message, read: true } : message
    ));
    
    // En un caso real, aquí se haría una llamada a la API
  };
  
  // Eliminar mensaje
  const deleteMessage = (id: string) => {
    setMessages(messages.filter(message => message.id !== id));
    
    if (selectedMessage && selectedMessage.id === id) {
      setSelectedMessage(null);
    }
    
    toast({
      title: "Mensaje eliminado",
      description: "El mensaje ha sido eliminado correctamente"
    });
    
    // En un caso real, aquí se haría una llamada a la API
  };
  
  // Seleccionar un mensaje para verlo
  const viewMessage = (message: Message) => {
    if (!message.read) {
      markAsRead(message.id);
    }
    setSelectedMessage(message);
  };

  // Formatear fecha
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('es-ES', { 
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Renderizar icono según tipo de remitente
  const getSenderIcon = (senderType: string) => {
    switch (senderType) {
      case "company":
        return <User className="h-5 w-5 text-blue-500" />;
      case "system":
        return <UserCheck className="h-5 w-5 text-green-500" />;
      default:
        return <User className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Mis Mensajes</h1>
        
        {isLoading ? (
          <div className="flex justify-center p-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Lista de mensajes */}
            <div className="md:col-span-1">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Bandeja de entrada</CardTitle>
                  <CardDescription>Tienes {messages.filter(m => !m.read).length} mensajes sin leer</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {messages.length > 0 ? (
                      messages.map(message => (
                        <div 
                          key={message.id}
                          className={`p-4 cursor-pointer hover:bg-slate-100 transition-colors ${
                            selectedMessage?.id === message.id ? 'bg-slate-100' : ''
                          } ${!message.read ? 'font-semibold' : ''}`}
                          onClick={() => viewMessage(message)}
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-1">
                              {getSenderIcon(message.senderType)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <p className="truncate">{message.sender}</p>
                                {!message.read && (
                                  <span className="inline-block w-2 h-2 bg-primary rounded-full ml-2"></span>
                                )}
                              </div>
                              <p className="text-sm text-gray-500 truncate">{message.content}</p>
                              <p className="text-xs text-gray-400 mt-1">{formatDate(message.timestamp)}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-8 text-center text-gray-500">
                        No tienes mensajes
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Detalle del mensaje */}
            <div className="md:col-span-2">
              {selectedMessage ? (
                <Card className="h-full">
                  <CardHeader className="flex flex-row items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {getSenderIcon(selectedMessage.senderType)}
                        <span>{selectedMessage.sender}</span>
                      </CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(selectedMessage.timestamp)}
                      </CardDescription>
                    </div>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => deleteMessage(selectedMessage.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <p>{selectedMessage.content}</p>
                    </div>
                    
                    <div className="mt-8 flex justify-end">
                      <Button>
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Responder
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="h-full flex items-center justify-center p-12">
                  <div className="text-center">
                    <MessageSquare className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Selecciona un mensaje para ver su contenido</p>
                  </div>
                </Card>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mensajes;
