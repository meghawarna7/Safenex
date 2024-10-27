import React, { useEffect, useState } from 'react';
import BookCard from '../books/BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Recommended = () => {
   
    const [books, setBooks] = useState([]);

    // Fetch books data
    useEffect(() => {
        fetch("books.json")
            .then(res => res.json())
            .then(data => setBooks(data))
            .catch(err => console.error("Error fetching books:", err));
    }, []);

  

    return (
        <div className='py-10'>
            <h2 className='text-3xl font-semibold mb-6'>Recommended</h2>
            <div className='mb-8 flex items-center'>
               
            </div>
            <Swiper
                slidesPerView={1} // Default to one slide on mobile
                spaceBetween={40} // Space between slides
                pagination={{
                    clickable: true,
                }}
                navigation
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
             {
                books.length > 0 && books.slice(8, 18).map((book, index) => (
                     <SwiperSlide key={index}>
                         <BookCard  book={book} />
                     </SwiperSlide>
                 ))
             }
            </Swiper>
        </div>
    );
}

export default Recommended;
