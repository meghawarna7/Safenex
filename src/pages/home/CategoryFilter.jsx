import React, { useEffect, useState } from 'react';
import FoodCard from '../books/FoodCard'; // Ensure this component exists

const CategoryFilter = ({ categories = [] }) => {
    console.log("Categories:", categories);
    const [foods, setFoods] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Fetch foods data
    useEffect(() => {
        fetch("foods.json") // Ensure this path is correct
            .then(res => res.json())
            .then(data => {
                console.log(data); // Check the fetched data
                setFoods(data);
            })
            .catch(err => console.error("Error fetching foods:", err));
    }, []);

    // Handle category selection
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    // Filter foods based on selected category
    const filteredFoods = selectedCategory
        ? foods.filter(food => food.category === selectedCategory) // Ensure each food item has a category
        : foods;

    return (
        <div className='py-10'>
            <h2 className='text-3xl font-semibold mb-6'>
                <span className='text-black'>Explore</span> 
                <span className='text-gray-600'> Healthy Options</span>
            </h2>

            {/* Render category buttons */}
            <div className="flex justify-center gap-4 mb-8">
    {categories.map((category) => (
        <button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-700'
            } hover:bg-green-400 hover:text-white transition`}
        >
            {category}
        </button>
    ))}
                <button
                    onClick={() => setSelectedCategory(null)} // Reset selection
                    className={`px-4 py-2 rounded-full ${
                        selectedCategory === null
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-200 text-gray-700'
                    } hover:bg-green-400 hover:text-white transition`}
                >
                    All
                </button>
            </div>

            {/* Render filtered food items */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredFoods.length > 0 ? (
                    filteredFoods.map((food) => (
                        <FoodCard key={food._id} food={food} />
                    ))
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p>No food items available in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryFilter;
