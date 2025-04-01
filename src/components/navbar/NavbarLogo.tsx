
import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
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
  );
};

export default NavbarLogo;
