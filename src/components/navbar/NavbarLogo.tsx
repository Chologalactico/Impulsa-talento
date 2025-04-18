
import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center justify-center">
      <img 
        src="/lovable-uploads/cbb5d6e9-89ce-4b45-9fcf-a6fba18af188.png" 
        alt="Impulsa Talento Logo" 
        className="h-16 w-16 object-contain" 
      />
      <span className="font-bold text-xl ml-3">Impulsa Talento</span>
    </Link>
  );
};

export default NavbarLogo;
