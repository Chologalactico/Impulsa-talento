
import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="flex-shrink-0 bg-primary rounded-full p-2 mr-2">
        <img 
          src="/lovable-uploads/new-logo.png" 
          alt="Impulsa Talento Logo" 
          className="h-6 w-6"
        />
      </div>
      <span className="font-semibold text-lg">Impulsa Talento</span>
    </Link>
  );
};

export default NavbarLogo;
