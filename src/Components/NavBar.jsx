import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navlinks = <>
    <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/products" className="text-white hover:text-gray-300">
              Products
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300">
              About Us
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
            <Link
              to="/cart"
              className="text-white block lg:inline-block lg:text-white lg:hover:text-gray-300 flex items-center mt-4 lg:mt-0"
            >
              <svg
                className="w-6 h-6 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4l2 16h12l2-16M7 8h10M11 12h2m-2 4h4"
                ></path>
              </svg>
              Cart
            </Link>
  </>

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-bold flex gap-3 items-center">
            <img className="w-12 h-12 rounded-full" src="https://i.ibb.co/nwt5mjc/logo.png" alt="" />
          <span className="text-3xl">Green Commerce</span>
        </Link>

        {/* Navigation links */}
        <div className="lg:flex items-center">
          {/* Horizontal menu for larger screens */}
          <div className="hidden lg:flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md border-none focus:outline-none focus:ring focus:border-blue-300"
            />

            {navlinks}
          </div>

          {/* Mobile menu button and dropdown for smaller screens */}
          <div className="lg:hidden relative">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
            <div
              className={`absolute px-14 space-y-1 flex flex-col top-0 right-0 mt-12 bg-gray-800 p-2 rounded-md shadow-lg ${
                isMobileMenuOpen ? "block" : "hidden"
              }`}
            >
              {navlinks}
            </div>
          </div>
        </div>

        {/* Shopping cart icon and link */}
      </div>
    </nav>
  );
};

export default NavBar;
