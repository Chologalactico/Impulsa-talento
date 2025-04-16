
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Empleos from "./pages/Empleos";
import Empresas from "./pages/Empresas";
import Cursos from "./pages/Cursos";
import Mensajes from "./pages/Mensajes";
import Notificaciones from "./pages/Notificaciones";
import Perfil from "./pages/Perfil";
import Aplicaciones from "./pages/Aplicaciones";
import Configuracion from "./pages/Configuracion";
import NotFound from "./pages/NotFound";

// Importar páginas de categorías de cursos
import CursosTecnologia from "./pages/cursos/CursosTecnologia";
import CursosMarketing from "./pages/cursos/CursosMarketing";
import CursosDiseno from "./pages/cursos/CursosDiseno";
import CursosAdministracion from "./pages/cursos/CursosAdministracion";
import CursosHabilidades from "./pages/cursos/CursosHabilidades";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/empleos" element={<Empleos />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/cursos/tecnologia" element={<CursosTecnologia />} />
          <Route path="/cursos/marketing" element={<CursosMarketing />} />
          <Route path="/cursos/diseno" element={<CursosDiseno />} />
          <Route path="/cursos/administracion" element={<CursosAdministracion />} />
          <Route path="/cursos/habilidades" element={<CursosHabilidades />} />
          <Route path="/mensajes" element={<Mensajes />} />
          <Route path="/notificaciones" element={<Notificaciones />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/aplicaciones" element={<Aplicaciones />} />
          <Route path="/configuracion" element={<Configuracion />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
