
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pencil, User, Save, Camera } from "lucide-react";
import Navbar from "@/components/Navbar";

const Perfil = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [profile, setProfile] = useState({
    nombre: "Usuario",
    apellidos: "Ejemplo",
    email: "",
    telefono: "600123456",
    profesion: "Desarrollador Web",
    experiencia: "3 años de experiencia en desarrollo web frontend y backend. Especializado en React, TypeScript y Node.js.",
    educacion: "Grado en Ingeniería Informática",
    ubicacion: "Madrid, España"
  });

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    if (!loginStatus) {
      navigate("/login");
      return;
    }
    
    setIsLoggedIn(true);
    const userEmail = localStorage.getItem("userEmail");
    
    // Cargar datos del perfil del localStorage si existen
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      try {
        const parsedProfile = JSON.parse(savedProfile);
        setProfile(prev => ({...prev, ...parsedProfile}));
      } catch (e) {
        console.error("Error parsing profile data", e);
      }
    }
    
    if (userEmail) {
      setProfile(prev => ({...prev, email: userEmail}));
    }
    
    // Cargar avatar si existe
    const savedAvatar = localStorage.getItem("userAvatar");
    if (savedAvatar) {
      setAvatarPreview(savedAvatar);
    }
  }, [navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({...prev, [name]: value}));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setAvatarFile(file);
    
    // Crear una URL para previsualizar la imagen
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      if (typeof fileReader.result === 'string') {
        setAvatarPreview(fileReader.result);
      }
    };
    fileReader.readAsDataURL(file);
  };

  const handleSave = () => {
    setIsEditing(false);
    
    // Guardar imagen de avatar en localStorage
    if (avatarPreview) {
      localStorage.setItem("userAvatar", avatarPreview);
    }
    
    // Guardar datos del perfil en localStorage
    localStorage.setItem("userProfile", JSON.stringify(profile));
    
    toast({
      title: "Perfil actualizado",
      description: "Tu información ha sido actualizada correctamente",
    });
  };

  if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Mi Perfil</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar con foto de perfil */}
          <div className="md:col-span-1">
            <Card>
              <CardContent className="pt-6 flex flex-col items-center">
                <div className="relative">
                  <Avatar className="h-32 w-32 mb-4">
                    <AvatarImage src={avatarPreview || ""} alt={profile.nombre} />
                    <AvatarFallback className="text-4xl">
                      <User className="h-16 w-16" />
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <label 
                      htmlFor="avatar-upload" 
                      className="absolute bottom-4 right-0 bg-primary text-white p-2 rounded-full cursor-pointer"
                    >
                      <Camera className="h-4 w-4" />
                      <input 
                        id="avatar-upload" 
                        type="file" 
                        className="hidden" 
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </label>
                  )}
                </div>
                <h2 className="text-xl font-semibold text-center">{profile.nombre} {profile.apellidos}</h2>
                <p className="text-gray-500 text-center">{profile.profesion}</p>
                <p className="text-gray-500 text-center mt-1">{profile.ubicacion}</p>
                
                <Button 
                  variant="outline" 
                  className="mt-4 w-full"
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                >
                  {isEditing ? (
                    <span className="flex items-center">
                      <Save className="mr-2 h-4 w-4" /> Guardar Cambios
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Pencil className="mr-2 h-4 w-4" /> Editar Perfil
                    </span>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Información principal */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Información Personal</CardTitle>
                <CardDescription>
                  {isEditing 
                    ? "Edita tu información personal a continuación" 
                    : "Tu información personal y profesional"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre</Label>
                      {isEditing ? (
                        <Input 
                          id="nombre" 
                          name="nombre"
                          value={profile.nombre} 
                          onChange={handleChange}
                        />
                      ) : (
                        <p className="text-sm py-2">{profile.nombre}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="apellidos">Apellidos</Label>
                      {isEditing ? (
                        <Input 
                          id="apellidos" 
                          name="apellidos"
                          value={profile.apellidos} 
                          onChange={handleChange}
                        />
                      ) : (
                        <p className="text-sm py-2">{profile.apellidos}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input 
                      id="email" 
                      name="email"
                      value={profile.email} 
                      readOnly
                      disabled={true}
                      className="bg-gray-100"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    {isEditing ? (
                      <Input 
                        id="telefono" 
                        name="telefono"
                        value={profile.telefono} 
                        onChange={handleChange}
                      />
                    ) : (
                      <p className="text-sm py-2">{profile.telefono}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="profesion">Profesión</Label>
                    {isEditing ? (
                      <Input 
                        id="profesion" 
                        name="profesion"
                        value={profile.profesion} 
                        onChange={handleChange}
                      />
                    ) : (
                      <p className="text-sm py-2">{profile.profesion}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="ubicacion">Ubicación</Label>
                    {isEditing ? (
                      <Input 
                        id="ubicacion" 
                        name="ubicacion"
                        value={profile.ubicacion} 
                        onChange={handleChange}
                      />
                    ) : (
                      <p className="text-sm py-2">{profile.ubicacion}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="experiencia">Experiencia</Label>
                    {isEditing ? (
                      <Textarea 
                        id="experiencia" 
                        name="experiencia"
                        value={profile.experiencia} 
                        onChange={handleChange}
                        rows={4}
                      />
                    ) : (
                      <p className="text-sm py-2">{profile.experiencia}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="educacion">Educación</Label>
                    {isEditing ? (
                      <Textarea 
                        id="educacion" 
                        name="educacion"
                        value={profile.educacion} 
                        onChange={handleChange}
                        rows={2}
                      />
                    ) : (
                      <p className="text-sm py-2">{profile.educacion}</p>
                    )}
                  </div>
                  
                  {isEditing && (
                    <div className="pt-4">
                      <Button onClick={handleSave} className="w-full md:w-auto">
                        Guardar Cambios
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
