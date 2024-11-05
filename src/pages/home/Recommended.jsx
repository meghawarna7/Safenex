import React, { useEffect, useState } from 'react';
import FoodCard from '../books/FoodCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'; // Using circle arrow icons
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Recommended = () => {
    const [foods, setFoods] = useState([]);

    // Fetch foods data
    useEffect(() => {
        fetch("foods.json")
            .then(res => res.json())
            .then(data => setFoods(data))
            .catch(err => console.error("Error fetching foods:", err));
    }, []);

    return (
        <div className='py-10 relative'> {/* Make the parent div relative for absolute positioning */}
            <h2 className='text-3xl font-semibold mb-6'>
    <span className='text-black'>Our</span> 
    <span className='text-gray-600'> Healthy Menus</span> {/* Adjust the gray color as needed */}
</h2>
            <Swiper
                slidesPerView={1} // Default to one slide on mobile
                spaceBetween={40} // Space between slides
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {foods.length > 0 && foods.map((food, index) => (
                    <SwiperSlide key={index}>
                        <FoodCard food={food} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <div className="absolute top-1 right-4 flex flex-col  transform -translate-y-1/2"> {/* Center vertically */}
                <button className="swiper-button-prev bg-green-900 rounded-full p-4 md:p-5 lg:p-6 shadow hover:bg-green-600 flex items-center justify-center">
                    <BsArrowLeftCircle className="text-black" size={20} /> {/* Adjusted icon size for visibility */}
                </button>
                <button className="swiper-button-next bg-green-900 rounded-full p-4 md:p-5 lg:p-6 shadow hover:bg-green-600 flex items-center justify-center">
                    <BsArrowRightCircle className="text-black" size={20} /> {/* Adjusted icon size for visibility */}
                </button>
            </div>
        </div>
    );
};

export default Recommended;
