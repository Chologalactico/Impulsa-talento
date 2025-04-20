
import { Link } from "react-router-dom";
import { Home, BookOpen, Briefcase, Building, Mail, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";

interface MobileNavProps {
  isLoggedIn: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNav = ({ isLoggedIn, setIsOpen }: MobileNavProps) => {
  return (
    <div className="container mx-auto px-4 pb-4">
      <div className="mb-4">
        <SearchBar />
      </div>
      
      <nav className="grid grid-cols-1 gap-1">
        <Link
          to="/"
          className="flex items-center text-gray-700 hover:text-primary px-3 py-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsOpen(false)}
        >
          <Home className="h-5 w-5 mr-3" />
          <span>Inicio</span>
        </Link>
        <Link
          to="/cursos"
          className="flex items-center text-gray-700 hover:text-primary px-3 py-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsOpen(false)}
        >
          <BookOpen className="h-5 w-5 mr-3" />
          <span>Cursos</span>
        </Link>
        <Link
          to="/empleos"
          className="flex items-center text-gray-700 hover:text-primary px-3 py-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsOpen(false)}
        >
          <Briefcase className="h-5 w-5 mr-3" />
          <span>Empleos</span>
        </Link>
        <Link
          to="/empresas"
          className="flex items-center text-gray-700 hover:text-primary px-3 py-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsOpen(false)}
        >
          <Building className="h-5 w-5 mr-3" />
          <span>Empresas</span>
        </Link>
        <Link
          to="/mensajes"
          className="flex items-center text-gray-700 hover:text-primary px-3 py-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsOpen(false)}
        >
          <Mail className="h-5 w-5 mr-3" />
          <span>Mensajes</span>
        </Link>
        <Link
          to="/notificaciones"
          className="flex items-center text-gray-700 hover:text-primary px-3 py-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsOpen(false)}
        >
          <Bell className="h-5 w-5 mr-3" />
          <span>Notificaciones</span>
        </Link>
      </nav>

      {!isLoggedIn && (
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button asChild variant="outline" size="sm">
            <Link 
              to="/registro" 
              onClick={() => setIsOpen(false)}
            >
              Registrarse
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link 
              to="/login" 
              onClick={() => setIsOpen(false)}
            >
              Iniciar sesión
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
