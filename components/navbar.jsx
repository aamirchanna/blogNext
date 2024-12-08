import React from "react";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 py-4 px-6 lg:px-12 flex items-center justify-between shadow-md">
        {/* Logo */}
        <div className="font-bold text-xl text-black">Logo</div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 justify-center items-center text-black text-lg">
          <a href="#home" className="hover:text-gray-800">Home</a>
          <a href="#shop" className="hover:text-gray-800">Shop</a>
          <a href="#about" className="hover:text-gray-800">About</a>
          <a href="#contact" className="hover:text-gray-800">Contact</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-black text-xl">
          <FaUser className="cursor-pointer" />
          <FaSearch className="cursor-pointer" />
          <FaHeart className="cursor-pointer" />
          <FaShoppingCart className="cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-black text-2xl">☰</button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
