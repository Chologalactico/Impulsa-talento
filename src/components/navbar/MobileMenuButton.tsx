
import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuButton = ({ isOpen, toggleMenu }: MobileMenuButtonProps) => {
  return (
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
  );
};

export default MobileMenuButton;
