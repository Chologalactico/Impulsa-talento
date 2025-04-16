
import { createClient } from '@supabase/supabase-js';

// Asegurarse de que las variables de entorno estén definidas
// Los valores deben provenir de tu proyecto de Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Verificar si las variables de entorno están configuradas
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL y clave anónima no configuradas. La autenticación no funcionará.');
  console.info('Por favor configura las variables de entorno VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en tu archivo .env.local');
  console.info('Puedes encontrar estos valores en la sección API de tu proyecto de Supabase.');
}

// Crear cliente de Supabase con URL y clave válida
export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
);

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
