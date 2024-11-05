import React from 'react';

import NutrientCard from '../../components/NutrientCard';
import FreshnessCard2 from '../../components/FreshCard2';

const Banner4 = () => {
  return (
    <div
      className="relative w-full h-auto rounded-2xl overflow-hidden shadow-lg p-6 bg-green-700 text-white"
    >
      {/* Responsive container */}
      <div className="flex flex-col md:flex-row md:divide-x md:divide-white/30">
        
        {/* Left Section */}
        <div className="flex-1 p-4">
        <NutrientCard />
        </div>
        
        {/* Right Section */}
        <div className="flex-1 p-4 flex items-center justify-center md:justify-start">
           <FreshnessCard2 />
        </div>
      </div>
    </div>
  );
};

export default Banner4;
