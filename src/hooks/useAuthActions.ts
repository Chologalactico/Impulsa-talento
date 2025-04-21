
import { supabase, simulateSessionStorage, UserCredentials, UserRegistration, updateUserProfile } from "@/lib/supabase";

export type ActionsType = {
  signIn: (credentials: UserCredentials) => Promise<void>;
  signUp: (userData: UserRegistration) => Promise<void>;
  signOut: () => Promise<void>;
};

type SetUserType = React.Dispatch<React.SetStateAction<any>>;
type SetBoolType = React.Dispatch<React.SetStateAction<boolean>>;
type ToastFn = (opts: any) => void;

interface UseAuthActionsParams {
  setUser: SetUserType;
  setIsLoggedIn: SetBoolType;
  setLoading: SetBoolType;
  toast: ToastFn;
}

export function useAuthActions({
  setUser,
  setIsLoggedIn,
  setLoading,
  toast,
}: UseAuthActionsParams): ActionsType {

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

      if (data && data.user) {
        simulateSessionStorage(data.user);
        setUser(data.user);
        setIsLoggedIn(true);
      }

      toast({
        title: "Inicio de sesión exitoso",
        description: "Bienvenido/a a Impulsa Talento",
      });
    } catch (error: any) {
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
        throw error;
      }

      if (data && data.user) {
        simulateSessionStorage(data.user);
        setUser(data.user);
        setIsLoggedIn(true);

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
      setUser(null);
      setIsLoggedIn(false);
      toast({
        title: "Sesión finalizada",
        description: "Has cerrado sesión correctamente",
      });
    } catch (error: any) {
      toast({
        title: "Error al cerrar sesión",
        description: error.message || "Ha ocurrido un error al cerrar sesión",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return { signIn, signUp, signOut };
}
