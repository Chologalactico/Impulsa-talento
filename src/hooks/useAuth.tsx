
import { useState, useEffect, createContext, useContext } from 'react';
import { supabase, UserCredentials, UserRegistration, simulateSessionStorage } from '@/lib/supabase';
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
    const authListener = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Evento de autenticación:", event);
      setUser(session?.user ?? null);
      setIsLoggedIn(!!session?.user);
      setLoading(false);
    });

    // Utilizamos el objeto retornado de manera segura sin depender de su estructura exacta
    return () => {
      // Verificamos si tiene el método unsubscribe y lo llamamos
      if ('subscription' in authListener) {
        authListener.subscription.unsubscribe();
      }
    };
  }, []);

  const signIn = async (credentials: UserCredentials) => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.email, 
        password: credentials.password
      });
      
      if (error) {
        throw error;
      }
      
      // Si estamos en modo simulado, necesitamos guardar manualmente la sesión
      if (data && data.user) {
        simulateSessionStorage(data.user);
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

      // Si el registro es exitoso y estamos en modo simulado, guardar la sesión
      if (data && data.user) {
        console.log("Usuario creado exitosamente:", data.user.id);
        simulateSessionStorage(data.user);
        
        // Simular creación de perfil
        await updateUserProfile(data.user.id, {
          nombre: userData.nombre,
          apellido: userData.apellido,
          email: userData.email,
          tipo_usuario: userData.tipoUsuario,
          created_at: new Date(),
        });
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

  // Función auxiliar para actualizar el perfil
  const updateUserProfile = async (userId: string, userData: any) => {
    try {
      const { error } = await supabase
        .from('perfiles')
        .upsert({ 
          id: userId,
          ...userData,
          updated_at: new Date()
        });
      
      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error al actualizar perfil:', error);
      return false;
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
