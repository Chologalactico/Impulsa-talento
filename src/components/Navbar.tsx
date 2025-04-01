
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Home,
  BookOpen,
  Briefcase,
  Mail,
  Bell,
  User,
  Menu,
  X,
  Building,
  Search,
  LogIn,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Normalmente esto vendría de un contexto de autenticación

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-secondary border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="flex-shrink-0 bg-primary rounded-full p-2 mr-2">
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="font-semibold text-lg">Impulsa Talento</span>
            </Link>
          </div>

          {/* Search bar - only on desktop */}
          {!isMobile && (
            <div className="flex-1 max-w-md mx-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar empleos, cursos..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                />
              </div>
            </div>
          )}

          {/* Desktop navigation */}
          {!isMobile && (
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
            </nav>
          )}

          {/* User menu and mobile menu button */}
          <div className="flex items-center">
            {isLoggedIn ? (
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
            ) : (
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
            )}

            {isMobile && (
              <button
                onClick={toggleMenu}
                className="ml-4 p-2 text-gray-700 hover:text-primary"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isOpen && (
        <div className="container mx-auto px-4 pb-4">
          <div className="mb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar empleos, cursos..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
              />
            </div>
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
      )}
    </header>
  );
};

export default Navbar;
