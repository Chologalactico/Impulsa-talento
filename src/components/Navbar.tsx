
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";

import NavbarLogo from "./navbar/NavbarLogo";
import SearchBar from "./navbar/SearchBar";
import DesktopNav from "./navbar/DesktopNav";
import MobileNav from "./navbar/MobileNav";
import UserMenu from "./navbar/UserMenu";
import MobileMenuButton from "./navbar/MobileMenuButton";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, signOut } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-secondary border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <NavbarLogo />
          </div>

          {/* Search bar - only on desktop */}
          {!isMobile && (
            <div className="flex-1 max-w-md mx-4">
              <SearchBar />
            </div>
          )}

          {/* Desktop navigation */}
          {!isMobile && <DesktopNav />}

          {/* User menu and mobile menu button */}
          <div className="flex items-center">
            <UserMenu isMobile={isMobile} />

            {isMobile && (
              <MobileMenuButton 
                isOpen={isOpen} 
                toggleMenu={toggleMenu} 
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isOpen && (
        <MobileNav 
          isLoggedIn={isLoggedIn} 
          setIsOpen={setIsOpen}
        />
      )}
    </header>
  );
};

export default Navbar;
