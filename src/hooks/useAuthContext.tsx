
import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { useAuthActions, ActionsType } from "./useAuthActions";

export interface AuthContextProps extends ActionsType {
  user: any;
  loading: boolean;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toast } = useToast();

  const actions = useAuthActions({ setUser, setIsLoggedIn, setLoading, toast });

  // Manejar la sesión y cambios de autenticación
  useEffect(() => {
    const getCurrentUser = async () => {
      setLoading(true);
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
        setIsLoggedIn(!!session?.user);
      } catch (error) {
        console.error("Error al obtener la sesión:", error);
      } finally {
        setLoading(false);
      }
    };
    getCurrentUser();

    const authListener = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setIsLoggedIn(!!session?.user);
      setLoading(false);
    });

    return () => {
      if ("subscription" in authListener) {
        authListener.subscription.unsubscribe();
      }
    };
  }, []);

  const value: AuthContextProps = {
    user,
    loading,
    isLoggedIn,
    ...actions,
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
}
