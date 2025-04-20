import { Link } from "react-router-dom";
import {
  Home,
  BookOpen,
  Briefcase,
  Mail,
  Bell,
  Building,
  Linkedin,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DesktopNav = () => {
  return (
    <nav className="flex items-center space-x-4">
      <Link
        to="/"
        className="flex items-center text-gray-700 hover:text-primary px-2 py-1"
      >
        <Home className="h-5 w-5 mr-1" />
        <span>Inicio</span>
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center text-gray-700 hover:text-primary px-2 py-1">
            <BookOpen className="h-5 w-5 mr-1" />
            <span>Cursos</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem asChild>
            <Link to="/cursos/tecnologia">Tecnología</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/cursos/marketing">Marketing</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/cursos/diseno">Diseño</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/cursos/administracion">Administración</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/cursos/habilidades">Habilidades blandas</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/cursos">Ver todos</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link
        to="/empleos"
        className="flex items-center text-gray-700 hover:text-primary px-2 py-1"
      >
        <Briefcase className="h-5 w-5 mr-1" />
        <span>Empleos</span>
      </Link>

      <Link
        to="/empresas"
        className="flex items-center text-gray-700 hover:text-primary px-2 py-1"
      >
        <Building className="h-5 w-5 mr-1" />
        <span>Empresas</span>
      </Link>

      <Link
        to="/mensajes"
        className="flex items-center text-gray-700 hover:text-primary px-2 py-1"
      >
        <Mail className="h-5 w-5 mr-1" />
        <span>Mensajes</span>
      </Link>

      <Link
        to="/notificaciones"
        className="flex items-center text-gray-700 hover:text-primary px-2 py-1"
      >
        <Bell className="h-5 w-5 mr-1" />
        <span>Notificaciones</span>
      </Link>

      <a
        href="https://www.linkedin.com/in/impulsa-talento-09602b361"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-gray-700 hover:text-[#0A66C2] px-2 py-1"
      >
        <Linkedin className="h-5 w-5 mr-1" />
        <span>Síguenos</span>
      </a>
    </nav>
  );
};

export default DesktopNav;
