import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  Bell, 
  Mail, 
  Shield, 
  Smartphone, 
  User, 
  Globe, 
  Languages, 
  EyeOff,
  LogOut
} from "lucide-react";
import Navbar from "@/components/Navbar";

type ConfigType = {
  notifications: {
    email: boolean;
    push: boolean;
    nuevasOfertas: boolean;
    estadoAplicaciones: boolean;
    mensajesNuevos: boolean;
    boletinSemanal: boolean;
  };
  privacy: {
    perfilPublico: boolean;
    mostrarContacto: boolean;
    mostrarExperiencia: boolean;
    mostrarEducacion: boolean;
  };
  language: string;
  theme: string;
};

const Configuracion = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [config, setConfig] = useState<ConfigType>({
    notifications: {
      email: true,
      push: true,
      nuevasOfertas: true,
      estadoAplicaciones: true,
      mensajesNuevos: true,
      boletinSemanal: false
    },
    privacy: {
      perfilPublico: true,
      mostrarContacto: false,
      mostrarExperiencia: true,
      mostrarEducacion: true
    },
    language: "es",
    theme: "light"
  });

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    if (!loginStatus) {
      navigate("/login");
      return;
    }
    
    setIsLoggedIn(true);
    
    const savedConfig = localStorage.getItem("userConfig");
    if (savedConfig) {
      try {
        setConfig(JSON.parse(savedConfig));
      } catch (e) {
        console.error("Error parsing saved config:", e);
      }
    }
  }, [navigate]);

  const handleToggleChange = (category: 'notifications' | 'privacy', setting: string, value: boolean) => {
    setConfig(prev => {
      if (category === 'notifications') {
        return {
          ...prev,
          notifications: {
            ...prev.notifications,
            [setting]: value
          }
        };
      } else if (category === 'privacy') {
        return {
          ...prev,
          privacy: {
            ...prev.privacy,
            [setting]: value
          }
        };
      }
      return prev;
    });
  };
  
  const handleSave = (section: string) => {
    localStorage.setItem("userConfig", JSON.stringify(config));
    
    toast({
      title: "Configuración actualizada",
      description: `La sección ${section} ha sido actualizada correctamente`,
    });
  };
  
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate("/login");
    
    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión correctamente"
    });
  };

  if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Configuración</h1>
        
        <Tabs defaultValue="notificaciones" className="space-y-6">
          <TabsList className="flex overflow-x-auto space-x-2 pb-px mb-6">
            <TabsTrigger value="notificaciones" className="flex items-center">
              <Bell className="mr-2 h-4 w-4" /> Notificaciones
            </TabsTrigger>
            <TabsTrigger value="privacidad" className="flex items-center">
              <Shield className="mr-2 h-4 w-4" /> Privacidad
            </TabsTrigger>
            <TabsTrigger value="cuenta" className="flex items-center">
              <User className="mr-2 h-4 w-4" /> Cuenta
            </TabsTrigger>
            <TabsTrigger value="preferencias" className="flex items-center">
              <Globe className="mr-2 h-4 w-4" /> Preferencias
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="notificaciones">
            <Card>
              <CardHeader>
                <CardTitle>Notificaciones</CardTitle>
                <CardDescription>
                  Configura cómo quieres recibir las notificaciones
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Canales de notificación</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <Label htmlFor="email-notifications">Notificaciones por correo</Label>
                    </div>
                    <Switch 
                      id="email-notifications" 
                      checked={config.notifications.email}
                      onCheckedChange={(checked) => handleToggleChange("notifications", "email", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Smartphone className="h-4 w-4" />
                      <Label htmlFor="push-notifications">Notificaciones push</Label>
                    </div>
                    <Switch 
                      id="push-notifications" 
                      checked={config.notifications.push}
                      onCheckedChange={(checked) => handleToggleChange("notifications", "push", checked)}
                    />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-medium">Tipos de notificaciones</h3>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notify-offers">Nuevas ofertas de trabajo</Label>
                    <Switch 
                      id="notify-offers" 
                      checked={config.notifications.nuevasOfertas}
                      onCheckedChange={(checked) => handleToggleChange("notifications", "nuevasOfertas", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notify-applications">Estado de mis aplicaciones</Label>
                    <Switch 
                      id="notify-applications" 
                      checked={config.notifications.estadoAplicaciones}
                      onCheckedChange={(checked) => handleToggleChange("notifications", "estadoAplicaciones", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notify-messages">Nuevos mensajes</Label>
                    <Switch 
                      id="notify-messages" 
                      checked={config.notifications.mensajesNuevos}
                      onCheckedChange={(checked) => handleToggleChange("notifications", "mensajesNuevos", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notify-newsletter">Boletín semanal</Label>
                    <Switch 
                      id="notify-newsletter" 
                      checked={config.notifications.boletinSemanal}
                      onCheckedChange={(checked) => handleToggleChange("notifications", "boletinSemanal", checked)}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleSave("notificaciones")}>
                  Guardar configuración
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="privacidad">
            <Card>
              <CardHeader>
                <CardTitle>Privacidad</CardTitle>
                <CardDescription>
                  Gestiona la visibilidad de tu perfil y datos personales
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="public-profile">Perfil público</Label>
                    <Switch 
                      id="public-profile" 
                      checked={config.privacy.perfilPublico}
                      onCheckedChange={(checked) => handleToggleChange("privacy", "perfilPublico", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-contact">Mostrar información de contacto</Label>
                    <Switch 
                      id="show-contact" 
                      checked={config.privacy.mostrarContacto}
                      onCheckedChange={(checked) => handleToggleChange("privacy", "mostrarContacto", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-experience">Mostrar experiencia laboral</Label>
                    <Switch 
                      id="show-experience" 
                      checked={config.privacy.mostrarExperiencia}
                      onCheckedChange={(checked) => handleToggleChange("privacy", "mostrarExperiencia", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-education">Mostrar educación</Label>
                    <Switch 
                      id="show-education" 
                      checked={config.privacy.mostrarEducacion}
                      onCheckedChange={(checked) => handleToggleChange("privacy", "mostrarEducacion", checked)}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleSave("privacidad")}>
                  Guardar configuración
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="cuenta">
            <Card>
              <CardHeader>
                <CardTitle>Seguridad de la cuenta</CardTitle>
                <CardDescription>
                  Gestiona tu contraseña y la seguridad de tu cuenta
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-4">Cambiar contraseña</h3>
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Contraseña actual</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Nueva contraseña</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirmar nueva contraseña</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start space-y-4">
                <Button onClick={() => handleSave("seguridad")}>
                  Actualizar contraseña
                </Button>
                
                <Separator className="my-4" />
                
                <div className="w-full">
                  <h3 className="font-medium text-red-600 mb-4">Zona de peligro</h3>
                  <div className="flex flex-col space-y-4">
                    <Button 
                      variant="destructive" 
                      className="flex items-center"
                      onClick={handleLogout}
                    >
                      <LogOut className="mr-2 h-4 w-4" /> Cerrar sesión en todos los dispositivos
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex items-center text-red-600 border-red-200 hover:bg-red-50"
                    >
                      <EyeOff className="mr-2 h-4 w-4" /> Desactivar cuenta temporalmente
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="preferencias">
            <Card>
              <CardHeader>
                <CardTitle>Preferencias</CardTitle>
                <CardDescription>
                  Configura el idioma y otras preferencias de la aplicación
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="language">Idioma</Label>
                  <div className="flex items-center space-x-2">
                    <Languages className="h-4 w-4 text-gray-500" />
                    <select 
                      id="language" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={config.language}
                      onChange={(e) => setConfig(prev => ({ ...prev, language: e.target.value }))}
                    >
                      <option value="es">Español</option>
                      <option value="en">English</option>
                      <option value="fr">Français</option>
                      <option value="de">Deutsch</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="theme">Tema</Label>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <input 
                        id="theme-light" 
                        type="radio" 
                        name="theme" 
                        value="light"
                        checked={config.theme === "light"}
                        onChange={() => setConfig(prev => ({ ...prev, theme: "light" }))}
                        className="h-4 w-4"
                      />
                      <Label htmlFor="theme-light">Claro</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        id="theme-dark" 
                        type="radio" 
                        name="theme" 
                        value="dark"
                        checked={config.theme === "dark"}
                        onChange={() => setConfig(prev => ({ ...prev, theme: "dark" }))}
                        className="h-4 w-4"
                      />
                      <Label htmlFor="theme-dark">Oscuro</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        id="theme-system" 
                        type="radio" 
                        name="theme" 
                        value="system"
                        checked={config.theme === "system"}
                        onChange={() => setConfig(prev => ({ ...prev, theme: "system" }))}
                        className="h-4 w-4"
                      />
                      <Label htmlFor="theme-system">Sistema</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleSave("preferencias")}>
                  Guardar preferencias
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Configuracion;
