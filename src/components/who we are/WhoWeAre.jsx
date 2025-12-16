import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import pic1 from '../../assets/pic1.jpg';

const WhoWeAre = () => {
    return (
        <>
            <Navbar />
            <div className='lg:flex absolute bg-gray-200 lg:h-[100vh] top-0 left-0 w-full '>

                <div className='items-center ml-4 md:ml-16 mt-28 '>
                    <img src={pic1} alt="" className='w-[90%] sm:h-[90%] rounded-tr-3xl' />
                </div>
                <div className='mt-4 lg:mt-40'>
                    <h2 className='text-xl underline ml-4 md:ml-20'>Who We Are</h2>
                    <div className='grid md:grid-cols-2  grid-cols-1 mt-8 gap-4 sm:gap-8 md:gap-16 md:ml-16'>
                        <div className='ml-4'>
                            <Link to="/ourteam" className='font-bold text-[30px]  hover:text-blue-900 hover:underline'>Our Team</Link>
                            <div className='flex flex-col'>

                                <Link to='/diversity' className='mt-4 hover:text-blue-900 hover:underline'> Diversity , Equity ,  and Inclusion</Link>
                                <Link to='/leader' className='mt-4 hover:text-blue-900 hover:underline'>Leadership  </Link>
                            </div>
                        </div>
                        <div className='ml-4'>
                            <Link to="/GivinBack" className='font-bold text-[30px]  hover:text-blue-900 hover:underline'>Giving Back</Link>
                            <div className='flex flex-col'>
                                <Link to='/social' className='mt-4 hover:text-blue-900 hover:underline'>Social Responsibility</Link>
                                <Link to='/sustainability' className='mt-4 hover:text-blue-900 hover:underline'> Sustainability</Link>
                            </div>


                        </div>

                        {/* <Link to="/news" className='font-bold text-[30px]  hover:text-blue-900 hover:underline'> News & Ideas</Link> */}


                        <div className='ml-4 mb-4'>
                            <Link to="/careers" className='font-bold text-[30px] hover:text-blue-900 hover:underline'>Careers</Link>
                            {/* <div className='flex flex-col'>
                                <Link to='/Benifits' className='mt-4 hover:text-blue-900 hover:underline'>Benifits</Link>
                                <Link to='/' className='mt-4 hover:text-blue-900 hover:underline'> Open Position</Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default WhoWeAre;