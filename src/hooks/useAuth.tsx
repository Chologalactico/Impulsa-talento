
// Hook principal expuesto para consumir el contexto de autenticación

import { useAuthContext, AuthProvider } from "./useAuthContext";

export const useAuth = useAuthContext;
export { AuthProvider };
