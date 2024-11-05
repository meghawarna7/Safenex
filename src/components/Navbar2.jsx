import React, { useState } from "react";
import { FaBell, FaChevronDown, FaBars, FaTimes } from "react-icons/fa"; // Notification, dropdown, and menu icons
import logo from "../assets/footer-logo.png";

const Navbar2 = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false); // New state for mobile dropdown
  const [isLoggedIn, setLoggedIn] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleMobileDropdown = () => setMobileDropdownOpen(!isMobileDropdownOpen);

  return (
    <nav className="bg-transparent text-white flex items-center justify-between p-4">
      {/* Left Side - Buttons (Desktop) */}
      <div className="hidden md:flex space-x-4">
        <button
          className={`bg-green-900 text-white ${
            isLoggedIn ? "hover:bg-green-900 hover:text-white" : ""
          } rounded-[20px] px-4 py-2 border border-white transition`}
        >
          Home
        </button>
        <button className="bg-transparent text-black hover:bg-green-900 hover:text-white rounded-[20px] px-4 py-2 border border-white transition">
          Menu
        </button>
        <button className="bg-transparent text-black hover:bg-green-900 hover:text-white rounded-[20px] px-4 py-2 border border-white transition">
          About
        </button>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-transparent text-black hover:bg-green-900 hover:text-white rounded-[20px] px-4 py-2 border border-white transition flex items-center"
          >
            Recipes
            <FaChevronDown className="ml-2" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 bg-white text-green-900 rounded-lg shadow-lg mt-2 z-10">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 2</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 3</a>
            </div>
          )}
        </div>
      </div>

      {/* Center Logo */}
      <div className="flex justify-center flex-1">
        <img src={logo} alt="Logo" className="h-10" />
      </div>

      {/* Right Side - Bell Icon and New Button (Desktop) */}
      <div className="hidden md:flex items-center space-x-14">
        <button className="bg-transparent text-black hover:bg-green-900 hover:text-white rounded-[20px] px-8 py-2 border border-white transition">
          Contact
        </button>
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
          <FaBell className="text-white text-2xl cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-green-900 text-2xl">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-80 z-20 flex flex-col items-center justify-center space-y-4 md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 text-2xl text-white"
          >
            <FaTimes />
          </button>
          <button className="bg-green-900 text-white hover:bg-green-700 rounded-[20px] px-6 py-2 m-2 border border-white transition">
            Home
          </button>
          <button className="bg-transparent text-black hover:bg-green-900 hover:text-white rounded-[20px] px-6 py-2 m-2 border border-white transition">
            Menu
          </button>
          <button className="bg-transparent text-black hover:bg-green-900 hover:text-white rounded-[20px] px-6 py-2 m-2 border border-white transition">
            About
          </button>
          <button
            onClick={toggleMobileDropdown}
            className="bg-transparent text-black hover:bg-green-900 hover:text-white rounded-[20px] px-6 py-2 m-2 border border-white transition flex items-center"
          >
            Recipes
            <FaChevronDown className="ml-2" />
          </button>

          {/* Mobile Recipes Dropdown */}
          {isMobileDropdownOpen && (
            <div className="flex flex-col items-start bg-white text-green-900 rounded-lg shadow-lg px-6 py-2">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 2</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 3</a>
            </div>
          )}

          <button className="bg-transparent text-black hover:bg-green-900 hover:text-white rounded-[20px] px-6 py-2 m-2 border border-white transition">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
