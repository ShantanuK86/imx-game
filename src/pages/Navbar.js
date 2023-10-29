// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link  legacyBehavior href="/">
          <a className="text-white font-bold text-xl">Game App</a>
        </Link>
        <div>
          <Link Link legacyBehavior href="/Login">
            <a className="text-white mr-4">Login</a>
          </Link>
          {/* Add more navigation links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
