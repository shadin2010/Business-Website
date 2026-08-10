import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import logo from '../Image/logo.png';

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">

{/* Logo */}
<div className="cursor-pointer">
    <a href="/" className="flex items-center gap-2">
        <img src={logo} alt="Scrap Buyer Logo" className="h-10 w-auto object-contain" />
        <span className="text-2xl sm:text-3xl font-bold text-green-600">Scrap Buyer</span>
    </a>
</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative pb-1 text-[15px] font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-700 border-b-2 border-transparent hover:text-green-600 hover:border-green-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Call Button */}
        <button className="hidden md:flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl active:scale-95">
          <FiPhoneCall className="text-lg" />
          Call Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-green-600"
        >
          {open ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <div className="bg-white px-6 py-4 space-y-4">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block text-gray-700 font-medium hover:text-green-600 transition"
            >
              {item.name}
            </NavLink>
          ))}

          <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 py-3 font-semibold text-white">
            <FiPhoneCall />
            Call Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;