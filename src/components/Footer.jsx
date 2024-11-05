import footerLogo from "../assets/footer-logo.png";
import compLogo from "../assets/safenax.png";
import React from "react";
import { GoTriangleRight } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8 px-4 rounded-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
        
        {/* Left Section */}
        <div className="text-center md:text-left mb-6 md:mb-0 md:flex-1">
          <img src={footerLogo} alt="Logo" className="mb-3 w-60 h-12 mx-auto md:mx-0" />
          <p>FreshBowl</p>
          <p>456 Orchard Street, Greenwood</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4 pb-4 w-full">
            <button className="text-white border border-white rounded-full px-4 py-2 bg-transparent hover:bg-white hover:text-green-900">Facebook</button>
            <button className="text-white border border-white rounded-full px-4 py-2 bg-transparent hover:bg-white hover:text-green-900">X</button>
            <button className="text-white border border-white rounded-full px-4 py-2 bg-transparent hover:bg-white hover:text-green-900">Youtube</button>
            <button className="text-white border border-white rounded-full px-4 py-2 bg-transparent hover:bg-white hover:text-green-900">Instagram</button>
          </div>
        </div>

        {/* Center Section */}
        {/* Center Section */}
<div className="text-center md:text-left mb-6 md:mb-0 md:flex-1">
  <div className="flex flex-col space-y-2 justify-center">
    <div className="flex items-center space-x-2">
      <GoTriangleRight className="text-white" />
      <a href="#" className="hover:underline">Help</a>
    </div>
    <div className="flex items-center space-x-2">
      <GoTriangleRight className="text-white" />
      <a href="#" className="hover:underline">Shop</a>
    </div>
    <div className="flex items-center space-x-2">
      <GoTriangleRight className="text-white" />
      <a href="#" className="hover:underline">Support</a>
    </div>
    <div className="flex items-center space-x-2">
      <GoTriangleRight className="text-white" />
      <a href="#" className="hover:underline">Policies</a>
    </div>
  </div>
</div>


       {/* Right Section */}
<div className="text-center md:text-left mb-10 md:mb-0 md:flex-1">
  <div className="flex flex-col space-y-2 justify-center">
    <div className="flex items-center space-x-2">
      <GoTriangleRight className="text-white" />
      <a href="#" className="hover:underline">Home</a>
    </div>
    <div className="flex items-center space-x-2">
      <GoTriangleRight className="text-white" />
      <a href="#" className="hover:underline">Menu</a>
    </div>
    <div className="flex items-center space-x-2">
      <GoTriangleRight className="text-white" />
      <a href="#" className="hover:underline">About</a>
    </div>
    <div className="flex items-center space-x-2">
      <GoTriangleRight className="text-white" />
      <a href="#" className="hover:underline">Recipes</a>
    </div>
  </div>
</div>

       
      </div>
      <div className="flex justify-center border-b border-white pb-4 w-full"></div>
      <div className="text-center text-sm mt-6">
        <p className="flex justify-center items-center space-x-2">
          <img src={compLogo} alt="Logo" className="mb-0 w-34 h-7 mx-auto md:mx-0" />
          <span>| This site is a demo project for testing purposes only.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
