import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { getImgUrl } from '../../utils/getImgUrl';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice'; // Ensure correct import

const FoodCard = ({ food }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); // Dispatch the addToCart action
    };

    return (
        <div className="rounded-lg shadow-md transition-shadow duration-300 h-full bg-white"> {/* Set background and shadow */}
            <div className="flex flex-col h-full">
                {/* Image Section */}
                <div className="flex-shrink-0 border rounded-t-lg overflow-hidden"> {/* Added rounded top corners */}
                    <Link to={`/foods/${food._id}`}>
                        <img
                            src={getImgUrl(food.coverImage)}
                            alt={food.title}
                            className="w-full h-full object-cover p-2 cursor-pointer hover:scale-105 transition-all duration-200"
                        />
                    </Link>
                </div>
                
                {/* Details Section */}
                <div className="flex items-center justify-between bg-green-400 rounded-b-lg p-4"> {/* Background and padding */}
                    <div className="flex-1 pr-4"> {/* Title and Price */}
                        <Link to={`/foods/${food._id}`}>
                            <h3 className="text-xl font-semibold hover:text-blue-600 mb-1">
                                {food.title}
                            </h3>
                        </Link>
                        <p className="font-medium mb-2">
                            ${food.Price}
                        </p>
                    </div>
                    <button
                        onClick={() => handleAddToCart(food)}
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center" // Button styling
                    >
                        <FiShoppingCart className="mr-2" />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
