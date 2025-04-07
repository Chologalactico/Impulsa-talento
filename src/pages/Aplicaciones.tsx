
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  TimerOff,
  Eye
} from "lucide-react";
import Navbar from "@/components/Navbar";

interface Aplicacion {
  id: number;
  empresa: string;
  logo: string;
  puesto: string;
  ubicacion: string;
  fechaAplicacion: string;
  estado: "pendiente" | "entrevista" | "rechazada" | "expirada" | "aceptada";
}

const Aplicaciones = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [aplicaciones, setAplicaciones] = useState<Aplicacion[]>([
    {
      id: 1,
      empresa: "TechSolutions",
      logo: "",
      puesto: "Desarrollador Frontend",
      ubicacion: "Madrid",
      fechaAplicacion: "2023-04-02",
      estado: "pendiente"
    },
    {
      id: 2,
      empresa: "Global Innovations",
      logo: "",
      puesto: "Diseñador UI/UX",
      ubicacion: "Barcelona",
      fechaAplicacion: "2023-03-25",
      estado: "entrevista"
    },
    {
      id: 3,
      empresa: "DataCorp",
      logo: "",
      puesto: "Desarrollador Full Stack",
      ubicacion: "Valencia",
      fechaAplicacion: "2023-03-15",
      estado: "rechazada"
    },
    {
      id: 4,
      empresa: "InnoTech",
      logo: "",
      puesto: "Ingeniero de Software Senior",
      ubicacion: "Sevilla",
      fechaAplicacion: "2023-02-10",
      estado: "aceptada"
    },
    {
      id: 5,
      empresa: "WebSolutions",
      logo: "",
      puesto: "Desarrollador Backend",
      ubicacion: "Bilbao",
      fechaAplicacion: "2023-01-20",
      estado: "expirada"
    }
  ]);
  
  const [filtro, setFiltro] = useState<string>("todas");

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    if (!loginStatus) {
      navigate("/login");
      return;
    }
    
    setIsLoggedIn(true);
  }, [navigate]);

  const aplicacionesFiltradas = filtro === "todas" 
    ? aplicaciones 
    : aplicaciones.filter(app => app.estado === filtro);

  const getEstadoBadge = (estado: string) => {
    switch(estado) {
      case "pendiente":
        return <Badge variant="outline" className="flex items-center gap-1"><Clock className="h-3 w-3" /> Pendiente</Badge>;
      case "entrevista":
        return <Badge variant="secondary" className="flex items-center gap-1"><Calendar className="h-3 w-3" /> Entrevista</Badge>;
      case "rechazada":
        return <Badge variant="destructive" className="flex items-center gap-1"><AlertCircle className="h-3 w-3" /> Rechazada</Badge>;
      case "aceptada":
        return <Badge variant="secondary" className="bg-green-500 text-white flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Aceptada</Badge>;
      case "expirada":
        return <Badge variant="outline" className="text-gray-500 flex items-center gap-1"><TimerOff className="h-3 w-3" /> Expirada</Badge>;
      default:
        return <Badge>{estado}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-ES').format(date);
  };

  if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Mis Aplicaciones</h1>
        
        <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
          <Button 
            variant={filtro === "todas" ? "default" : "outline"} 
            onClick={() => setFiltro("todas")}
            size="sm"
          >
            Todas
          </Button>
          <Button 
            variant={filtro === "pendiente" ? "default" : "outline"} 
            onClick={() => setFiltro("pendiente")}
            size="sm"
          >
            Pendientes
          </Button>
          <Button 
            variant={filtro === "entrevista" ? "default" : "outline"} 
            onClick={() => setFiltro("entrevista")}
            size="sm"
          >
            Entrevistas
          </Button>
          <Button 
            variant={filtro === "aceptada" ? "default" : "outline"} 
            onClick={() => setFiltro("aceptada")}
            size="sm"
          >
            Aceptadas
          </Button>
          <Button 
            variant={filtro === "rechazada" ? "default" : "outline"} 
            onClick={() => setFiltro("rechazada")}
            size="sm"
          >
            Rechazadas
          </Button>
        </div>
        
        {aplicacionesFiltradas.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-gray-500">No tienes aplicaciones con este filtro</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {aplicacionesFiltradas.map((aplicacion) => (
              <Card key={aplicacion.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex-grow p-6">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                        <Building2 className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{aplicacion.puesto}</h3>
                        <p className="text-gray-600 text-sm">{aplicacion.empresa}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        {aplicacion.ubicacion}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Briefcase className="h-4 w-4 mr-1" />
                        Aplicado el {formatDate(aplicacion.fechaAplicacion)}
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      {getEstadoBadge(aplicacion.estado)}
                      
                      <Button variant="ghost" size="sm" className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" /> Ver detalles
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Aplicaciones;
