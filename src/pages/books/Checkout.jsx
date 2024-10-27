import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CheckoutPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [isChecked, setIsChecked] = useState(false);

    const onSubmit = (data) => {
        const orderDetails = {
            name: data.name,
            email: data.email,
            address: {
                city: data.city,
                country: data.country,
                state: data.state,
                zipcode: data.zipcode,
            },
            phone: data.phone,
            productIds: cartItems.map(item => item?._id),
            totalPrice: totalPrice,
        };

        // Here you would typically send the orderDetails to your backend API.
        // Since we don't have useCreateOrderMutation, simulate an order creation success.
        Swal.fire({
            title: "Confirmed Order",
            text: "Your order was placed successfully!",
            icon: "success",
            confirmButtonText: "Okay",
        }).then(() => {
            // Navigate to the orders page or clear the cart as needed
            navigate("/orders");
        });
    };

    return (
        <section>
            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <h2 className="font-semibold text-xl text-gray-600 mb-2">Cash On Delivery</h2>
                    <p className="text-gray-500 mb-2">Total Price: ${totalPrice}</p>
                    <p className="text-gray-500 mb-6">Items: {cartItems.length > 0 ? cartItems.length : 0}</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 text-sm">
                        <div>
                            <label htmlFor="name">Full Name</label>
                            <input {...register("name", { required: true })} type="text" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                            {errors.name && <span className="text-red-500">Name is required</span>}
                        </div>

                        <div>
                            <label htmlFor="email">Email Address</label>
                            <input {...register("email", { required: true })} type="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                            {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>

                        <div>
                            <label htmlFor="phone">Phone Number</label>
                            <input {...register("phone", { required: true })} type="tel" id="phone" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                            {errors.phone && <span className="text-red-500">Phone number is required</span>}
                        </div>

                        <div>
                            <label htmlFor="city">City</label>
                            <input {...register("city", { required: true })} type="text" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                            {errors.city && <span className="text-red-500">City is required</span>}
                        </div>

                        <div>
                            <label htmlFor="zipcode">Zipcode</label>
                            <input {...register("zipcode", { required: true })} type="text" id="zipcode" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                            {errors.zipcode && <span className="text-red-500">Zipcode is required</span>}
                        </div>

                        <div>
                            <input type="checkbox" id="terms" onChange={(e) => setIsChecked(e.target.checked)} />
                            <label htmlFor="terms" className="ml-2">I agree to the Terms & Conditions</label>
                        </div>

                        <button disabled={!isChecked} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Place Order
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CheckoutPage;
