
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { UserPlus, Mail, Lock, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useAuth } from "@/hooks/useAuth";

// Esquema de validación
const formSchema = z.object({
  nombre: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  apellido: z.string().min(2, { message: "El apellido debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Correo electrónico inválido" }),
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
  confirmPassword: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
  tipoUsuario: z.enum(["individual", "empresa"], {
    required_error: "Debe seleccionar un tipo de usuario",
  }),
  aceptaTerminos: z.boolean().refine(val => val === true, {
    message: "Debe aceptar los términos y condiciones",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Registro = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showTermsDialog, setShowTermsDialog] = useState(false);
  const { signUp } = useAuth();

  // Inicializar el formulario con react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      confirmPassword: "",
      tipoUsuario: "individual",
      aceptaTerminos: false,
    },
  });

  // Manejar el envío del formulario
  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    
    try {
      // Verificar que las contraseñas coincidan
      if (values.password !== values.confirmPassword) {
        form.setError('confirmPassword', { 
          type: 'manual', 
          message: 'Las contraseñas no coinciden' 
        });
        setIsLoading(false);
        return;
      }

      // Registrar al usuario con Supabase
      await signUp({
        nombre: values.nombre,
        apellido: values.apellido,
        email: values.email,
        password: values.password,
        tipoUsuario: values.tipoUsuario,
      });
      
      // Redirigir al usuario a la página de login
      navigate("/login");
    } catch (error) {
      // El manejo de errores ya se realiza en el hook useAuth
      console.error("Error durante el registro:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Crea tu cuenta</CardTitle>
            <CardDescription className="text-center">
              Regístrate para acceder a todas las funcionalidades
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <FormField
                          control={form.control}
                          name="nombre"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nombre</FormLabel>
                              <div className="relative">
                                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <FormControl>
                                  <Input 
                                    placeholder="Tu nombre" 
                                    className="pl-10" 
                                    {...field} 
                                  />
                                </FormControl>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex-1">
                        <FormField
                          control={form.control}
                          name="apellido"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Apellido</FormLabel>
                              <div className="relative">
                                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <FormControl>
                                  <Input 
                                    placeholder="Tu apellido" 
                                    className="pl-10" 
                                    {...field} 
                                  />
                                </FormControl>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo electrónico</FormLabel>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <FormControl>
                            <Input 
                              placeholder="tu@ejemplo.com" 
                              className="pl-10" 
                              {...field} 
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contraseña</FormLabel>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <FormControl>
                            <Input 
                              type="password" 
                              placeholder="******" 
                              className="pl-10" 
                              {...field} 
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirmar contraseña</FormLabel>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <FormControl>
                            <Input 
                              type="password" 
                              placeholder="******" 
                              className="pl-10" 
                              {...field} 
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="tipoUsuario"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Tipo de usuario</FormLabel>
                        <div className="flex space-x-4">
                          <div className="flex items-center space-x-2">
                            <input 
                              type="radio" 
                              id="individual" 
                              value="individual"
                              checked={field.value === "individual"}
                              onChange={() => field.onChange("individual")}
                              className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                            />
                            <Label htmlFor="individual">Persona</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input 
                              type="radio" 
                              id="empresa" 
                              value="empresa"
                              checked={field.value === "empresa"}
                              onChange={() => field.onChange("empresa")}
                              className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                            />
                            <Label htmlFor="empresa">Empresa</Label>
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="aceptaTerminos"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-2">
                        <FormControl>
                          <Checkbox 
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <div className="text-sm">
                            Acepto los{" "}
                            <button
                              type="button"
                              onClick={() => setShowTermsDialog(true)}
                              className="text-primary underline hover:text-primary/80"
                            >
                              términos y condiciones
                            </button>
                          </div>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Procesando...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Registrarse
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login" className="text-primary font-medium hover:underline">
                Inicia sesión aquí
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* Diálogo de términos y condiciones */}
      <Dialog open={showTermsDialog} onOpenChange={setShowTermsDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Términos y Condiciones</DialogTitle>
            <DialogDescription>
              Al utilizar nuestros servicios, aceptas los siguientes términos y condiciones.
            </DialogDescription>
          </DialogHeader>
          <div className="max-h-[60vh] overflow-y-auto">
            <div className="space-y-4 text-sm">
              <p>
                <strong>1. Aceptación de los términos</strong>
              </p>
              <p>
                Al registrarte y utilizar Impulsa Talento, aceptas cumplir con estos términos y condiciones 
                y todas las leyes y regulaciones aplicables. Si no estás de acuerdo con alguno de estos términos, 
                no puedes utilizar nuestros servicios.
              </p>
              <p>
                <strong>2. Uso del servicio</strong>
              </p>
              <p>
                Te comprometes a utilizar el servicio solo para propósitos legales y de manera que no infrinja 
                los derechos de otros usuarios. No utilizarás el servicio para enviar material ilegal, difamatorio, 
                acosador, abusivo o fraudulento.
              </p>
              <p>
                <strong>3. Privacidad</strong>
              </p>
              <p>
                Tu privacidad es importante para nosotros. Nuestra Política de Privacidad describe cómo recopilamos, 
                utilizamos y protegemos tu información personal cuando utilizas nuestro servicio.
              </p>
              <p>
                <strong>4. Cuentas de usuario</strong>
              </p>
              <p>
                Eres responsable de mantener la confidencialidad de tu cuenta y contraseña, y de restringir el acceso 
                a tu computadora. Aceptas la responsabilidad por todas las actividades que ocurran bajo tu cuenta.
              </p>
              <p>
                <strong>5. Modificaciones del servicio</strong>
              </p>
              <p>
                Nos reservamos el derecho de modificar o discontinuar el servicio en cualquier momento, con o sin previo aviso.
              </p>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Button onClick={() => setShowTermsDialog(false)}>Cerrar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Registro;
