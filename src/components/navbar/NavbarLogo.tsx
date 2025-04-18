
import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center justify-center">
      <img 
        src="/lovable-uploads/ad7d1011-26d6-4904-b816-c2cb57e22645.png" 
        alt="Impulsa Talento Logo" 
        className="h-10 w-10 object-contain" 
      />
      <span className="font-semibold text-lg ml-2">Impulsa Talento</span>
    </Link>
  );
};

export default NavbarLogo;
