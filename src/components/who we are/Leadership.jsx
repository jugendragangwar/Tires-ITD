import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';
import men from '../../assets/men.png'
import founder from '../../assets/founder.png';
import team from "../../assets/team.png";
import harmeet from '../../assets/harmeet.jpg';

const Leadership = () => {
    return (
        <>
            <Navbar />
            <div className="  h-screen mx-auto">
                <div className="relative">
                    <div className="absolute inset-0 bg-cover text-center bg-center">
                        <img src="https://images.pexels.com/photos/3954429/pexels-photo-3954429.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                            className=" w-full h-screen "
                        />
                    </div>
                    <div className="relative lg:ml-16  p-6   text-white  ga-8 ">
                        <div className="  mt-28 lg:mt-28">
                            <h3 className=" font-bold   ">Leadership</h3>
                            <h1 className="lg:text-[80px] font-bold text-[60px]  ">Navigating the road ahead</h1>
                            <p className='text-2xl mb-7 lg:mt-8'>
                                There are tricky curves to manage on the highway of inter-connected <br />
                                business. How is ITD transforming the organization? The answer is our <br />
                                people. Our best-in-class talent brings effective leadership to everything <br />
                                we do.
                            </p>
                        </div>
                        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-gray-100">

                            {/* Card 1 */}
                            <div className="flex justify-center w-full h-full lg:w-1/3 rounded-tr-3xl bg-white border-t shadow-md">
                                <div className="w-full max-w-xs h-full rounded-tr-3xl overflow-hidden">
                                    <img
                                        src={harmeet}
                                        className="w-full h-64 object-cover mx-auto"
                                        alt="Harmeet Singh Luthra"
                                    />
                                    <div className="p-4 text-center">
                                        <h1 className="text-gray-800 font-bold text-xl sm:text-2xl">Harmeet Singh Luthra</h1>
                                        <p className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
                                            President and Chief <br /> Executive Officer
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="flex justify-center w-full h-full lg:w-1/3 rounded-tr-3xl bg-white border-t shadow-md">
                                <div className="w-full max-w-xs h-full rounded-tr-3xl overflow-hidden">
                                    <img
                                        src={team}
                                        className="w-full h-64 object-cover mx-auto"
                                        alt="Hena Chaudhary"
                                    />
                                    <div className="p-4 text-center">
                                        <h1 className="text-gray-800 font-bold text-xl sm:text-2xl">Hena Chaudhary</h1>
                                        <p className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
                                            Chief Merchandising <br /> Officer
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="flex justify-center w-full h-full lg:w-1/3 rounded-tr-3xl bg-white border-t shadow-md">
                                <div className="w-full  h-full rounded-tr-3xl overflow-hidden">
                                    <img
                                        src={men}
                                        className="w-full h-64 object-cover mx-auto"
                                        alt="Krishan Kant"
                                    />
                                    <div className="p-4 text-center">
                                        <h1 className="text-gray-800 font-bold text-xl sm:text-2xl">Krishan Kant</h1>
                                        <p className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
                                            Chief Supply Chain <br /> Officer
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='flex justify-center lg:mt-2 mt-96 sm:mt-60 p-2'>
                    <div className=' mt-16  items-center'>
                        <h1 className='text-blue-950 font-bold text-3xl'> <span className='text-red-800 text-[50px]'>"</span>
                            A stronger supply chain, better-than-ever service, and <br />
                            smoother operations in every way make this an exciting <br />
                            time for ITD. We are evolving. We are adapting. Stay <br />
                            tuned.”
                        </h1>
                        <p className='text-red-700 font-bold'>—Chief Supply Chain Officer</p>
                    </div>
                </div>



                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full bg-white p-6 mx-auto">

                    {/* Card 1 */}
                    <div className="shadow-2xl w-full max-w-xs h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh] rounded-tr-3xl overflow-hidden mx-auto">
                        <img
                            src="https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=600"
                            className="w-full h-1/2 object-cover"
                            alt="Rebecca Sinclair"
                        />
                        <div className="p-4 text-center">
                            <h1 className="text-gray-800 font-bold text-xl sm:text-2xl">Rebecca Sinclair</h1>
                            <p className="text-lg sm:text-2xl font-semibold text-gray-900 mt-2 sm:mt-4">
                                Chief People & Corporate <br /> Affairs Officer
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="shadow-2xl w-full max-w-xs h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh] rounded-tr-3xl overflow-hidden mx-auto">
                        <img
                            src={founder}
                            className="w-full h-1/2 object-contain"
                            alt="Som Gangwar"
                        />
                        <div className="p-4 text-center">
                            <h1 className="text-gray-800 font-bold text-xl sm:text-2xl">Som Gangwar</h1>
                            <p className="text-lg sm:text-2xl font-semibold text-gray-900 mt-2 sm:mt-4">
                                Chief Information and Technology Officer
                            </p>
                        </div>
                    </div>

                </div>



                <div className='  flex justify-center  bg-blue-900'>
                    <div className='items-center p-2'>
                        <h1 className='text-white font-bold text-[40px]'>
                            <span className='text-red-800 text-[50px]'>"</span>
                            Ultimately, sales and leadership are about
                            relationships. At ITD, our efforts on several fronts
                            have improved our relationships across the board.
                            And we’ll continue to improve everything, from the
                            way we manage accounts to every part of the service
                            experience.
                        </h1>
                        <p className='text-red-700 font-bold'>—ITD President & CEO</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default Leadership;