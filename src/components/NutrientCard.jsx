import React from 'react';
import fruitImage2 from '../assets/components/g.png'; // Ensure this path is correct

const NutrientCard = () => {
  return (
    <div
      className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-96 rounded-2xl overflow-hidden shadow-lg p-6 flex flex-col justify-between text-white"
      style={{
        backgroundImage: `url(${fruitImage2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'green', // Slight green overlay to match design
        backgroundBlendMode: 'overlay', // This adds a dark green overlay for better text visibility
      }}
    >
      {/* Content overlay */}
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
          Fuel Your Body With <span className="text-green-700">Nutrient-Rich</span> Bowls
        </h2>
        <p className="mt-12 text-sm md:text-base">
          Discover a variety of bowls packed with superfoods, fresh fruits, and healthy toppings that nourish your body and boost your energy.
        </p>
      </div>

      {/* Button */}
      <button className="relative z-10 bg-green-400 hover:bg-green-500 text-green-900 font-semibold px-6 py-2 mt-4 rounded-full w-max mx-auto md:mx-0 md:self-start">
        View our menu
      </button>
    </div>
  );
};

export default NutrientCard;
