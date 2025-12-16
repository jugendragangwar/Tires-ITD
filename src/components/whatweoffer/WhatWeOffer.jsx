import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import pic2 from '../../assets/pic2.jpg';

const WhatWeOffer = () => {
    return (
        <>
            <Navbar />
            <div className="grid sm:grid-cols-2 grid-cols-1 bg-gray-200 sm:h-full h-auto w-full relative">
                <div className="flex justify-center items-center sm:ml-16 mt-12 sm:mt-28">
                    <img
                        src={pic2}
                        alt="What We Offer"
                        className="w-[92vw] sm:w-[40vw] h-[55vh] sm:h-[70vh] rounded-tr-3xl object-cover"
                    />
                </div>
                <div className="sm:mt-40 mt-10 px-4 sm:px-0">
                    <h2 className="text-xl underline mb-8">What We Offer</h2>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <Link
                                to="/Location"
                                className="font-bold text-2xl sm:text-[30px] hover:text-blue-900 hover:underline"
                            >
                                Location
                            </Link>
                            <div className="flex flex-col mt-4">
                                <Link to="/Shop" className="hover:text-blue-900 hover:underline">
                                    Shop
                                </Link>
                                <Link to="/Grow" className="mt-4 hover:text-blue-900 hover:underline">
                                    Grow
                                </Link>
                                <Link to="/Reward" className="mt-4 hover:text-blue-900 hover:underline mb-4">
                                    Reward
                                </Link>
                            </div>
                        </div>
                        <div>
                            <Link
                                to="/product"
                                className="font-bold text-2xl sm:text-[30px] hover:text-blue-900 hover:underline"
                            >
                                Products
                            </Link>
                            <div className="flex flex-col mt-4">
                                <Link to="/ITDSuppliers" className="hover:text-blue-900 hover:underline">
                                    Supplies
                                </Link>
                                <Link to="/Tires" className="mt-4 hover:text-blue-900 hover:underline">
                                    Tires
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhatWeOffer;
