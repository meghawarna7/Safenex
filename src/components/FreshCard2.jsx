import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import fruitImage from '../assets/components/s.png'; // Replace with your actual image path

const FreshnessCard2 = () => {
  return (
    <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-96 rounded-2xl overflow-hidden shadow-lg">
      <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden">
        <img src={fruitImage} alt="Fresh Fruit Bowl" className="w-full h-full object-cover" />
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/20 text-white flex flex-col justify-between p-6 rounded-2xl">
        <h2 className="text-2xl font-bold">
          Bursting with <span className="text-green-400">Freshness</span>
        </h2>

        {/* Top-right indicators */}
        <div className="absolute top-4 right-4 flex gap-1">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          <span className="w-2 h-2 bg-white/50 rounded-full"></span>
          <span className="w-2 h-2 bg-white/50 rounded-full"></span>
        </div>

        {/* Left arrow icon */}
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-green-400 text-green-400 hover:text-white p-2 rounded-full">
          <FaChevronLeft />
        </button>

        {/* Right arrow icon */}
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-green-400 text-green-400 hover:text-white p-2 rounded-full">
          <FaChevronRight />
        </button>

        {/* Bottom text content */}
        <div className="mt-auto">
          <p className="text-sm md:text-base mt-2">
          Spinach, kale, and avocado for a refreshing, vitamin-rich boost packed with antioxidants.          </p>
        </div>
      </div>
    </div>
  );
};

export default FreshnessCard2;
