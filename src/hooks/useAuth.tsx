
import { useState, useEffect, createContext, useContext } from 'react';
import { supabase, UserCredentials, UserRegistration } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

interface AuthContextProps {
  user: any;
  loading: boolean;
  signIn: (credentials: UserCredentials) => Promise<void>;
  signUp: (userData: UserRegistration) => Promise<void>;
  signOut: () => Promise<void>;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Verificar la sesión actual al cargar
    const getCurrentUser = async () => {
      setLoading(true);
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
        setIsLoggedIn(!!session?.user);
      } catch (error) {
        console.error('Error al obtener la sesión:', error);
      } finally {
        setLoading(false);
      }
    };

    getCurrentUser();

    // Configurar listener para cambios de autenticación
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Evento de autenticación:", event);
      setUser(session?.user ?? null);
      setIsLoggedIn(!!session?.user);
      setLoading(false);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const signIn = async (credentials: UserCredentials) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword(credentials);
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "Inicio de sesión exitoso",
        description: "Bienvenido/a a Impulsa Talento",
      });
    } catch (error: any) {
      console.error("Error de inicio de sesión:", error);
      toast({
        title: "Error de inicio de sesión",
        description: error.message || "Las credenciales ingresadas son incorrectas",
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (userData: UserRegistration) => {
    try {
      setLoading(true);
      console.log("Intentando registrar usuario:", userData);
      
      // Registrar usuario con email y password
      const { data, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
          data: {
            nombre: userData.nombre,
            apellido: userData.apellido,
            tipo_usuario: userData.tipoUsuario,
          },
        },
      });

      if (error) {
        console.error("Error de Supabase:", error);
        throw error;
      }

      // Si el registro es exitoso, creamos un perfil para el usuario
      if (data.user) {
        console.log("Usuario creado exitosamente:", data.user.id);
        const { error: profileError } = await supabase
          .from('perfiles')
          .insert([
            {
              id: data.user.id,
              nombre: userData.nombre,
              apellido: userData.apellido,
              email: userData.email,
              tipo_usuario: userData.tipoUsuario,
              created_at: new Date(),
            },
          ]);

        if (profileError) {
          console.error('Error al crear perfil:', profileError);
        }
      }

      toast({
        title: "Registro exitoso",
        description: "Se ha registrado correctamente en Impulsa Talento",
      });
    } catch (error: any) {
      console.error("Error completo:", error);
      toast({
        title: "Error en el registro",
        description: error.message || "Ha ocurrido un error al registrar su cuenta",
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "Sesión finalizada",
        description: "Has cerrado sesión correctamente",
      });
    } catch (error: any) {
      console.error("Error al cerrar sesión:", error);
      toast({
        title: "Error al cerrar sesión",
        description: error.message || "Ha ocurrido un error al cerrar sesión",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    isLoggedIn
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};
