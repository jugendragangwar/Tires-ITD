import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';
import { IoMdSettings } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import { AiFillTool } from "react-icons/ai";
import { GiCarWheel } from "react-icons/gi";
import { MdOutlineTireRepair } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import tayar from '../../assets/tayar.png';
import idt from '../../assets/idt-.png';
import reward from '../../assets/reward.jpg';


const Reward = () => {
    const handlelogin = () => {
        window.location.href = '/LoginPage';
    }
    const handlePartner = () => {
        window.location.href = '/PartnerUsPage';
    }
    return (
        <>
            <Navbar />
            <div className=" h-[75vh] sm:h-screen mx-auto">
                <div className="relative">
                    <div className="absolute inset-0 bg-cover text-center bg-center">
                        <img src={reward}
                            alt=""
                            className="w-full h-[70vh] sm:h-[100vh]"
                        />
                    </div>
                    <div className="relative lg:ml-16  p-6 text-white   ">
                        <div className="max-w-2xl  mt-28 lg:mt-28">
                            <h3 className=" font-bold ">Reward</h3>
                            <h3 className="lg:text-[60px] text-[60px] ">You Deserve It</h3>
                            <p className='text-bold mb-7'>With ITD Partner Program and ITD’s Activate,
                                you gain a competitive edge. We are your partner in the tire business,
                                here to help you maximize your dollar power.</p>
                            <button className="bg-red-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" onClick={handlelogin}>
                                Log In Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ifgrfgeifg */}
            <div className=" text-center justify-center sm:mt-8">
                <div className='text-black text-center mb-8   lg:left-0 sm:mt-28 '>
                    <h1 className="font-bold text-xl leading-8 text-black mb-4">Turn sales into rewards with:</h1>
                    <div className='grid grid-cols-3 divide-x divide-gray-600 mb-8 lg:mt-8'>
                        <div className='flex items-center justify-center '>
                            <div className='flex flex-col items-center'>
                                <AiFillTool size={30} />
                                <h1 className='font-bold text-xl mt-4'>Exclusive<br /><span className='text-blue-900 font-bold text-xl'>programs</span>   </h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <IoMdSettings size={30} />
                                <h1 className='font-bold text-xl mt-4'>Incentives</h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <FaTrophy size={30} />
                                <h1 className='font-bold text-xl mt-4'>Cost<br /><span className='text-blue-900 font-bold text-xl'>savings</span>  </h1>
                            </div>
                        </div>

                    </div>
                    <div className='grid grid-cols-3 divide-x divide-gray-600 mb-8 lg:mt-8'>
                        <div className='flex items-center justify-center '>
                            <div className='flex flex-col items-center'>
                                <GiCarWheel size={30} />
                                <h1 className='font-bold text-xl mt-4'>Dream vacation<br /><span className='text-blue-900 font-bold text-xl'>incentives</span>  </h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <MdOutlineTireRepair size={30} />
                                <h1 className='font-bold text-xl mt-4'>Forecasting </h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <TbTruckDelivery size={30} />
                                <h1 className='font-bold text-xl mt-4'>Personalized <span className='text-blue-900 font-bold text-xl'>data</span>  </h1>
                            </div>
                        </div>

                    </div>
                </div>



            </div>
            {/* egyeyigehwi */}



            <div className="flex lg:mt-16 mt-16 items-center justify-center p-2">
                <div className="sm:text-center">
                    <h2 className="text-2xl font-bold mb-4 text-red-600">Rewards & Programs</h2>
                    <h1 className="mb-4 text-3xl  font-bold text-blue-900">
                        More rewards. More opportunities. <h1 className=" text-3xl  font-bold text-red-600"> More simplicity.</h1>
                    </h1>
                    <p className='mb-8'>Gain a competitive edge by aligning your purchases with ITD.
                        Eligible dealers that grow and commit program allegiance to ITD can earn Passenger
                        and Light Truck purchase enhancements.</p>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 mt-8 p-2 '>
                <div className='inset-0 items-center mb-16 lg:ml-16 relative'>
                    <img
                        src="https://images.pexels.com/photos/3399938/pexels-photo-3399938.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        className='rounded-br-3xl relative w-full rounded-tl-3xl h-[50vh]'
                    />
                    <div className='absolute top-0 left-0 w-full h-[30%] sm:h-[50%]  flex   '>
                        <h6 className='text-white text-center text-[20px]  p-2 font-bold bg-blue-900 rounded-bl-3xl rounded-tr-3xl'>
                            Fuel your sales <br /> with confident, happy <br />, return consumers
                        </h6>
                    </div>
                </div>



                {/* jhduhdeuidhed */}

                <div className="flex justify-between lg:ml-16">
                    <div className=" ">
                        <h2 className="text-3xl font-bold mb-4 text-red-600">Superior volume savings </h2>
                        <h3 className="mb-4 font-bold text-blue-900 text-[40px]">
                            Build your brand selling the products your consumers demand
                        </h3>
                        <p >Our long-held relationships with the top manufacturers mean <br />
                            you get superior volume savings, business and marketing support, <br />
                            and unrivaled product selection, making our exclusive dealer<br />
                            programs second to none. </p><br />

                    </div>
                </div>
            </div>

            <div className=" text-center justify-center lg:mt-8">
                {/* <div className='text-black text-center mb-8   lg:left-0 lg:mt-28 mt-20'>
                    <div className='grid grid-cols-4 divide-x divide-gray-600 mb-8 lg:mt-8'>
                        <div className='flex items-center justify-center '>
                            <div className='flex flex-col items-center'>
                                <h1 className=' text-xl mt-4'>Michelin Alliance</h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <h1 className=' text-xl mt-4'>Nitto Enthusiast Circuit</h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <h1 className=' text-xl mt-4'>Yokohama Advantage </h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <h1 className=' text-xl mt-4'>Kumho Premium Fuel</h1>
                            </div>
                        </div>

                    </div>
                    <div className='grid grid-cols-4 divide-x divide-gray-600 mb-8 lg:mt-8'>
                        <div className='flex items-center justify-center '>
                            <div className='flex flex-col items-center'>
                                <h1 className=' text-xl mt-4'>Toyo Driven </h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <h1 className=' text-xl mt-4'>Continental GOLD </h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <h1 className=' text-xl mt-4'>Cooper Medallion  </h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <h1 className=' text-xl mt-4'>Hercules Power  </h1>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 divide-x divide-gray-600 mb-8 lg:mt-8'>
                        <div className='flex items-center justify-center '>
                            <div className='flex flex-col items-center'>
                                <h1 className=' text-xl mt-4'>Pirelli Full-Throttle </h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <h1 className=' text-xl mt-4'>Nexen Next Level</h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <h1 className=' text-xl mt-4'>Mastercraft Century </h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <h1 className=' text-xl mt-4'>MTMA </h1>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 divide-x divide-gray-600 mb-8 lg:mt-8'>
                        <div className='flex items-center justify-center '>
                            <div className='flex flex-col items-center'>
                                <h1 className=' text-xl mt-4'>Firestone AG Dealer</h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <h1 className=' text-xl mt-4'>Falken FANATIC</h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <h1 className=' text-xl mt-4'>Hankook One </h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <h1 className=' text-xl mt-4'>GT Radial Smart</h1>
                            </div>
                        </div>


                    </div>
                </div> */}
                <div className='flex justify-center items-center'>
                    <img src={tayar} alt='' style={{ height: '36rem', width: 'auto', paddingTop: '2rem' }} className="z-10 justify-center flex" />

                </div>
                <img src={idt} alt='' style={{ height: '7rem', width: '100vw', paddingTop: '-0.0rem' }} className="z-8" />
            </div>

            {/* gkjkgjkljgkljh */}
            <div className="flex lg:mt-16 mt-16 items-center justify-center bg-blue-900 text-white p-2">
                <div className="sm:text-center ">
                    <h2 className="text-2xl font-bold mb-4 text-red-600">The ITD winning formula</h2>
                    <h1 className="mb-4 text-3xl  font-bold text-white">
                        Activate your business
                    </h1>
                    <p className='mb-8 font-bold text-white'>ITD's Activate program has more rewards and more opportunities <br />
                        for your business to gain a competitive edge in multiple ways. With our growth bonus, nationwide warranty <br />
                        programs, convenient financing solutions, roadside assistance, and more. Fast-track your goals and see a better  <br />
                        return on every transaction.</p>
                    <button className="bg-red-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" onClick={handlePartner}>
                        Partner With Us
                    </button><br />
                </div>
            </div>

            {/* yiegriowi */}
            <div className='grid lg:grid-cols-2 lg:mt-16 p-2  '>


                <div className="flex justify-between  lg:ml-16">
                    <div className="justify-center ">
                        <h2 className="text-2xl font-bold mb-4 text-red-600">Save time and make money</h2>
                        <h2 className="mb-4 font-bold text-blue-900 text-[50px]">
                            Manage your incentives <br />in one place   </h2>
                        <p >Easily monitor all your ITD rebates with just a few clicks.
                            You ll have a dealer dashboard, detailed views, and reports on what
                            you need to know at your fingertips. You ll also earn rewards on
                            the sales you're already making. </p>
                    </div>
                </div>
                <div className='inset-0 items-center lg:mb-16 mt-8  relative'>
                    <img
                        src="https://images.pexels.com/photos/2479634/pexels-photo-2479634.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        className='rounded-bl-3xl relative w-full rounded-tr-3xl h-[50vh] sm:h-[60vh]'
                    />
                    <div className='absolute  top-0 right-0 w-full h-[30%]  flex flex-row-reverse   '>
                        <h1 className='text-white text-xl font-bold justify-center text-center  bg-blue-900 w-[30%] sm:w-[20%] rounded-tr-3xl rounded-bl-3xl'>
                            <br />
                            IPG
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
                        <h1 className='text-white text-center text-[70px] font-bold bg-blue-900 w-[50%] rounded-bl-3xl rounded-tr-3xl'>
                            IPG
                        </h1>
                    </div>
                </div>


                {/* jhduhdeuidhed */}

                <div className="flex justify-between lg:ml-16 ">
                    <div className=" ">
                        <h2 className="text-3xl font-bold mb-4 text-red-600">ITD Partner Program</h2>
                        <h2 className="mb-4 font-bold text-blue-900 text-[50px]">
                            Elevating rewards and incentives
                        </h2>
                        <p>A dynamic initiative designed to elevate rewards and incentives for<br />
                            our loyal customers. This exclusive program not only ensures increased <br />quarterly
                            payouts but also presents exciting opportunities to win dream vacations.<br /> We are committed to
                            rewarding loyalty by offering a range of lucrative benefits <br />  for you along with some that enrich the
                            overall customer experience. </p>
                    </div>

                </div>

            </div>


            {/* yugduwtgduwgdi */}

            <div className="flex flex-col items-center justify-center lg:mb-8 mb-8 space-y-8 p-2">
                <h2 className='font-bold text-red-600  text-xl'>Streamline your operations</h2>
                <h2 className="text-3xl font-bold text-center">Location Drives What's Next.</h2>
                <h3 className="text-center">Solutions designed to grow your business using the latest technology and
                    analytics so you can take it to the next level, and beyond.</h3>
                <div className="flex justify-center">
                    <div className="text-center lg:flex justify-around lg:mt-30 mt-30  lg:w-full   gap-16   bg-white">
                        <div className=' border-w-[100%] w-80   rounded-tr-3xl lg:mt-8 overflow-hidden'>
                            <img src="https://media.istockphoto.com/id/123066720/photo/tires.jpg?s=1024x1024&w=is&k=20&c=Jlnzs-Muoy9OCiMHD5Xc5JBO956hqVinqMkl5ZFQZH0="
                                className=' w-full '
                                alt="" />
                            <div className="bg-white text-black px-2">
                                <div className='flex  divide-x-2 divide-gray-400'>
                                </div>
                                <h1 className='text-3xl font-bold mb-4'>Shop For Your Business</h1>
                                <p className="mb-4">We build top-tier solutions to help you serve your consumers better and simplify how you manage the day-to-day.</p>
                            </div>
                        </div>
                        <div className='  border-w-[50%] w-80  rounded-tr-3xl lg:mt-8 overflow-hidden'>
                            <img src="https://images.pexels.com/photos/6720537/pexels-photo-6720537.jpeg?auto=compress&cs=tinysrgb&w=600"
                                className=' w-full '
                                alt="" />
                            <div className="bg-white text-black px-2">
                                <h1 className='text-3xl font-bold mb-4'>Grow Your Business</h1>
                                <p className="mb-4">We build top-tier solutions to help you serve your consumers better and simplify how you manage the day-to-day. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>


    );
};

export default Reward;
