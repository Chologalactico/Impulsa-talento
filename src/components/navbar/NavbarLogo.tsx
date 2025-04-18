
import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center justify-center w-full">
      <div className="flex items-center space-x-3">
        <img 
          src="/lovable-uploads/ad7d1011-26d6-4904-b816-c2cb57e22645.png" 
          alt="Impulsa Talento Logo" 
          className="h-12 w-12 md:h-16 md:w-16 object-contain" 
        />
        <span className="font-bold text-xl md:text-2xl text-primary">Impulsa Talento</span>
      </div>
    </Link>
  );
};

export default NavbarLogo;
