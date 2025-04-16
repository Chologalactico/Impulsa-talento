
import { createClient } from '@supabase/supabase-js';

// For development, we'll use hardcoded values if environment variables are not available
// In production, these should be properly set as environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://dgctuivvfnstasfpzfyo.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnY3R1aXZ2Zm5zdGFzZnB6ZnlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzNjYyMDUsImV4cCI6MjAyODk0MjIwNX0.CwBteP8OpYr-8rbQm1vX2NLd32JbFLSpMr4U_KWbFj8';

// Informative console message
console.log('Conectando a Supabase con URL:', supabaseUrl);

// Create the Supabase client
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
