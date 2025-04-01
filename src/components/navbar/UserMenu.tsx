
import { Link } from "react-router-dom";
import { User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserMenuProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  isMobile: boolean;
}

const UserMenu = ({ isLoggedIn, setIsLoggedIn, isMobile }: UserMenuProps) => {
  if (isLoggedIn) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center text-gray-700 hover:text-primary">
            <User className="h-5 w-5 mr-1" />
            <span className={isMobile ? "sr-only" : ""}>Usuario</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem asChild>
            <Link to="/perfil">Mi Perfil</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/aplicaciones">Mis Aplicaciones</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/configuracion">Configuración</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="w-full text-left"
            >
              Cerrar Sesión
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="flex space-x-2">
      <Button asChild variant="outline" size="sm" className="hidden md:flex">
        <Link to="/registro">Registrarse</Link>
      </Button>
      <Button asChild size="sm">
        <Link to="/login" className="flex items-center">
          <LogIn className="h-4 w-4 mr-1" />
          <span>Iniciar sesión</span>
        </Link>
      </Button>
    </div>
  );
};

export default UserMenu;
