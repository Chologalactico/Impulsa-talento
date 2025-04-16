
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { UserRegistration } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";
import PersonalInfoFields from "./form-sections/PersonalInfoFields";
import CredentialsFields from "./form-sections/CredentialsFields";
import UserTypeField from "./form-sections/UserTypeField";
import TermsField from "./form-sections/TermsField";
import TermsDialog from "./TermsDialog";

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

const RegistroForm = () => {
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
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-4">
            <PersonalInfoFields form={form} />
            <CredentialsFields form={form} />
            <UserTypeField form={form} />
            <TermsField 
              form={form} 
              onOpenTerms={() => setShowTermsDialog(true)} 
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
      
      <div className="text-center text-sm mt-4">
        ¿Ya tienes una cuenta?{" "}
        <Link to="/login" className="text-primary font-medium hover:underline">
          Inicia sesión aquí
        </Link>
      </div>

      <TermsDialog 
        open={showTermsDialog} 
        onOpenChange={setShowTermsDialog} 
      />
    </>
  );
};

export default RegistroForm;
