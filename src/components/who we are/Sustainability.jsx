import React from 'react'
import Navbar from '../navbar/Navbar'

import { TbJewishStar } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { SlHeart } from "react-icons/sl";
import { FaEye } from "react-icons/fa";
import Footer from '../Footer/Footer';
import men from '../../assets/men.png';

const Sustainability = () => {
    return (
        <>
            <Navbar />
            <div className="max-h-full mx-auto">
                <div className="relative">
                    <div className="absolute inset-0 bg-cover text-center bg-center">
                        <img src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                            className=" w-full h-[80%] "
                        />
                    </div>
                    <div className="relative text-white font-bold  ">
                        <div className="max-w-2xl mt-[6rem]  items-center ">
                            <h3 className=" font-bold pl-2 mt-4">Sustainability</h3>
                            <h1 className="lg:text-[50px] text-4xl">A commitment that goes the distance</h1>
                            <p className='text-bold mt-2 lg:text-xl'> Our commitment to sustainability principles is at the heart of what we do to achieve a brighter tomorrow. These principles act together as a compass needle pointing us toward our goals.  </p>
                        </div>
                        <div className="flex justify-center h-auto  ">
                            <div className="text-center lg:mt-20 mt-20 w-[95%] lg:w-[80%]  border-t border-b-2 py-3 border-l-0 border-r-0 rounded-r-3xl  bg-white">
                                <h1 className="text-xl font-bold text-red-700 mb-4 mt-4 ">Why ITD</h1>
                                <p className="lg:text-[50px] text-4xl font-bold text-blue-900  mb-4"><span className='text-red-500 '>Sustainability at</span> <br />   ITD  </p>
                                <p className='text-gray-700 mb-4 text-left px-4'>
                                    Sustainability is a never-ending journey, directly relevant to every part of ITD's
                                    strategy evolution. We’re pioneering a better future, creating a company and culture
                                    built to last. As we continually seek to meet the needs of our stakeholders through
                                    business improvement, we believe in transparency. Each year we share the progress
                                    we’re making with our sustainability initiatives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-auto w-[95%] sm:w-[80%] mx-auto  bg-slate-300'>
                    <div className='text-center py-3 mt-8 mb-4'>
                        <p className="text-xl font-bold text-red-700 mb-4 mt-4">Triple bottom line</p>
                        <h1 className="lg:text-[50px] text-4xl  font-bold text-red-600 mb-4">Priorities of people, planet, and <br />profit <span className='text-blue-900'>communitiesare already on our dashboard</span>  </h1>
                        <p className='text-blue-900 text-xl'>
                            In fact, they’re embedded in our iCare value statement.
                        </p>
                    </div>
                </div>

                <div className='bg-blue-950  rounded-tr-[10%] min-h-96'>
                    <div className='grid lg:grid-cols-2  '>
                        <div className='flex justify-center'>
                            <img src={men}
                                alt=""
                                className='h-[40vh] sm:h-[70vh]  rounded-br-3xl rounded-tl-3xl '
                            />
                        </div>
                        <div className='text-left  text-white px-3 my-auto'>
                            <p className="lg:text-[40px] text-2xl font-boldtext-white">To succeed as a leading corporation for generations to come, we must deliver value not only to our investors, but also to the environment and the society we nurture inside and outside our company.”
                            </p>
                            <p className=' text-red-600 text-xl mb-4'>

                                -ITD President & CEO
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  divide-gray-600 gap-4 md:gap-6 lg:gap-8 p-4 lg:p-8">
                    <div className="flex items-center justify-center p-4">
                        <div className="flex flex-col items-center">
                            <LuUsers size={30} />
                            <h1 className="font-bold text-lg md:text-xl mt-4">Volunteering</h1>
                            <p className="text-base md:text-lg text-center">
                                Regularly dedicating time <br /> to give back
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-4">
                        <div className="flex flex-col items-center">
                            <TbJewishStar size={30} />
                            <h1 className="font-bold text-lg md:text-xl mt-4">Scholarships</h1>
                            <p className="text-base md:text-lg text-center">
                                Annually awarding our <br /> diverse suppliers
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-4">
                        <div className="flex flex-col items-center">
                            <SlHeart size={30} />
                            <h1 className="font-bold text-lg md:text-xl mt-4">Donating</h1>
                            <p className="text-base md:text-lg text-center">
                                Donating needed items <br /> when hardship strikes
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-4">
                        <div className="flex flex-col items-center">
                            <FaEye size={30} />
                            <h1 className="font-bold text-lg md:text-xl mt-4">Funding</h1>
                            <p className="text-base md:text-lg text-center">
                                Helping fund our <br /> associates in ways <br /> that matter
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center bg-white mt-6'>
                    <button className='bg-red-500 font-bold text-xl p-2 text-white '>Join Our Team</button>
                </div>
            </div>


            <div className=''>
                <div className='text-center mt-6 sm:mt-8'>
                    <p className="text-xl font-bold text-red-700 ">How we give back</p>
                    <h1 className="lg:text-[50px] text-4xl font-bold text-gray-800 mt-1 md:mt-3">Committed to supporting our <br /> <span className='text-red-500'>communities</span>  </h1>
                    <p className='text-gray-800 text-xl px-3 text-left'>
                        As a catalyst for positive change, we work to serve our communities in a number of ways. 
                        Within ITD, we support our associates who are going through difficult times
                        More broadly, we help underserved communities by contributing the items people need.
                        We also give back to our nation’s everyday heroes, primarily through the Gary Sinise
                        Foundation. We think of it as three pillars of support.
                    </p>
                    <div className='flex justify-center'>
                        <img src="https://cdn.pixabay.com/photo/2024/01/30/12/28/ai-generated-8541909_1280.png"
                            className=' sm:h-full w-full'
                            alt="" />
                    </div>
                </div>
            </div>



            <div className='     '>
                <div className='text-center sm:mt-28 '>
                    <p className="text-xl font-bold text-red-700 mb-4 mt-4 ">Extending our support</p>
                    <h1 className="text-[50px] font-bold text-gray-800 mb-4">Supporting underserved <br /> <span className='text-red-500'>communities</span>and diversity <br />
                        initiatives
                    </h1>
                    <p className='text-gray-800 text-xl mb-4'>
                        Our support extends to underserved communities and diversity initiatives <br />
                        including sourcing and supporting minority businesses through our Minority   <br />
                        Business Enterprise Sourcing initiative. We support racial and social equity    <br />
                        by underwriting Fellows and projects through Equal Justice Works, enabling <br />
                        social and racial justice in communities where we do business.
                    </p>



                </div>
            </div>


            <div className="relative h-screen">
                <div className="absolute inset-0 bg-cover rounded-tl-[20%] rounded-tr-[20%]  text-center bg-blue-900 bg-center">

                </div>
                <div className="relative     font-bold  ">
                    <div className='text-center lg:mt-52 p-6'>
                        <p className="text-xl font-bold text-red-700 mb-4 mt-4 ">Committed to our causes</p>
                        <h1 className="text-[50px] font-bold text-white mb-4">ITD charitable  <br /> corporate <span className='text-red-500'>partnerships</span>
                        </h1>
                        <p className='text-white text-xl mb-4'>
                            The charitable organizations we support reflect our commitment to supporting  <br />
                            diversity, inclusion, and equal treatment for all.  <br />
                        </p>
                    </div>
                    <div className='bg-blue-900      '>
                        <div className="w-full h-[100vh]   bg-white rounded-br-[30%] ">
                            <div className='text-center mt-4  sm:mt-28'>
                                <p className="text-xl font-bold text-red-700 mb-4 mt-4  ">Committed to our country</p>
                                <h1 className="text-[50px] font-bold text-gray-800 mb-4">Supporting our Everyday Heroes

                                </h1>
                                <p className='text-gray-800 text-xl mb-4'>
                                    We’re proud to support our nation’s troops, veterans, and first responders. While  <br />
                                    others drive away from peril, these courageous men and women drive towards it <br />
                                    —saving, serving, and protecting our nation’s highways, homes, and communities.<br />
                                    Our communities are our homes, and we’re grateful for the chance to give back <br />
                                    to these heroes.
                                </p>
                            </div>
                            <div className="flex justify-center   ">
                                <div className="text-center   lg:w-[80%]       bg-white">
                                    <div className='flex justify-center'>
                                        <img src="https://cdn.pixabay.com/photo/2024/03/21/09/21/ai-generated-8647183_1280.jpg"
                                            className='w-80 overflow-hidden h-[30vh]'
                                            alt="" />
                                    </div>

                                </div>
                            </div>
                            <div className='flex justify-center mt-4'>
                                <button className='bg-red-600 text-white font-bold text-xl  p-2'>Visit ITD’s Giving Page</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-900">
                        <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  justify-around lg:ml-8   w-full h-[100vh]   lg:rounded-br-[40%]">
                            <div className='    rounded-tr-3xl lg:mt-8 overflow-hidden'>
                                <img src="https://www.shutterstock.com/image-photo/employee-employer-balanced-cooperation-concept-260nw-328018841.jpg"
                                    className=' w-[70%] h-[60%]  rounded-tr-3xl mt-4  ml-14'
                                    alt="" />
                                <div className='lg:ml-6 mt-8'>
                                    <h1 className='text-white font-bold text-xl ml-4'>We’re committed to giving back to our Everyday Heroes </h1>

                                </div>
                            </div>
                            <div className='  items-center    rounded-tr-3xl lg:mt-8 overflow-hidden'>
                                <img src="https://www.shutterstock.com/image-photo/young-woman-having-business-meeting-260nw-365256740.jpg"
                                    className=' w-[70%] h-[60%]  rounded-tr-3xl ml-14 '
                                    alt="" />
                                <div className='lg:ml-6 mt-8'>
                                    <h1 className='text-white font-bold text-xl ml-4'>We’re committed to giving back to our Everyday Heroes </h1>

                                </div>
                            </div>
                            <div className='  lg:mt-8 overflow-hidden'>
                                <img src="https://media.istockphoto.com/id/1384110533/photo/asian-male-director-is-interviewing-to-recruit-new-employees.jpg?s=612x612&w=0&k=20&c=rR1-wkWClaIfcH7vwut8L2AXK3LML2RLQ-xZ60ZrwEE="
                                    className=' w-[70%] h-[60%] rounded-tr-3xl ml-14 '
                                    alt="" />
                                <div className='lg:ml-6 mt-8'>
                                    <h1 className='text-white font-bold text-xl ml-4'>We’re committed to giving back to our Everyday Heroes </h1>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Sustainability