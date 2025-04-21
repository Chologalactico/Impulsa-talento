
import { createClient } from '@supabase/supabase-js';

// Para desarrollo, usaremos una implementación simulada mientras se configura Supabase correctamente
const MOCK_MODE = true; // Cambia a false cuando tengas tus credenciales reales de Supabase

// Las credenciales existentes parecen no ser válidas
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://dgctuivvfnstasfpzfyo.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnY3R1aXZ2Zm5zdGFzZnB6ZnlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzNjYyMDUsImV4cCI6MjAyODk0MjIwNX0.CwBteP8OpYr-8rbQm1vX2NLd32JbFLSpMr4U_KWbFj8';

// Mensaje informativo
console.log('Modo de autenticación:', MOCK_MODE ? 'SIMULADO' : 'CONECTANDO A SUPABASE');

// Creamos el cliente real de Supabase (solo se usará si MOCK_MODE es false)
const realSupabase = createClient(supabaseUrl, supabaseAnonKey);

// Cliente simulado para desarrollo mientras no se configure Supabase
const mockSupabase = {
  auth: {
    signUp: async ({ email, password, options }: any) => {
      console.log('SIMULACIÓN: Registro con email', email, 'y metadata:', options?.data);
      return {
        data: {
          user: {
            id: 'mock-user-id-' + Math.random().toString(36).substring(2),
            email,
            user_metadata: options?.data || {},
          },
        },
        error: null,
      };
    },
    signInWithPassword: async ({ email, password }: any) => {
      console.log('SIMULACIÓN: Inicio de sesión con email', email);
      return {
        data: {
          user: {
            id: 'mock-user-id-' + Math.random().toString(36).substring(2),
            email,
            user_metadata: {
              nombre: 'Usuario',
              apellido: 'Simulado',
              tipo_usuario: 'individual',
            },
          },
          session: {
            access_token: 'mock-token',
            user: {
              id: 'mock-user-id',
              email,
              user_metadata: {
                nombre: 'Usuario',
                apellido: 'Simulado',
                tipo_usuario: 'individual',
              },
            }
          },
        },
        error: null,
      };
    },
    getSession: async () => {
      const savedSession = localStorage.getItem('mock_session');
      
      if (savedSession) {
        const session = JSON.parse(savedSession);
        return { data: { session }, error: null };
      }
      
      return { data: { session: null }, error: null };
    },
    onAuthStateChange: (callback: any) => {
      // Simular cambio de estado cuando se llama a signIn o signOut
      const interval = setInterval(() => {
        const isLoggedIn = localStorage.getItem('mock_session') !== null;
        const event = isLoggedIn ? 'SIGNED_IN' : 'SIGNED_OUT';
        const session = isLoggedIn ? JSON.parse(localStorage.getItem('mock_session') || '{}') : null;
        
        callback(event, { session });
      }, 1000);
      
      return {
        subscription: {
          unsubscribe: () => clearInterval(interval),
        },
      };
    },
    signOut: async () => {
      console.log('SIMULACIÓN: Cerrando sesión');
      localStorage.removeItem('mock_session');
      return { error: null };
    },
  },
  from: (table: string) => {
    return {
      insert: async (data: any) => {
        console.log(`SIMULACIÓN: Insertando en tabla "${table}"`, data);
        return { error: null };
      },
      select: async (columns: string) => {
        console.log(`SIMULACIÓN: Seleccionando de tabla "${table}", columnas "${columns}"`);
        return { data: [], error: null };
      },
      upsert: async (data: any) => {
        console.log(`SIMULACIÓN: Upsert en tabla "${table}"`, data);
        return { error: null };
      },
    };
  },
};

// Exportar el cliente adecuado según el modo
export const supabase = MOCK_MODE ? mockSupabase : realSupabase;

// Tipos para los usuarios
export type UserCredentials = {
  email: string;
  password: string;
};

export type UserRegistration = UserCredentials & {
  nombre: string;
  apellido: string;
  tipoUsuario: 'individual' | 'empresa';
};

// Función para comprobar si el usuario está autenticado
export const getCurrentUser = async () => {
  if (MOCK_MODE) {
    const savedSession = localStorage.getItem('mock_session');
    if (savedSession) {
      const session = JSON.parse(savedSession);
      return session.user;
    }
    return null;
  }
  
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    throw error;
  }
  return data.session?.user;
};

// Función para actualizar el perfil del usuario en la tabla de perfiles
export const updateUserProfile = async (userId: string, userData: any) => {
  if (MOCK_MODE) {
    console.log('SIMULACIÓN: Actualizando perfil para usuario', userId, 'con datos:', userData);
    return true;
  }
  
  const { error } = await supabase
    .from('perfiles')
    .upsert({ 
      id: userId,
      ...userData,
      updated_at: new Date()
    });
  
  if (error) throw error;
  return true;
};

// Función mock para simular el inicio de sesión
export const simulateSessionStorage = (user: any) => {
  if (MOCK_MODE) {
    const mockSession = {
      access_token: 'mock-token-' + Math.random().toString(36).substring(2),
      user: user,
    };
    localStorage.setItem('mock_session', JSON.stringify(mockSession));
  }
};
