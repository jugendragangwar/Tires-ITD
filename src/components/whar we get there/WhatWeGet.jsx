import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';
import itd from '../../assets/IDT (1).png'

const WhatWeGet = () => {
    return (
        <>
            <Navbar />
            <div className="  max-h-full mx-auto">
                <div className="relative">
                    <div className="absolute inset-0 bg-cover text-center bg-center">
                        <img src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="img"
                            className=" w-full h-[50%] " />
                    </div>
                    <div className="relative lg:ml-16  p-6 text-white font-bold  ">
                        <div className="max-w-2xl mt-28 lg:mt-28">
                            <h3 className=" font-bold ">How We Get There</h3>
                            <h1 className="lg:text-[80px] text-[40px] ">The ultimate <br />connector</h1>
                            <p className='text-bold mb-7'> We’re the unmatched leader in the industry and tire replacement ecosystem. <br /> We make connections no one else can, serving as a necessary <br />link between world-class manufacturers and customers of all types.</p>
                            <button className="bg-blue-900 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                                Partner With Us
                            </button>
                        </div>
                        <div className="flex  justify-center   h-screen">

                            <div className="text-center lg:mt-20 mt-20  lg:w-[80%] border-t   border-b-0 border-l-0 border-r-0 rounded-r-3xl bg-white">
                                <h1 className="text-xl font-bold text-red-700 mb-4 mt-20">Distribution network</h1>
                                <p className="text-[50px] text-gray-800"> <span className='text-bold tex-xl text-red-700'>Meeting the needs</span> of tire <br /> manufacturers & tire dealers with <br /> last-mile delivery</p>
                            </div>
                        </div>
                        {/* ifgrfgeifg */}
                        <div className="  grid grid-cols-1 lg:flex   ">
                            <div className='text-gray-500 text-center mb-8   lg:left-0 lg:mt-28 mt-20'>
                                <h1 className='text-bold text-3xl mb-4 '>Tire <br /> manufacturers </h1>
                                <h3 className='font-bold text-2xl mb-4 '>We can help with:</h3>
                                <ul className='  mb-4'>
                                    <li className='mb-4'>1: Fragmented base</li>
                                    <li className='mb-4'>2: Infrastructure</li>
                                    <li className='mb-4'>3: Supply chain visibility</li>
                                    <li className='mb-6'>4: Preference for serving large dealers</li>
                                </ul>
                            </div>


                            <div className="relative ">
                                <img src={itd} alt="" className="w-full h-full lg:w-[90%] lg:h-[90%] rotate-90 lg:rotate-180" />
                                <div className="absolute inset-0 flex flex-col -px-4 justify-center overflow-hidden items-center text-gray-500">
                                    <h2 className="lg:text-2xl font-bold lg:mb-8">Better Value Driven by</h2>
                                    <h1 className='lg:text-[80px] text-2xl font-bold text-blue-900 lg:mb-8'>ITD</h1>
                                    <p className="text-lg ">
                                        1:  Endless inventory <br />
                                        2:  National network <br />
                                        3:  1,400+ private fleet <br />
                                        4: Maximum capacity
                                    </p>
                                </div>
                            </div>



                            <div className="flex flex-col items-center justify-center lg:mb-16 mt-8 text-gray-500">
                                <h2 className="text-3xl font-bold mb-4">Replacement <br />Tire Dealers</h2>
                                <h3 className='font-bold text-2xl mb-4 '>We can help with:</h3>
                                <p className="text-lg  mt-4">
                                    1: Fragmented industry <br />
                                    2: Space <br />
                                    3:  Complexity <br />
                                    4: Urgent delivery needs
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='grid md:grid-cols-2 grid-cols-1 p-2'>
                <div className='inset-0 items-center mb-16 lg:ml-16 relative'>
                    <img
                        src="https://images.pexels.com/photos/3825540/pexels-photo-3825540.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        className='rounded-br-3xl relative rounded-tl-3xl sm:h-[70vh] h-[50vh]'
                    />
                    <div className='absolute top-0 left-0 w-full h-[30%] flex   '>
                        <h1 className='text-white text-center bg-blue-900 w-[30%] rounded-tl-3xl rounded-br-3xl'>
                            Industry-  <br />
                            leading supply- <br />
                            chain systems  <br />
                            and tools</h1>
                    </div>
                </div>
                <div className="flex justify-between lg:ml-16">
                    <div className=" ">
                        <h2 className="text-2xl font-bold mb-4 text-red-600">Distribution Network</h2>
                        <h1 className="mb-4 font-bold text-blue-900 text-[40px]">
                            Taking a <span className='text-red-700'>  hub-and- <br /> spoke </span> approach to <br /> distribution
                        </h1>
                        <p className='font-bold'></p>
                        <p className="mb-4 font-bold px-2">
                            ITD brings increased efficiencies to the entire
                            supply chain.
                            We’ve done this through strategic investments in
                            data-driven
                            analytics and technologies, and by consolidating and
                            optimizing our entire distribution network.  We’ve
                            also introduced cross-docking, which facilitates
                            rapid stock replenishment.
                        </p>
                        <button className="font-bold bg-red-600 text-white w-full p-2 rounded-lg">Find Your Distribution Center</button>
                    </div>
                </div>
            </section>

            <div className="flex mt-6 lg:mt-10 items-center justify-center p-4">
                <div className="text-center">
                    <h2 className="text-lg lg:text-2xl font-bold mb-4 text-red-600">
                        Checking all the boxes
                    </h2>
                    <h1 className="mb-4 text-2xl sm:text-3xl lg:text-[40px] font-bold text-blue-900">
                        Ensuring supply-chain sustainability.
                    </h1>
                    <p className="mb-8 text-sm sm:text-base lg:text-lg font-bold md:mx-16">
                        We take a customer-focused approach to supply-chain and tire distribution, giving
                        customers more control over purchases and delivery timing. We're leveraging our
                        ability to bring the full spectrum of last mile capabilities, including data and
                        analytics, 3PL, route density, and dynamic route optimization.
                    </p>
                </div>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2  lg:mt-10 mt-6">
                <div className="flex justify-between sm:ml-16 p-4">
                    <div className="text-center md:text-left">
                        <h2 className="text-xl md:text-2xl font-bold mb-4 text-red-600">Logistics</h2>
                        <h1 className="mb-4 font-bold text-blue-900 text-3xl md:text-[50px]">
                            To deliver distribution <span className="text-red-700">at scale</span>
                        </h1>
                        <p className="font-bold text-sm md:text-base mb-2">
                            When you partner with ITD, you’ll immediately gain access to
                        </p>
                        <p className="mb-4 font-bold text-sm md:text-base">
                            the broadest assortment of tires, wheels, and shop supplies with same or next-day delivery.
                        </p>
                        <button className="font-bold bg-red-600 text-white w-full sm:w-60 p-2 rounded-lg">
                            Partner With Us
                        </button>
                    </div>
                </div>

                <div className="relative inset-0 items-center lg:mb-16 mt-8 p-4">
                    <img
                        src="https://images.pexels.com/photos/2479634/pexels-photo-2479634.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Logistics Image"
                        className="rounded-bl-3xl w-full rounded-tr-3xl sm:h-[70vh] h-[50vh] object-cover"
                    />
                    <div className="absolute top-0 right-0 w-full h-[30%] flex justify-end items-center">
                        <h1 className="text-white font-bold text-center bg-blue-900 w-[50%] md:w-[30%] rounded-tr-3xl rounded-bl-3xl p-2">
                            A dynamic <br />
                            approach to <br />
                            routing
                        </h1>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 p-4 mt-6 lg:mt-10 gap-8">
                <div className="relative items-center mb-16 lg:ml-16">
                    <img
                        src="https://images.pexels.com/photos/3399938/pexels-photo-3399938.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Logistics Image"
                        className="rounded-br-3xl rounded-tl-3xl w-full sm:h-[70vh] h-[50vh] object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-[30%] flex items-center justify-center">
                        <h1 className="text-white text-4xl sm:text-[50px] lg:text-[70px] p-2 font-bold bg-blue-900 rounded-bl-3xl rounded-tr-3xl">
                            FLX-FWD
                        </h1>
                    </div>
                </div>

                <div className="flex justify-between lg:ml-16 p-4">
                    <div>
                        <h2 className="text-xl md:text-3xl font-bold mb-4 text-red-600">FLX FWD</h2>
                        <h1 className="font-bold text-blue-900 text-2xl sm:text-3xl lg:text-[40px] mb-4">
                            Rolling out a leading <span className="text-red-700">logistics solution</span>
                        </h1>
                        <p className="font-bold text-sm md:text-base mb-4">
                            Our 3PL solution FLX FWD delivers key benefits for manufacturers and retailers by
                            unlocking volume at major retailers while improving in-stock rates in local markets.
                        </p>
                        <ul className="font-bold text-sm md:text-base mb-8 space-y-2">
                            <li>1: Access to proprietary products</li>
                            <li>2: A better buying experience</li>
                            <li>3: Enhanced profitability</li>
                        </ul>
                        <button className="font-bold bg-red-600 text-white w-full sm:w-60 p-2 rounded-lg">
                            Explore Solutions
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default WhatWeGet;
