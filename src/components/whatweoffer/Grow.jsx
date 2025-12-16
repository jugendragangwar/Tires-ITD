import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { IoMdSettings } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import { AiFillTool } from "react-icons/ai";
import { GiCarWheel } from "react-icons/gi";
import { MdOutlineTireRepair } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import Grows from '../../assets/grow.jpeg';


const Grow = () => {
    const handlelogin = () => {
        window.location.href = '/LoginPage';
    }
    return (
        <>
            <Navbar />
            <div className=" h-screen mx-auto">
                <div className="relative">
                    <div className="absolute inset-0 bg-cover text-center bg-center">
                        <img src={Grows}
                            alt=""
                            className="w-full h-[100vh]"
                        />
                    </div>
                    <div className="relative lg:ml-16  p-6 text-white   ">
                        <div className="max-w-2xl  mt-28 lg:mt-28">
                            <h3 className=" font-bold ">Grow</h3>
                            <h3 className="lg:text-[60px] text-[60px] ">Grow Your <br /> Business </h3>
                            <p className='text-bold mb-7'>Whatever the scope and scale of your business, we can help<br /> you access new consumers, build on strong foundations, and <br /> accelerate your success. Bring it all together<br /> to make good things happen. </p>
                            <button className="bg-red-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" onClick={handlelogin}>
                                Log In Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ifgrfgeifg */}
            <div className=" text-center justify-center sm:mt-8">
                <div className='text-black text-center mb-8   lg:left-0 sm:mt-28 mt-8'>
                    <h1 className="font-bold text-xl leading-8 text-black">Drive growth and level up:</h1>
                    <div className='grid grid-cols-3 divide-x divide-gray-600 mb-8 lg:mt-8'>
                        <div className='flex items-center justify-center '>
                            <div className='flex flex-col items-center'>
                                <AiFillTool size={30} />
                                <h1 className='font-bold text-xl mt-4'>Data-driven <br /><span className='text-blue-900 font-bold text-xl'>decisions</span>   </h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <IoMdSettings size={30} />
                                <h1 className='font-bold text-xl mt-4'>Get help <br /><span className='text-blue-900 font-bold text-xl'>with tire recycling</span>  </h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <FaTrophy size={30} />
                                <h1 className='font-bold text-xl mt-4'>Utilize market<br /><span className='text-blue-900 font-bold text-xl'>data</span>  </h1>
                            </div>
                        </div>

                    </div>
                    <div className='grid grid-cols-3 divide-x divide-gray-600 mb-8 lg:mt-8'>
                        <div className='flex items-center justify-center '>
                            <div className='flex flex-col items-center'>
                                <GiCarWheel size={30} />
                                <h1 className='font-bold text-xl mt-4'>Monitor buying  <br /><span className='text-blue-900 font-bold text-xl'>behaviors</span>  </h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <MdOutlineTireRepair size={30} />
                                <h1 className='font-bold text-xl mt-4'>Analyze <span className='text-blue-900 font-bold text-xl'>trends</span> </h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <TbTruckDelivery size={30} />
                                <h1 className='font-bold text-xl mt-4'>Unlock a new<br /> <span className='text-blue-900 font-bold text-xl'>level of efficiency</span>  </h1>
                            </div>
                        </div>

                    </div>
                </div>



            </div>
            



            

            <div className='grid lg:grid-cols-2 mt-8  p-2'>
                <div className='inset-0 items-center mb-16 lg:ml-16 relative'>
                    <img
                        src="https://images.pexels.com/photos/3399938/pexels-photo-3399938.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        className='rounded-br-3xl relative w-full rounded-tl-3xl  h-[50vh] sm:h-[70vh]'
                    />
                    <div className='absolute top-0 left-0 w-full h-[30%] flex   '>
                        <h1 className='text-white text-center text-[50px] p-2 font-bold bg-blue-900 rounded-bl-3xl rounded-tr-3xl'>
                            TORQATA
                        </h1>
                    </div>
                </div>


                {/* jhduhdeuidhed */}

                <div className="flex justify-between lg:ml-16">
                    <div className=" ">
                        <h2 className="text-3xl font-bold mb-4 text-red-600">Information + insight = clarity </h2>
                        <h2 className="mb-4 font-bold text-blue-900 text-[40px]">
                            Better decisions, <br /> driven by real-time data
                        </h2>
                        <p className='font-bold'>Standing at the forefront of revolutionizing business <br />
                            operations through its comprehensive suite of data-driven <br />
                            software tools. From pricing and inventory management to sales <br />
                            insights, Torqata utilizes market data to monitor buying behaviors,<br />
                            analyze trends, and drive informed business decisions.  We deliver
                            <br />unbiased intelligence, with recommendations built specifically <br />
                            for you. Our insights drive you toward more effective decisions. </p>
                    </div>
                </div>
            </div>
            {/* yiegriowi */}
            <div className='grid lg:grid-cols-2 lg:mt-16 p-2 '>


                <div className="flex justify-between  lg:ml-16">
                    <div className="justify-center ">
                        <h2 className="text-2xl font-bold mb-4 text-red-600 ">More resources, more growth</h2>
                        <h1 className="mb-4 font-bold text-blue-900 text-[40px]">
                        Start a new ITD Point of sale location  </h1>
                        <p className='font-bold'>Our success is tied to your success. That means you’ve got <br/>
                         the ability to expand, supported by our team and resources. For example, <br/>
                         you’ll have access to marketing support, along with effective training. </p>


                    </div>
                </div>
                <div className='inset-0 items-center lg:mb-16 mt-8  relative'>
                    <img
                        src="https://images.pexels.com/photos/2479634/pexels-photo-2479634.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        className='rounded-bl-3xl relative w-full rounded-tr-3xl h-[50vh] sm:h-[70vh]'
                    />
                    <div className='absolute  top-0 right-0 w-full h-[30%]  flex flex-row-reverse   '>
                        <h1 className='text-white font-bold justify-center text-center  bg-blue-900 w-[30%] sm:w-[20%] rounded-tr-3xl rounded-bl-3xl'>
                            <br />
                            TIRE PROS
                        </h1>
                    </div>
                </div>
            </div>


            <div className='grid lg:grid-cols-2 mt-8 p-2 '>
                <div className='inset-0 items-center mb-16 lg:ml-16 relative'>
                    <img
                        src="https://images.pexels.com/photos/3399938/pexels-photo-3399938.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        className='rounded-br-3xl relative w-full rounded-tl-3xl h-[50vh] sm:h-[70vh]'
                    />
                    <div className='absolute top-0 left-0 w-full h-[30%] flex   '>
                        <h1 className='text-white text-center text-[70px] p-2 font-bold bg-blue-900 rounded-bl-3xl rounded-tr-3xl'>
                            Spark
                        </h1>
                    </div>
                </div>


                {/* jhduhdeuidhed */}

                <div className="flex justify-between lg:ml-16">
                    <div className=" ">
                        <h2 className="text-3xl font-bold mb-4 text-red-600">Powered by ITD</h2>
                        <h1 className="mb-4 font-bold text-blue-900 text-[50px]">
                            Increase sales with proven training
                        </h1>
                        <p className='font-bold'>Learning that engages leads to more knowledge and better <br/>
                         retention. Whether you’re making new hires, expanding the business,<br/> or reviewing 
                         the basics, our approach to training leads to a <br/>  confident acceleration of sales.</p>
                         {/* <br/>  <button className="bg-red-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                    Explore Training Solutions
                </button> */}
                    </div>

                </div>

            </div>


            {/* yiegriowi */}
            <div className='grid lg:grid-cols-2 lg:mt-16 p-2 '>


                <div className="flex justify-between  lg:ml-16">
                    <div className="justify-center ">
                        <h2 className="text-2xl font-bold mb-4 text-red-600">Steer: navigating the digital frontier</h2>
                        <h1 className="mb-4 font-bold text-blue-900 text-[40px]">
                            Seamless customer <br />engagement and growth</h1>
                        <p className='font-bold'>Compete in the digital age with Steer, which creates a <br />
                            seamless customer experience with chat support, appointment scheduling,<br />
                            review capabilities, and more. Grow revenue, enhance reputation management<br />
                            and automate customer experience all while growing revenue and loyalty.</p>
                    </div>
                </div>
                <div className='inset-0 items-center lg:mb-16 mt-8  relative'>
                    <img
                        src="https://images.pexels.com/photos/2479634/pexels-photo-2479634.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        className='rounded-bl-3xl relative w-full rounded-tr-3xl h-[50vh]'
                    />
                    <div className='absolute  top-0 right-0 w-full h-[30%]  flex flex-row-reverse   '>
                        <h1 className='text-white font-bold justify-center text-center  bg-blue-900  w-[20%] rounded-tr-3xl rounded-bl-3xl'>
                            <br />
                            Steer
                        </h1>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 mt-8 p-2 '>
                <div className='inset-0 items-center mb-16 lg:ml-16 relative'>
                    <img
                        src="https://images.pexels.com/photos/3399938/pexels-photo-3399938.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        className='rounded-br-3xl relative w-full rounded-tl-3xl h-[50vh] sm:h-[70vh]'
                    />
                    {/* <div className='absolute top-0 left-0 w-full h-[30%] flex   '>
                        <h1 className='text-white text-center text-[70px] font-bold bg-blue-900 rounded-bl-3xl rounded-tr-3xl'>
                            Spark
                        </h1>
                    </div> */}
                </div>


                {/* jhduhdeuidhed */}

                <div className="flex justify-between lg:ml-16">
                    <div className=" ">
                        <h2 className="text-3xl font-bold mb-4 text-red-600">We have what you need </h2>
                        <h1 className="mb-4 font-bold text-blue-900 text-[40px]">
                            Configurable solutions get you where you’re headed
                        </h1>
                        <p className='font-bold'>You’re in the driver’s seat as we anticipate your<br />
                            business needs, improving operational efficiencies, and increasing <br />
                            your annual profits. </p>

                    </div>

                </div>

            </div>


            {/* yugduwtgduwgdi */}

            <div className="flex flex-col items-center justify-center lg:mb-8 mb-8 space-y-8">
                <h3 className='font-bold text-red-600 text-xl'>Streamline your operations</h3>
                <h2 className="text-3xl font-bold text-center">Location drives what's next.</h2>
                <h3 className="text-center">Solutions designed to grow your business using the latest technology and analytics so you <br/>
                can take it to the next level, and beyond.</h3>
              
                 <div className="flex justify-center    h-screen">

<div className="text-center lg:flex justify-around lg:mt-30 mt-30  lg:w-full  gap-16  bg-white">

    <div className=' border-w-[100%] w-80   rounded-tr-3xl lg:mt-8 overflow-hidden'>
        <img src="https://media.istockphoto.com/id/123066720/photo/tires.jpg?s=1024x1024&w=is&k=20&c=Jlnzs-Muoy9OCiMHD5Xc5JBO956hqVinqMkl5ZFQZH0="
            className=' w-full '
            alt="" />
        <div className="bg-white text-black    px-2">
        <div className='flex  divide-x-2 divide-gray-400'>
              </div>
            <h1 className='text-3xl font-bold mb-4'>Shop For Your Business</h1>
            <p className="mb-4">Easily browse and purchase tires, parts and other products from one centralized platform.</p>
              </div>
    </div>

    <div className='  border-w-[50%] w-80  rounded-tr-3xl lg:mt-8 overflow-hidden'>
        <img src="https://images.pexels.com/photos/6720537/pexels-photo-6720537.jpeg?auto=compress&cs=tinysrgb&w=600"
            className=' w-full '
            alt="" />
        <div className="bg-white text-black    px-2">
           
            <h1 className='text-3xl font-bold mb-4'>Rewards For Your Business</h1>
            <p className="mb-4">Rewarding customer loyalty through increased quarterly payouts, dream vacation opportunities, and a range of lucrative benefits. </p>
        </div>
    </div>
</div>
</div>
                       </div>

            <Footer />
        </>


    );
};

export default Grow;
