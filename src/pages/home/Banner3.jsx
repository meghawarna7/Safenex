import React from 'react';
import FreshnessCard from '../../components/FreshnessCard';
import NutrientCard from '../../components/NutrientCard';

const Banner3 = () => {
  return (
    <div
      className="relative w-full h-auto rounded-2xl overflow-hidden shadow-lg p-6 bg-green-700 text-white"
    >
      {/* Responsive container */}
      <div className="flex flex-col md:flex-row md:divide-x md:divide-white/30">
        
        {/* Left Section */}
        <div className="flex-1 p-4">
          <FreshnessCard />
        </div>
        
        {/* Right Section */}
        <div className="flex-1 p-4 flex items-center justify-center md:justify-start">
          <NutrientCard />
        </div>
      </div>
    </div>
  );
};

export default Banner3;
