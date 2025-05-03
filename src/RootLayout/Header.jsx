import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Home_images/logos.png';
import { BsXLg, BsList, BsSearch } from "react-icons/bs";

const navItems = [
  { key: 1, title: "Home", path: "/" },
  { key: 2, title: "About", path: "/about-us" },
  { key: 3, title: "Courses", path: "/courses" },
  { key: 4, title: "Blog", path: "/blog" },
  { key: 5, title: "Contact", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4 px-10">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-12 px-1" />
          <div className="text-3xl font-bold cursor-pointer text-orange-600 ml-2">
            EduElevate
          </div>
        </div>

        {/* Navigation Menu (Desktop) */}
        <div className="hidden md:flex md:items-center md:space-x-8 md:mx-auto">
          {navItems.map((item) => (
            <NavLink
              to={item.path}
              key={item.key}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold"
                  : "text-black hover:text-orange-500"
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>

        {/* Search Input and Button (Desktop) */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <div className="relative">
            <BsSearch className="absolute top-3 left-2 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-4 py-2 border rounded-md focus:ring focus:ring-blue-200 outline-none"
            />
          </div>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
            Register for Free
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden items-center space-x-3">
          <BsSearch size={28} />
          <div
            className="cursor-pointer text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <BsXLg size={30} /> : <BsList size={30} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="block md:hidden bg-white p-3 rounded-md mt-2 space-y-10">
          <div className="flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <NavLink
                to={item.path}
                key={item.key}
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "text-gray-800 hover:text-orange-300"
                }
              >
                {item.title}
              </NavLink>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
              Register For Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
