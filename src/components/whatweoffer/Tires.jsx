import React from 'react';
import Navbar from '../navbar/Navbar';
import { TbJewishStar } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { SlHeart } from "react-icons/sl";
import { GrPerformance } from "react-icons/gr";
import Footer from '../footer/Footer';
import { FcAddDatabase } from "react-icons/fc";
import { VscTools } from "react-icons/vsc";
import { GiCartwheel } from "react-icons/gi";
import { FcClock } from "react-icons/fc";
import { MdTireRepair } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const Tires = () => {
    const handlePartner = () => {
        window.location.href = '/PartnerUsPage';
    }
    return (
        <>
            <Navbar />
            <div className="  h-screen mx-auto">
                <div className="relative">
                    <div className="absolute inset-0 bg-cover text-center bg-center">
                        <img src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                            className=" w-full h-[100%]  "
                        />
                    </div>
                    <div className="relative sm:ml-16  p-6 text-white   ">
                        <div className="max-w-2xl  mt-28 sm:mt-28">
                            <h3 className=" font-bold ">What We Offer, Products, Tires</h3>
                            <h1 className="lg:text-[80px] font-bold text-[60px] ">An unbeatable  <br /> selection of tires</h1>
                            <p className='text-xl mb-7'>
                                Access over 4 million tires in every style and <br /> size from top global brands in the industry. <br />
                            </p>

                        </div>
                        <button className="bg-red-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" onClick={handlePartner}>Partner With Us</button>
                    </div>

                </div>
            </div>
            {/* gegei */}

            <div className='text-center justify-center sm:mt-8 p-2'>

                <h1 className="text-xl font-bold text-red-700 mb-4 mt-4 ">We have what you need</h1>
                <p className="text-[40px] font-bold text-gray-800 mb-4">
                    Tire styles  <span className='text-bold tex-xl text-red-700'> for all your consumers
                    </span>
                </p>
                <p className='text-gray-700 text-xl mb-4'>
                    We make it easy to find and select the top styles and brands 
                    for your consumers. With ITDOnline, you'll have an endless aisle of 
                    tires to stock or custom order. From performance to passenger, UTV to winter,
                    we've got you covered.
                </p>
                <div className='grid sm:grid-cols-4 grid-cols-1  gap-2 sm:divide-x sm:divide-gray-600 mb-8 lg:mt-8'>
                    <div className='flex items-center justify-center '>
                        <div className='flex flex-col items-center'>
                            <GrPerformance size={30} />
                            <h1 className='font-bold text-xl mt-4'>Performance </h1>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='flex flex-col items-center'>
                            <LuUsers size={30} />
                            <h1 className='font-bold text-xl mt-4'>Passenger <span className='text-blue-900 font-bold text-xl'>/ Minivan </span>   </h1>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='flex flex-col items-center'>
                            <FcAddDatabase size={30} />
                            <h1 className='font-bold text-xl mt-4'>Crossover<span className='text-blue-900 font-bold text-xl'> / CUV </span>  </h1>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='flex flex-col items-center'>
                            <VscTools size={30} />
                            <h1 className='font-bold text-xl mt-4'>SUV /<span className='text-blue-900 font-bold text-xl'> Light Truck</span>  </h1>
                        </div>
                    </div>
                </div>
                <div className='grid sm:grid-cols-4 grid-cols-2 sm:divide-x sm:divide-gray-600 mb-8 lg:mt-8'>
                    <div className='flex items-center justify-center '>
                        <div className='flex flex-col items-center'>
                            <GiCartwheel size={30} />
                            <h1 className='font-bold text-xl mt-4'>UTV </h1>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='flex flex-col items-center'>
                            <FcClock size={30} />
                            <h1 className='font-bold text-xl mt-4'>Winter  </h1>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='flex flex-col items-center'>
                            <MdTireRepair size={30} />
                            <h1 className='font-bold text-xl mt-4'>Specialty <span className='text-blue-900 font-bold text-xl'>Trailer</span>  </h1>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='flex flex-col items-center'>
                            <TbTruckDelivery size={30} />
                            <h1 className='font-bold text-xl mt-4'>Commercial</h1>
                        </div>
                    </div>
                </div>
                <p className='text-gray-700 text-xl mb-4'>
                    Our built-in solutions make it easy for you to order from anywhere, 
                    track your deliveries, and check your inventory.
                </p>
                <button className="bg-red-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">Explore Digital Solutions</button>
            </div>

            {/* ioheuihei */}

            <div className='grid lg:grid-cols-2 mt-8 lg:mt-20 mb-8 p-2'>
                <div className=' z-20 inset-0 bg-orange-600 sm:w-3/4 w-full sm:h-[80vh] h-[50vh]  rounded-tl-[10%] rounded-br-[10%] lg:ml-16 '>
                    <div className='relative lg:ml-16 z-30   ml-8'>

                        <img
                            src="https://images.pexels.com/photos/3399938/pexels-photo-3399938.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                            className='rounded-br-3xl absolute lg:ml-16 lg:mt-8 opacity-90  rounded-tl-3xl w-full sm:h-[80vh] h-[50vh] lg:h-[70vh]'
                        />

                    </div>

                </div>

                <div className="flex justify-between items-center lg:ml-16 ">
                    <div className=" ">
                        <p className='text-xl '>
                            Get rewarded for your brand loyalty
                        </p>
                        <h1 className="mb-4 font-bold text-blue-900 text-[30px]">
                            A partnership to increase
                            <br />your profitability
                        </h1>
                        <br />
                        <p className='text-xl '>Your tire sourcing troubles are over. We offer programs that <br />
                            reward you for brand loyalty, along with savings to help your <br />
                            business grow. We also help unlock your tire shop’s potential by offering sales insights that can <br />
                            help you build a strategy for the road ahead. </p><br />
                        <button className="bg-red-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">Explore Programs & Rewards</button>

                    </div>

                </div>
            </div >
            <br />
            <br />

            {/* fidufifeiu */}
            <div className="  h-screen mx-auto lg:mt-16">
                <div className="relative">
                    <div className="absolute inset-0 z-10  bg-cover text-center bg-center">
                        <img src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                            className=" w-full h-[100vh] opacity-30 rounded-br-[20%] "
                        />
                    </div>
                </div>
                <div className='text-center max-h-screen justify-center lg:mt-8 p-2'>
                    <h1 className="text-xl font-bold text-red-700 mb-4 mt-4 ">We’ve got you covered</h1>
                    <p className="text-[40px] font-bold text-gray-800 mb-4">
                        Delivered <span className='text-bold tex-xl text-red-700'> in more ways, to more places
                        </span>
                    </p>
                    <p className='text-xl '>Our national distribution network, with more than 1,400 fleet vehicles,
                        is committed to delivering you the best tires. Your delivery will arrive where and when you need it.
                        On average we're tracking more than 8 million deliveries across more than 53 million miles per year. </p><br />
                    <div className='grid sm:grid-cols-3 grid-cols-2 lg:divide-x gap-8 divide-gray-600 mb-8 justify-center lg:mt-8'>
                        <div className='flex items-center  justify-center '>
                            <div className='flex flex-col  items-center'>
                                <LuUsers size={30} />
                                <h1 className='font-bold text-xl mt-4'>We have over </h1>
                                <h1 className='font-bold  text-blue-900 text-xl mt-4'>14K</h1>
                                <p className='text-xl'>fleet vehicles <br /> </p>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col mt-4 items-center'>
                                <TbJewishStar size={30} />
                                <h1 className='font-bold text-xl mt-4'>We're tracking more than </h1>
                                <h1 className='font-bold  text-blue-900 text-xl mt-4'>1M</h1>
                                <p className='text-xl'>deliveries across the India
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col mt-4 items-center'>
                                <SlHeart size={30} />
                                <h1 className='font-bold text-xl mt-4'>We're driving over </h1>
                                <h1 className='font-bold  text-blue-900 text-xl mt-4'>53M</h1>
                                <p className='text-xl'>miles per year<br /> </p>
                            </div>

                        </div>

                    </div>
                    <button className=" bg-red-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded ">Find Your Distribution Center</button>
                </div>
            </div>

            <div className='bg-blue-950  min-h-96 mb-20 mt-40  '>
                <div className='  lg:rounded-tl-[30%] rounded-tl-[10%] w-full h-[80vh] bg-white   '>


                    <div className="flex flex-col items-center justify-center lg:mb-8 mb-8 space-y-8 p-2">
                        <h3 className='font-bold text-red-600'>We bring the best</h3>
                        <h2 className="text-3xl font-bold text-center">An unmatched selection</h2>
                        <h3>The best brands meet superior volume savings. Explore our brands to learn more.</h3>
                        <h1 className="text-3xl font-bold text-center">Passenger & Light Truck</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 px-4 gap-8">
                            <div className=''>
                                <img src="https://images.pexels.com/photos/2684219/pexels-photo-2684219.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt=""
                                    className='rounded-tr-3xl w-full h-60'
                                />

                                <div className="bg-white   p-6">
                                    <div className='flex justify-between'>
                                        <h3 className="text-xl font-semibold mb-4">BUSINESS</h3>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <img src="https://images.pexels.com/photos/205738/pexels-photo-205738.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt=""
                                    className='rounded-tr-3xl w-full h-60'
                                />

                                <div className="bg-white   p-6">
                                    <div className='flex justify-between'>
                                        <h3 className="text-xl font-semibold mb-4">SUSTAINABILITY</h3>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <img src="https://images.pexels.com/photos/790177/pexels-photo-790177.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt=""
                                    className='rounded-tr-3xl w-full h-60'
                                />

                                <div className="bg-white   p-6">
                                    <div className='flex justify-between'>
                                        <h3 className="text-xl font-semibold mb-4">CULTURE</h3>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src="https://images.pexels.com/photos/790177/pexels-photo-790177.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt=""
                                    className='rounded-tr-3xl w-full h-60'
                                />

                                <div className="bg-white   p-6">
                                    <div className='flex justify-between'>
                                        <h3 className="text-xl font-semibold mb-4">CULTURE</h3>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src="https://images.pexels.com/photos/205738/pexels-photo-205738.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt=""
                                    className='rounded-tr-3xl w-full h-60'
                                />

                                <div className="bg-white   p-6">
                                    <div className='flex justify-between'>
                                        <h3 className="text-xl font-semibold mb-4">SUSTAINABILITY</h3>
                                    </div>
                                </div>
                            </div>

                            <div className=''>
                                <img src="https://images.pexels.com/photos/2684219/pexels-photo-2684219.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt=""
                                    className='rounded-tr-3xl w-full h-60'
                                />

                                <div className="bg-white   p-6">
                                    <div className='flex justify-between'>
                                        <h3 className="text-xl font-semibold mb-4">BUSINESS</h3>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <img src="https://images.pexels.com/photos/2684219/pexels-photo-2684219.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt=""
                                    className='rounded-tr-3xl w-full h-60'
                                />

                                <div className="bg-white   p-6">
                                    <div className='flex justify-between'>
                                        <h3 className="text-xl font-semibold mb-4">BUSINESS</h3>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <Footer />
                </div>
            </div>



        </>
    )
}

export default Tires;