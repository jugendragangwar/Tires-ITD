import React from 'react';
import Navbar from '../navbar/Navbar';
import { TbJewishStar } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { SlHeart } from "react-icons/sl";
import { FaEye } from "react-icons/fa";
import Footer from '../Footer/Footer';

const Diversity = () => {
    return (
        <>
            <Navbar />
            <div className="  h-screen mx-auto">
                <div className="relative">
                    <div className="absolute inset-0 bg-cover text-center bg-center">
                        <img src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                            className=" w-full h-[100vh]  "
                        />
                    </div>
                    <div className="relative lg:ml-16  p-6 text-white   ">
                        <div className="max-w-2xl  mt-28 lg:mt-28">
                            <h3 className=" font-bold ">Diversity, Equity, and Inclusion</h3>
                            <h1 className="lg:text-[90px] font-bold text-[60px] ">Gaining ground <br /> every day</h1>
                            <p className='text-xl mb-7'>
                                At ITD, we believe it’s our responsibility to create a <br />
                                culture of diversity, equity, and inclusion so every <br />
                                associate can bring their authentic selves to work.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            {/* gegei */}

            <div className='text-center justify-center lg:mt-8'>

                <h1 className="text-xl font-bold text-red-700 mb-4 mt-4 ">Reaching our goals</h1>
                <p className="text-[50px] font-bold text-gray-800 mb-4">
                    Driven by our <span className='text-bold tex-xl text-red-700'> commitment
                    </span>
                </p>
                <p className='text-gray-700 text-xl mb-4'>
                    At ITD, our associates know they are included, welcome, and supported, with access to <br />
                    the resources they need to grow and thrive regardless of identity, origin, or difference in<br />
                    circumstances. We promote and sustain diversity, belonging, and we make sure that <br />
                    everyone is heard.
                </p>
                <div className='grid grid-cols-3 divide-x divide-gray-600 mb-8 lg:mt-8'>
                    <div className='flex items-center justify-center '>
                        <div className='flex flex-col items-center'>
                            <LuUsers size={30} />
                            <h1 className='font-bold text-xl mt-4'>Increasing <span className='text-blue-900 font-bold text-xl'>diversity</span> </h1>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='flex flex-col items-center'>
                            <TbJewishStar size={30} />
                            <h1 className='font-bold text-xl mt-4'>Greater <span className='text-blue-900 font-bold text-xl'>equity</span>   </h1>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='flex flex-col items-center'>
                            <SlHeart size={30} />
                            <h1 className='font-bold text-xl mt-4'>The power of <span className='text-blue-900 font-bold text-xl'>inclusion</span>  </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* ioheuihei */}

            <div className='grid lg:grid-cols-2 mt-8 lg:mt-20 mb-8 p-2'>
                <div className=' z-20 inset-0 bg-orange-600 sm:w-3/4 w-full sm:h-[60vh] md:h-[80vh] h-[50vh] rounded-tl-[10%] rounded-br-[10%] lg:ml-16 '>
                    <div className='relative lg:ml-16 z-30   ml-8'>

                        <img
                            src="https://images.pexels.com/photos/3399938/pexels-photo-3399938.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                            className='rounded-br-3xl absolute lg:ml-16 lg:mt-8 opacity-90  rounded-tl-3xl w-full  h-[50vh] lg:h-[70vh]'
                        />

                    </div>

                </div>

                <div className="flex justify-between items-center lg:ml-16 ">
                    <div className=" ">

                        <h1 className="mb-4 font-bold text-blue-900 text-[30px]">
                            We thread our purpose, 
                            vision, and values 
                            throughout our actions and 
                            our work every day.
                        </h1>
                        <br />
                        <p className='text-xl text-center '>So, what does that look like?</p>

                    </div>
                </div>
            </div >
            <br />
            <br />

            {/* fidufifeiu */}
            <div className='text-center max-h-screen justify-center lg:mt-8'>
                <h1 className="text-xl font-bold text-red-700 mb-4 mt-4 ">Trends</h1>
                <p className="text-[50px] font-bold text-gray-800 mb-4">
                    Signs of our commitment
                </p>

                <div className='grid lg:grid-cols-4 divide-y-2 lg:divide-x gap-8 divide-gray-600 mb-8 lg:mt-8'>
                    <div className='flex items-center  justify-center '>
                        <div className='flex flex-col  items-center'>
                            <LuUsers size={30} />
                            <h1 className='font-bold text-xl mt-4'>Hiring </h1>
                            <p className='text-xl'>Attention to diversity, with <br />
                                real growth in new hires <br />
                                from under-represented <br />
                                groups </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='flex flex-col mt-4 items-center'>
                            <TbJewishStar size={30} />
                            <h1 className='font-bold text-xl mt-4'>Celebrations    </h1>
                            <p className='text-xl'>Monthly programming <br />
                                that raises awareness of <br />
                                cultural observations and <br />
                                celebrations</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='flex flex-col mt-4 items-center'>
                            <SlHeart size={30} />
                            <h1 className='font-bold text-xl mt-4'>Social platforms  </h1>
                            <p className='text-xl'>Consistently highlighting <br />
                                associate stories that <br />
                                show how we’re more <br />
                                alike than different   </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='flex flex-col mt-4 items-center'>
                            <FaEye size={30} />
                            <h1 className='font-bold text-xl mt-4'>Education  </h1>
                            <p className='text-xl'>We offer quarterly <br />
                                diversity training</p>
                        </div>
                    </div>
                </div>
                <div className='text-center justify-center lg:mt-8 p-2'>

                    <h1 className="text-xl font-bold text-red-700 mb-4 mt-4 ">Putting people first</h1>
                    <p className="text-[50px] font-bold text-gray-800 mb-4">
                        How a focus on <span className='text-bold tex-xl text-red-700'> inclusion</span> benefits 
                        us all
                    </p>
                    <p className='text-gray-700 text-xl mb-4'>
                        At ITD, our associates know they are included, welcome, and supported, with access to 
                        the resources they need to grow and thrive regardless of identity, origin, or difference in
                        circumstances. We promote and sustain diversity, belonging, and we make sure that 
                        everyone is heard.
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 mb-8 gap-4 p-2'>
                    <div className='bg-blue-400 rounded-tr-[10%] rounded-bl-3xl flex justify-center'>
                        <img src="https://media.istockphoto.com/id/1288587538/photo/cheerful-auto-mechanic-worker-holding-a-car-tire-and-showing-thumbs-up.jpg?s=612x612&w=0&k=20&c=reOpOHkRji_YdDDLrnXOO1KWxbidsA6_BJGkWDROY0Q="
                            alt=""
                            className='  h-[90%] mt-8 rounded-tr-3xl rounded-bl-3xl'
                        />
                    </div>
                    <div className='bg-cyan-400 rounded-tr-[10%]  rounded-bl-3xl flex justify-center'>
                        <img src="https://media.istockphoto.com/id/1194486380/photo/auto-mechanic-putting-car-tires-in-a-pile.jpg?s=612x612&w=0&k=20&c=-6aDylpvQgq3USiAQKQseU3eYsBc94B4XWPY9QXeldE="
                            alt=""
                            className='h-[90%] mt-8 rounded-tr-3xl rounded-bl-3xl'
                        />
                    </div>
                    <div className='bg-blue-900 rounded-tr-[10%] rounded-bl-3xl flex justify-center'>
                        <img src="https://media.istockphoto.com/id/452586173/photo/confident-mechanic-with-wrench-sitting-on-tire.jpg?s=612x612&w=0&k=20&c=Rw7-ojBmg7Cy37Prj01KYUqT-pQHBJUVqvePGSjYLNU="
                            alt=""
                            className='h-[90%] mt-8 rounded-tr-3xl rounded-bl-3xl'
                        />
                    </div>
                </div>


                <div className='bg-blue-950  min-h-96 mb-20 '>
                    <div className='  lg:rounded-tl-[30%] rounded-tl-[10%] w-full h-[80vh] bg-white   '>
                        <div className="   relative">
                            <div className="absolute inset-0 flex justify-center  h-[50%]">
                                <div className="lg:w-[80%] border-b border-t-0 border-l-0 border-r-0 rounded-br-3xl bg-white text-center">
                                    <h1 className="text-2xl font-bold text-red-700 mb-4 mt-12">You belong here</h1>
                                    <h1 className="text-3xl font-bold text-gray-800">Bring your <span className='font-bold text-3xl text-red-700'> full self</span> to work</h1>
                                    <p className='text-xl mt-8'>Learn how to join our increasingly diverse team as part of a workplace committed to <br />
                                        equity and inclusion.
                                    </p>
                                    <button className='bg-orange-600 px-4 py-2 text-white mt-4  font-bold'>View Open Positions</button>

                                </div>
                            </div>
                            <img src="https://images.pexels.com/photos/164643/pexels-photo-164643.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt=""
                                className="w-full h-[100vh] "
                            />
                        </div>

                        <Footer />
                    </div>
                </div>
            </div>



        </>
    )
}

export default Diversity;