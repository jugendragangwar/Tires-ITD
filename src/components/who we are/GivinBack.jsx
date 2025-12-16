import React from 'react';
import Navbar from '../navbar/Navbar';
import { FaCheck } from "react-icons/fa";
import Footer from '../footer/Footer';
import { FaBoxOpen } from "react-icons/fa";
import { GiFlatTire } from "react-icons/gi";

const GivinBack = () => {
    return (
        <>
            <Navbar />
            <div className="h-screen mx-auto relative">
                <div className="absolute inset-0 mt-24">
                    <img
                        src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Background image"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative lg:ml-16 p-6 text-white flex items-center justify-center h-full">
                    <div className="max-w-2xl text-center">
                        <h3 className="text-lg md:text-2xl font-bold">Giving Back</h3>
                        <h1 className="text-[40px] md:text-[60px] lg:text-[90px] font-bold leading-tight">
                            In this for the long haul
                        </h1>
                        <p className="text-lg md:text-xl mb-7 leading-relaxed">
                            Who we are as people is who we are as a company. <br />
                            We share the same values in the way we work with <br />
                            each other, our partners, and our communities.
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center justify-center lg:mt-8">
                <h1 className="text-xl font-bold text-red-700 mb-4 mt-4">Our journey</h1>
                <p className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                    ITD is on a path <br /> to a more{" "}
                    <span className="font-bold text-red-700">sustainable future</span>
                </p>
                <p className="text-gray-700 text-lg sm:text-xl mb-4 px-4 sm:px-6 lg:px-12 leading-relaxed">
                    To succeed for generations to come, we know it’s critical to nurture the
                    environment and society, both inside and outside our company. Our plan is
                    to create a win-win-win for our people, our industry, and the environment.
                </p>

                <div className="py-6">
                    <h1 className="font-bold text-xl text-blue-900 mb-4">In our operations</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-0">
                        <div className="shadow-2xl bg-white rounded-tr-3xl overflow-hidden w-full h-auto sm:w-70 mx-auto">
                            <div className="p-6">
                                <p className="text-gray-700 text-lg sm:text-xl font-semibold">
                                    We’re finding efficiencies so we can reduce the number of trucks on
                                    the road
                                </p>
                            </div>
                        </div>

                        <div className="shadow-2xl bg-white rounded-tr-3xl overflow-hidden w-full h-auto sm:w70 mx-auto">
                            <div className="text-gray-700 p-6 sm:p-8">
                                <p className="text-lg sm:text-xl font-semibold">
                                    We're working to expand our tire recycling efforts, with the goal of
                                    going nationwide
                                </p>
                            </div>
                        </div>

                        <div className="shadow-2xl bg-white rounded-tr-3xl overflow-hidden w-full h-auto sm:w-70 mx-auto">
                            <div className="text-gray-700 p-6 sm:p-8 text-center">
                                <p className="text-lg sm:text-xl font-semibold">
                                    We’re reducing emissions by increasing our use of biofuels and electric vehicles
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center lg:mt-8 p-4">
                <h1 className="text-xl font-bold text-red-700 mb-4">Making a difference</h1>
                <p className="text-4xl sm:text-[50px] font-bold text-gray-800 mb-4">
                    In our <span className="text-red-700">communities</span>
                </p>
                <p className="text-gray-700 text-lg sm:text-xl mb-4 max-w-2xl mx-auto">
                    To provide our clients with top-tier tyres and unparalleled service, enabling them
                    to achieve optimal performance and safety on the road. We strive to build long-term
                    relationships with our partners by delivering consistent value, tailored solutions,
                    and unmatched expertise in the tyre industry.
                </p>
            </div>

            <div className='grid lg:grid-cols-2 mt-8 lg:mt-20 mb-8'>
                <div className=' z-20 inset-0 ml-4 bg-orange-600 w-3/4  h-[40vh] sm:h-[80vh] rounded-tl-[10%] rounded-br-[10%] lg:ml-16 '>
                    <div className='relative lg:ml-16 z-30   ml-8'>
                        <img
                            src="https://media.gettyimages.com/id/1207109312/photo/driving-on-the-road.jpg?s=612x612&w=0&k=20&c=xwxxpZ-VzW99SkML9aCqk9ardraULypYdL1z9gNXSWk="
                            alt=""
                            className='rounded-br-3xl absolute lg:ml-16 ml-8 lg:mt-8 opacity-90  rounded-tl-3xl w-full h-[40vh] lg:h-[70vh]'
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-center lg:ml-16 p-4">
                    <div className="text-center lg:text-left">
                        <h1 className="mb-4 font-bold text-blue-900 text-lg sm:text-2xl lg:text-[30px] leading-relaxed">
                            ITD gives back in many ways, including our Everyday Heroes program, our Associate Relief Fund for ITD associates facing unexpected hardships, and through Community Heroes—helping underserved and at-risk communities.
                        </h1>
                        <p className="text-xl text-red-500 text-center lg:text-left">
                            So, what does that look like?
                        </p>
                    </div>
                </div>
            </div >
            <div className="text-center max-h-screen lg:mt-8">
                 {/* <h1 className="text-xl font-bold text-red-700 mb-4 mt-4 ">Making a difference</h1>
                <p className="text-[50px] font-bold text-gray-800 mb-4">
                    In our <span className='font-bold text-red-700'>strategy</span>
                </p>

                <p className='text-xl'>Sustainability is an integral part of ITD's strategy. With our transportation <br />
                    and logistics expertise, our unique capabilities help develop sustainable <br />
                    scrap-tire solutions—solutions designed specifically to increase landfill <br />
                    diversion. From tire recovery to increased operational efficiencies, we're <br />
                    looking at our impact from every angle.
                </p> */}

                {/* <div className='relative '>
                    <div className=' lg:grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 lg:ml-4 max-h-screen   '>
                        <div className='   border-w-[50%] w-80 h-[90%]  rounded-tr-3xl lg:mt-8 overflow-hidden'>
                            <h1 className='text-[90px] font-bold text-gray-500 text-center'>ITD</h1>
                            <div className="text-gray-700   p-6">
                                <div className='flex justify-between'>
                                    <h3 className="text-xl font-semibold mb-4">BUSINESS</h3>
                                    <p className="text-sm mb-4">September 12, 2022</p>
                                </div>
                                <h1 className='text-3xl font-bold mb-4'>Torqata Teams with ITD, Google, and Continental to Host...</h1>
                                <p className="mb-4">Torqata, in partnership with sponsors Indian Tire Distributors (ITD), Google.</p>
                                <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-900 mb-4">Read More</button>
                            </div>
                        </div>

                        <div className='   border-w-[50%] w-80 h-[90%]  rounded-tr-3xl lg:mt-8 overflow-hidden'>
                            <h1 className='text-[90px] font-bold text-gray-500 text-center'>ITD</h1>
                            <div className="text-gray-700   p-6">
                                <div className='flex justify-between'>
                                    <h3 className="text-xl font-semibold mb-4">SUSTAINABILITY</h3>
                                    <p className="text-sm mb-4">December 17, 2021</p>
                                </div>
                                <h1 className='text-3xl font-bold mb-4'>ITD Named 2021 Green Supply Chain Award Recipient by...</h1>
                                <p className="mb-4">Indian Tire Distributors (ITD) today announced it has been named a 2021 Green...</p>
                                <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-900 mb-4">Read More</button>
                            </div>
                        </div>

                        <div className='   border-w-[50%] w-80 h-[90%]  rounded-tr-3xl lg:mt-8 overflow-hidden'>
                            <h1 className='text-[90px] font-bold text-gray-500 text-center'>ITD</h1>
                            <div className="text-gray-700   p-6">
                                <div className='flex justify-between'>
                                    <h3 className="text-xl font-semibold mb-4">SUSTAINABILITY</h3>
                                    <p className="text-sm mb-4">October 23, 2018</p>
                                </div>
                                <h1 className='text-3xl font-bold mb-4'>ITD Releases Inaugural ESG Report</h1>
                                <p className="mb-4">Indian Tire Distributors (ITD), the largest replacement tire distributor in...</p>
                                <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-900 mb-4">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mb-4'>
                        <button className='bg-red-500 text-white font-bold text-2xl p-2 '>Explore Sustainability</button>
                    </div>
                </div> */}

                <div className="p-4 lg:mt-8">
                    <h1 className="text-xl font-bold text-red-700 mb-4">Making a difference</h1>
                    <p className="text-[40px] lg:text-[50px] font-bold text-gray-800 mb-4">
                        In our <span className="font-bold text-red-700">future</span>
                    </p>
                    <p className="text-gray-700 text-lg lg:text-xl mb-4">
                        As the automotive industry continues to evolve, ITD is leading the way. The
                        emerging industry trends we’re embracing will have a long-term effect on how we deliver on
                        our promise to our communities, our customers, our partners, and ourselves.
                    </p>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 flex justify-center items-center h-[60%]">
                        <div className="lg:w-[80%] bg-white text-center rounded-br-3xl p-8 shadow-lg border border-gray-300">
                            <h1 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-8">partners, and ourselves.</h1>
                            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-600 mb-8 lg:mt-8">
                                <div className="flex items-center justify-center p-4">
                                    <div className="flex flex-col items-center">
                                        <GiFlatTire size={40} className="text-blue-900" />
                                        <h1 className="font-bold text-xl lg:text-2xl mt-4 text-blue-900">Smart Tires</h1>
                                        <p className="text-lg text-gray-700 mt-2">Smarter, safer, and more fuel efficient than ever.</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center p-4">
                                    <div className="flex flex-col items-center">
                                        <FaBoxOpen size={40} className="text-blue-900" />
                                        <h1 className="font-bold text-xl lg:text-2xl mt-4 text-blue-900">Automated Inventory</h1>
                                        <p className="text-lg text-gray-700 mt-2">More efficient inventory is better inventory. Only store what you need.</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center p-4">
                                    <div className="flex flex-col items-center">
                                        <FaCheck size={40} className="text-blue-900" />
                                        <h1 className="font-bold text-xl lg:text-2xl mt-4 text-blue-900">Profit Optimization</h1>
                                        <p className="text-lg text-gray-700 mt-2">We explore every avenue so our dealers’ businesses can grow.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        src="https://images.pexels.com/photos/164643/pexels-photo-164643.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="ITD Background"
                        className="w-full h-[100vh] object-cover"
                    />
                </div>
                <Footer />
            </div>

        </>
    )
}

export default GivinBack;