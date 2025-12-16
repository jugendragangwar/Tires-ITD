import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';
import { IoMdSettings } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import { AiFillTool } from "react-icons/ai";
import { GiCarWheel } from "react-icons/gi";
import { MdOutlineTireRepair } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import shops from '../../assets/shops.jpeg';


const Shop = () => {
    const handlelogin = () => {
        window.location.href = '/LoginPage';
    }

    return (
        <>
            <Navbar />
            <div className=" h-screen mx-auto">
                <div className="relative">
                    <div className="absolute inset-0 bg-cover text-center bg-center">
                        <img src={shops}
                            alt=""
                            className="w-full h-[100vh] sm:h-[100%]"
                        />
                    </div>
                    <div className="relative lg:ml-16  p-6 text-white   ">
                        <div className="max-w-2xl  mt-28 lg:mt-28">
                            <h3 className=" font-bold  ">Shop Connected</h3>
                            <h3 className="lg:text-[60px] text-4xl font-bold ">One connected <br />
                                hub for <br /> your business </h3>
                            <p className='font-bold  mb-7'>Location drives shopping choice by enabling<br />
                                you to easily browse and purchase tires, parts and other products<br />
                                from one centralized platform. No more multiple log-ins or losing <br />
                                order forms from multiple places. One connected hub, for you. </p>
                            <button className="bg-red-500 hover:bg-blue-900 text-white font-bold py-2 px-4  rounded mb-4" onClick={handlelogin}>
                                Log In Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ifgrfgeifg */}
            <div className=" text-center justify-center sm:mt-8">
                <div className='text-black text-center mb-8   lg:left-0 sm:mt-28 mt-12'>
                    <h1 className="font-bold text-xl leading-8 mb-4 text-black">Get what you need with:</h1>
                    <div className='grid grid-cols-3 sm:grid-cols-3 divide-x divide-gray-600 mb-8 lg:mt-8'>
                        <div className='flex items-center justify-center '>
                            <div className='flex flex-col items-center'>
                                <AiFillTool size={30} />
                                <h1 className='font-bold text-xl mt-4'>Best-in-class product <br /><span className='text-blue-900 font-bold text-xl'>selection</span>   </h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <IoMdSettings size={30} />
                                <h1 className='font-bold text-xl mt-4'>Self-service ordering on <br /><span className='text-blue-900 font-bold text-xl'>desktop or mobile app</span>  </h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <FaTrophy size={30} />
                                <h1 className='font-bold text-xl mt-4'>Same and next-day<br /><span className='text-blue-900 font-bold text-xl'>delivery options</span>  </h1>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 divide-x divide-gray-600 mb-8 lg:mt-8'>
                        <div className='flex items-center justify-center '>
                            <div className='flex flex-col items-center'>
                                <GiCarWheel size={30} />
                                <h1 className='font-bold text-xl mt-4'>24/7 visibility with real- <br /><span className='text-blue-900 font-bold text-xl'>time delivery notifications</span>  </h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <MdOutlineTireRepair size={30} />
                                <h1 className='font-bold text-xl mt-4'>Mobile tire installation <span className='text-blue-900 font-bold text-xl'>management</span> </h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <TbTruckDelivery size={30} />
                                <h1 className='font-bold text-xl mt-4'>Line of <span className='text-blue-900 font-bold text-xl'>credit</span>  </h1>
                            </div>
                        </div>

                    </div>
                </div>



            </div>
            {/* egyeyigehwi */}


            <div className='grid lg:grid-cols-2 mt-8 '>
                <div className='inset-0 items-center mb-16 lg:ml-16 relative p-2'>
                    <img
                        src="https://images.pexels.com/photos/3399938/pexels-photo-3399938.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        className='rounded-br-3xl relative w-full rounded-tl-3xl h-[50vh] '
                    />
                    <div className='absolute top-0 left-0 w-full h-[30%] flex  p-2'>
                        <h1 className='text-white text-center text-[40px] font-bold p-2 bg-blue-900 rounded-bl-3xl rounded-tr-3xl'>
                            Order Tracking
                        </h1>
                    </div>
                </div>


                {/* jhduhdeuidhed */}

                <div className="flex justify-between lg:ml-16">
                    <div className=" ">
                        <h2 className="text-3xl font-bold mb-4 text-red-600 ml-4">Speed + accuracy = trust </h2>
                        <h2 className="mb-4 font-bold text-blue-900 text-[40px] ml-2">
                            Building confidence <br />with each delivery
                        </h2>
                        <p className='font-bold p-2'>You do what you say you’ll do. We know, because that’s <br />
                            how we roll, too. The result? You get fast and accurate delivery <br />
                            from our comprehensive and efficient network of distribution centers.<br />
                            Your consumers can feel confident about ordering from you again and again.  </p>
                    </div>
                </div>
            </div>
            {/* yiegriowi */}
            <div className='grid lg:grid-cols-2 lg:mt-16  '>


                <div className="flex justify-between  lg:ml-16">
                    <div className="justify-center ">
                        <h2 className="text-2xl font-bold mb-4 text-red-600 ml-2">Paperless, efficient, easy</h2>
                        <h1 className="mb-4 font-bold text-blue-900 text-[40px] ml-2">
                            A smoother ride for everyone involved</h1>
                        <p className='font-bold p-2'>Our delivery solutions make for good purchasing<br />
                            experiences and happy consumers, reducing friction for you. Keep your<br />
                            business moving forward, with delivery alert notifications,<br />
                            easy and secure payment options, and emailed invoices that <br />
                            reflect real-time order changes. </p>
                    </div>
                </div>
                <div className='inset-0 items-center lg:mb-16 mt-8  relative'>
                    <img
                        src="https://images.pexels.com/photos/2479634/pexels-photo-2479634.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        className='rounded-bl-3xl relative w-full  rounded-tr-3xl h-[50vh] p-2'
                    />
                </div>
            </div>


            <div className='grid lg:grid-cols-2 mt-8 p-2'>
                <div className='inset-0 items-center mb-16 lg:ml-16 relative'>
                    <img
                        src="https://images.pexels.com/photos/3399938/pexels-photo-3399938.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        className='rounded-br-3xl relative w-full rounded-tl-3xl sm:h-[70vh] h-[50vh] '
                    />

                </div>


                {/* jhduhdeuidhed */}

                <div className="flex justify-between lg:ml-16">
                    <div className=" ">
                        <h2 className="text-3xl font-bold mb-4 text-red-600 ">Shop for tires online</h2>
                        <h1 className="mb-4 font-bold text-blue-900 text-[50px]">
                            Expand your reach
                        </h1>
                        <p className='font-bold'>Your consumers will have a seamlessly <br />
                            integrated experience on your website. We'll provide you with full,<br />
                            modern transaction capabilities so you can easily sell passenger and<br />
                            light truck tires from your own website. Your consumers can access<br />
                            an extensive selection of tires. </p>

                    </div>

                </div>

            </div>
            {/* yugduwtgduwgdi */}

            <div className="lg:flex flex-col items-center justify-center lg:mb-8 mb-8 p-2 space-y-8">
                <h3 className='font-bold text-red-600 '>Streamline your operations</h3>
                <h2 className="text-3xl font-bold sm:text-center">Location drives what's next.</h2>
                <h3 className="text-center">Solutions designed to grow your business using the latest technology and <br />
                    analytics so you can take it to the next level, and beyond.</h3>

                <div className="flex justify-center  p-4 lg:p-0">
                    <div className="text-center lg:flex lg:justify-around lg:mt-20 mt-10 w-full lg:border-t gap-10 lg:gap-20 border-t border-b-0 border-l-0 border-r-0 bg-white">
                        <div className="w-full lg:w-80 rounded-tr-3xl mt-8 overflow-hidden shadow-lg">
                            <img
                                src="https://media.istockphoto.com/id/123066720/photo/tires.jpg?s=1024x1024&w=is&k=20&c=Jlnzs-Muoy9OCiMHD5Xc5JBO956hqVinqMkl5ZFQZH0="
                                className="w-full h-56 lg:h-auto object-cover"
                                alt="Grow Your Business"
                            />
                            <div className="bg-white text-black px-4 py-6">
                                <h1 className="text-2xl lg:text-3xl font-bold mb-4">Grow Your Business</h1>
                                <p className="mb-4">We build top-tier solutions to help you serve your consumers better and simplify how you manage the day-to-day.</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-80 rounded-tr-3xl mt-8 overflow-hidden shadow-lg">
                            <img
                                src="https://images.pexels.com/photos/6720537/pexels-photo-6720537.jpeg?auto=compress&cs=tinysrgb&w=600"
                                className="w-full h-56 lg:h-auto object-cover"
                                alt="Rewards For Your Business"
                            />
                            <div className="bg-white text-black px-4 py-6">
                                <h1 className="text-2xl lg:text-3xl font-bold mb-4">Rewards For Your Business</h1>
                                <p className="mb-4">Rewarding customer loyalty through increased quarterly payouts, dream vacation opportunities, and a range of lucrative benefits.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>


    );
};

export default Shop;
