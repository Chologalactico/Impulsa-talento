
import { createClient } from '@supabase/supabase-js';

// Las URL y claves de Supabase se generan automáticamente al crear un proyecto en Supabase
// Proporcionar valores predeterminados para desarrollo local
// En producción, debes establecer estas variables de entorno en tu plataforma de despliegue
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-supabase-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

// Advertencia si faltan las variables de entorno
if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.warn('Supabase URL y clave anónima son necesarias para la funcionalidad completa. Por favor configura las variables de entorno VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en tu archivo .env.local');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    throw error;
  }
  return data.session?.user;
};

// Función para actualizar el perfil del usuario en la tabla de perfiles
export const updateUserProfile = async (userId: string, userData: any) => {
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
