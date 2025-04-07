
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Bell,
  BellOff,
  Briefcase,
  GraduationCap,
  User,
  MessageSquare,
  Calendar,
  Star,
  Settings,
  Trash2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

// Tipo para las notificaciones
interface Notification {
  id: string;
  title: string;
  message: string;
  type: "job" | "course" | "message" | "profile" | "system";
  timestamp: string;
  read: boolean;
}

const Notificaciones = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(true);
  const [showOnlyUnread, setShowOnlyUnread] = useState<boolean>(false);

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
          description: "Debes iniciar sesión para ver tus notificaciones",
          variant: "destructive",
        });
        navigate("/login");
      } else {
        // Cargar notificaciones de prueba
        loadSampleNotifications();
      }
    };
    
    checkLoginStatus();
  }, [navigate, toast]);

  // Cargar notificaciones de ejemplo (reemplazar con llamada a API real)
  const loadSampleNotifications = () => {
    setTimeout(() => {
      const sampleNotifications: Notification[] = [
        {
          id: "1",
          title: "Nueva oferta de empleo",
          message: "Se ha publicado una nueva oferta que coincide con tu perfil: Desarrollador Frontend en Madrid",
          type: "job",
          timestamp: "2025-04-07T09:30:00",
          read: false
        },
        {
          id: "2",
          title: "Curso recomendado",
          message: "Basado en tu perfil, te recomendamos el curso: React Avanzado para Profesionales",
          type: "course",
          timestamp: "2025-04-06T16:45:00",
          read: false
        },
        {
          id: "3",
          title: "Nuevo mensaje",
          message: "Has recibido un mensaje de Empresa ABC sobre tu aplicación reciente",
          type: "message",
          timestamp: "2025-04-06T12:15:00",
          read: true
        },
        {
          id: "4",
          title: "Actualización de perfil",
          message: "Tu perfil ha sido visitado por 5 empresas esta semana",
          type: "profile",
          timestamp: "2025-04-05T10:20:00",
          read: true
        },
        {
          id: "5",
          title: "Recuerda completar tu curso",
          message: "Te queda una semana para completar el curso de UX/UI Design Fundamentals",
          type: "course",
          timestamp: "2025-04-04T08:00:00",
          read: true
        },
        {
          id: "6",
          title: "Estado de aplicación",
          message: "Tu aplicación para Developer Senior ha pasado a la siguiente fase",
          type: "job",
          timestamp: "2025-04-03T14:10:00",
          read: false
        },
        {
          id: "7",
          title: "Actualización de términos",
          message: "Hemos actualizado nuestros términos y condiciones. Por favor revísalos",
          type: "system",
          timestamp: "2025-04-02T11:30:00",
          read: true
        }
      ];
      
      setNotifications(sampleNotifications);
      setIsLoading(false);
    }, 1000); // Simular carga
  };

  // Marcar notificación como leída
  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
    
    // En un caso real, aquí se haría una llamada a la API
  };

  // Marcar todas como leídas
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
    
    toast({
      title: "Notificaciones",
      description: "Todas las notificaciones han sido marcadas como leídas"
    });
    
    // En un caso real, aquí se haría una llamada a la API
  };
  
  // Eliminar notificación
  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
    
    toast({
      title: "Notificación eliminada",
      description: "La notificación ha sido eliminada correctamente"
    });
    
    // En un caso real, aquí se haría una llamada a la API
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

  // Renderizar icono según tipo de notificación
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "job":
        return <Briefcase className="h-5 w-5 text-blue-500" />;
      case "course":
        return <GraduationCap className="h-5 w-5 text-green-500" />;
      case "message":
        return <MessageSquare className="h-5 w-5 text-purple-500" />;
      case "profile":
        return <User className="h-5 w-5 text-amber-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  // Filtrar notificaciones
  const filteredNotifications = showOnlyUnread 
    ? notifications.filter(n => !n.read) 
    : notifications;

  // Toggle de notificaciones
  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
    toast({
      title: notificationsEnabled ? "Notificaciones desactivadas" : "Notificaciones activadas",
      description: notificationsEnabled 
        ? "Ya no recibirás notificaciones por email" 
        : "Recibirás notificaciones por email"
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="text-3xl font-bold">Notificaciones</h1>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <Switch 
                id="unread-filter" 
                checked={showOnlyUnread}
                onCheckedChange={setShowOnlyUnread}
              />
              <Label htmlFor="unread-filter">Solo no leídas</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch 
                id="notifications-toggle" 
                checked={notificationsEnabled}
                onCheckedChange={toggleNotifications}
              />
              <Label htmlFor="notifications-toggle">Notificaciones por email</Label>
            </div>
            
            {notifications.some(n => !n.read) && (
              <Button variant="outline" onClick={markAllAsRead}>
                Marcar todas como leídas
              </Button>
            )}
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center p-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-5 w-5" />
                <span>
                  {notifications.filter(n => !n.read).length} notificaciones sin leer
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {filteredNotifications.length > 0 ? (
                <div className="space-y-4">
                  {filteredNotifications.map((notification) => (
                    <div 
                      key={notification.id}
                      className={`p-4 border rounded-lg transition-colors ${
                        notification.read ? 'bg-white' : 'bg-slate-50 border-primary/20'
                      }`}
                    >
                      <div className="flex">
                        <div className="mr-4 mt-0.5">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h3 className={`font-medium ${!notification.read ? 'font-semibold' : ''}`}>
                              {notification.title}
                            </h3>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500">{formatDate(notification.timestamp)}</span>
                              {!notification.read && (
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  className="h-6 w-6" 
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  <span className="sr-only">Marcar como leída</span>
                                  <Star className="h-4 w-4 text-amber-400" />
                                </Button>
                              )}
                              <Button 
                                variant="ghost" 
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => deleteNotification(notification.id)}
                              >
                                <span className="sr-only">Eliminar</span>
                                <Trash2 className="h-4 w-4 text-red-500" />
                              </Button>
                            </div>
                          </div>
                          <p className="text-gray-600 mt-1">{notification.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center p-12">
                  <BellOff className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">
                    {showOnlyUnread 
                      ? "No tienes notificaciones sin leer" 
                      : "No tienes notificaciones"}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
        
        {/* Ajustes de notificaciones */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Settings className="mr-2 h-5 w-5" /> 
            Preferencias de notificaciones
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid gap-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Notificaciones de empleo</h3>
                    <p className="text-sm text-gray-500">Recibe alertas sobre nuevas ofertas que coincidan con tu perfil</p>
                  </div>
                  <Switch defaultChecked={true} />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Notificaciones de cursos</h3>
                    <p className="text-sm text-gray-500">Recibe recomendaciones de cursos basados en tus intereses</p>
                  </div>
                  <Switch defaultChecked={true} />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Mensajes</h3>
                    <p className="text-sm text-gray-500">Notificaciones cuando recibas mensajes de empresas o usuarios</p>
                  </div>
                  <Switch defaultChecked={true} />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Actualizaciones del sistema</h3>
                    <p className="text-sm text-gray-500">Cambios en términos, actualizaciones de la plataforma, etc.</p>
                  </div>
                  <Switch defaultChecked={true} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Notificaciones;
