import React from 'react'
import Navbar from '../navbar/Navbar'
import tayar from '../../assets/tayar.png'
import Footer from '../footer/Footer';
import Remote from '../../assets/RemoteProduct.png';


const Tires = () => {
    const handlePartner = () => {
        window.location.href = '/PartnerUsPage';
    }
    return (
        <>
            <Navbar />
            <div className="  max-h-screen mx-auto">
                <div className="relative">
                    <div className="absolute inset-0 bg-cover text-center bg-center">
                        <img src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                            className=" w-full h-[100%]   "
                        />
                    </div>
                    <div className="relative lg:ml-16  p-6 text-white   ">
                        <div className="max-w-2xl  mt-28 lg:mt-28">
                            <h3 className=" font-bold ">Products</h3>
                            <h1 className="sm:text-[70px] font-bold text-[50px] ">Products built  with you in mind</h1>
                            <p className='text-xl mb-7'>
                                When you partner with ITD, you get an extensive <br />
                                inventory of the best brands and the largest selection, <br />
                                plus top-quality tools and professional equipment to <br />
                                keep your business running smoothly.
                            </p>
                        </div>
                        <button className="bg-red-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" onClick={handlePartner}>Partner With Us</button>
                    </div>
                </div>
            </div>
            {/* gegei */}

            <div className='text-center justify-center mt-32 sm:mt-8 '>
                <h1 className="text-xl font-bold text-red-700 mb-4 mt-4 ">We’ve got you covered</h1>
                <p className="text-[40px] font-bold text-gray-800 mb-4">
                    The <span className='text-bold tex-xl text-red-700'> right products </span>for your consumers
                </p>
                <p className='text-gray-700 text-xl mb-4'>
                    Chances are, you needed your order yesterday. With our unrivaled
                    distribution network, you’ll be sure to have the product you need, exactly
                    when you need it.
                </p>
                <div className='gap-8 px-4 md:px-8'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
                        <div className='w-full max-w-xs h-full shadow-2xl bg-white rounded-tr-3xl overflow-hidden lg:mt-8'>
                            <div className="p-6">
                                <div className='flex justify-center'>
                                    <h1 className='font-bold text-4xl text-center text-blue-900'>1000+</h1>
                                </div>
                                <p className="text-lg font-bold text-center">products available to our customers</p>
                            </div>
                        </div>

                        <div className='w-full max-w-xs h-full shadow-2xl bg-white rounded-tr-3xl overflow-hidden lg:mt-8'>
                            <div className="p-6">
                                <div className='flex justify-center'>
                                    <h1 className='font-bold text-4xl text-center text-blue-900'>1500+</h1>
                                </div>
                                <p className="text-lg font-bold text-center">distribution centers and mixing warehouses</p>
                            </div>
                        </div>

                        <div className='w-full max-w-xs h-full shadow-2xl bg-white rounded-tr-3xl overflow-hidden lg:mt-8'>
                            <div className="p-6">
                                <div className='flex justify-center'>
                                    <h1 className='font-bold text-4xl text-center text-blue-900'>N no of</h1>
                                </div>
                                <p className="text-lg font-bold text-center">tires available in every size and style</p>
                            </div>
                        </div>
                    </div>
                </div>




                <p className='text-gray-700 text-xl mb-4 mt-6 sm:mt-16 p-2'>
                    Our built-in solutions make it easy for you to order from anywhere, track your deliveries, and check your inventory.
                </p>
                <button className="bg-red-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">Explore Digital Solutions</button>
            </div>

            {/* ioheuihei */}

            <div className='grid lg:grid-cols-2 mt-8 lg:mt-20 mb-8 p-2'>
                <div className=' z-20 inset-0 bg-blue-900 sm:w-3/4 p-8 w-full  sm:h-[80vh] h-[40vh] rounded-tl-[10%] rounded-br-[10%] lg:ml-16 '>
                    <div className='relative lg:ml-16 z-30    ml-8'>

                        <img
                            src={tayar}
                            alt=""
                            className='rounded-br-3xl absolute lg:ml-16 lg:mt-8   rounded-tl-3xl w-full h-[40vh] lg:h-[70vh]'
                        />

                    </div>

                </div>

                <div className="flex justify-between items-center lg:ml-16 p-2">
                    <div className=" ">
                        <p className='text-xl font-serif  text-red-600'>
                            Tires
                        </p>
                        <h1 className="mb-4 font-bold text-blue-900 text-[50px]">
                            An unbeatable selection

                            of tires
                        </h1>
                        <br />
                        <p className='text-xl '>You won’t find a larger, more comprehensive <br />
                            selection of tires anywhere else. With ITD, you have <br />
                            access to over 4 million tires in every style and size <br />
                            from the top global brands in the industry. Plus, we <br />
                            make it more profitable by offering programs that <br />
                            reward you for brand loyalty, as well as savings to <br />
                            help your business grow. With ITD, your tire <br />
                            sourcing troubles are over.
                        </p><br />

                    </div>

                </div>
            </div >


            <div className='grid lg:grid-cols-2 mt-8 lg:mt-20 mb-8 p-2'>
                <div className=' z-20 inset-0 bg-blue-900 sm:w-3/4  p-8 w-full  sm:h-[80vh] h-[40vh] rounded-tl-[10%] rounded-br-[10%] lg:ml-16 '>
                    <div className='relative lg:ml-16 z-30   ml-8'>

                        <img
                            src={Remote}
                            alt=""
                            className='rounded-br-3xl absolute lg:ml-16 lg:mt-8   rounded-tl-3xl w-full h-[40vh] lg:h-[70vh]'
                        />

                    </div>

                </div>

                <div className="flex justify-between items-center lg:ml-16 ">
                    <div className=" ">
                        <p className='text-xl  text-red-600'>
                            Supplies
                        </p>
                        <h1 className="mb-4 font-bold text-blue-900 text-[50px]">
                            Tools of the trade
                        </h1>
                        <br />
                        <p className='text-xl '>Along with offering the best tires
                            and wheels,we carry the tools and supplies you need.
                            Choose from wheel weights, TPMS, valve stems,
                            lug nuts, and more, delivered when and where you need them.
                        </p><br />
                        <button className="bg-red-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">Explore Supplies</button>

                    </div>

                </div>

            </div >

            <div className='bg-blue-950 sm:h-screen h-screen'>
                <div className='lg:rounded-tl-[30%] rounded-tl-[10%] w-full sm:h-[100%] h-[100%] bg-white'>
                    <div className="flex flex-col items-center justify-center lg:mb-8">
                        <h3 className='font-bold text-red-600 mt-4'>Incentives, savings, & training</h3>
                        <h2 className="text-3xl font-bold text-center">We’re here for you</h2>
                        <h3 className='p-2'>Sell more, earn more, and maximize your benefits along with the entire buying experience.</h3>

                        <div>
                            <div className="lg:flex justify-center gap-8 mt-4 w-full sm:h-[80vh] h-[50vh] bg-white lg:rounded-br-[40%]">
                                <div className='shadow-2xl border-w-[50%] w-80 h-full rounded-tr-3xl lg:mt-8 overflow-hidden'>
                                    <img src="https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        className='w-full h-[70%] object-cover'
                                        alt="" />
                                    <div className='lg:ml-6 mt-2'>
                                        <h1 className='text-gray-800 font-bold text-xl'>Programs & Rewards</h1>
                                        <p className='text-gray-900 mb-8 mt-2'>Maximize the power of each dollar. Our Partner Program delivers superior volume savings and our Vendor Program rewards eligible dealers with profit-enhancing benefits. See how we put our programs to work for you.</p>
                                    </div>
                                </div>
                                <div className='shadow-2xl border-w-[50%] w-80 h-full rounded-tr-3xl lg:mt-8 overflow-hidden'>
                                    <img src="https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        className='w-full h-[70%] object-cover'
                                        alt="" />
                                    <div className='lg:ml-6 sm:mt-2'>
                                        <h1 className='text-gray-800 font-bold text-xl'>Digital Solutions</h1>
                                        <p className='text-gray-900 mb-8 mt-2'>Harness the technology of our exclusive dealer tools like ITDOnline and ITDConnect. They’re built to help you streamline your business’s operations. Get immediate access to our massive product inventory and unite your sales channels 24/7. You get extensive retail solutions when you partner with ITD.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:flex flex-col sm:mt-28 mt-12 items-center justify-center lg:mb-8 mb-8 space-y-8">
                    <h1 className='font-bold text-red-600 text-center'>Quality products from ITD</h1>
                    <h2 className="text-3xl font-bold text-blue-900 text-center">Proprietary brands</h2>
                    <h3 className="text-center p-2">With us, you’ll have access to the best brands, the widest selection, and the highest quality.</h3>
                    <div className="flex justify-center">
                        <div className="text-center grid grid-cols-1 sm:grid-cols-2 lg:w-full gap-16 bg-white">
                            <div className='border-w-[100%] w-80 rounded-tr-3xl lg:mt-8 overflow-hidden'>
                                <img src="https://media.istockphoto.com/id/123066720/photo/tires.jpg?s=1024x1024&w=is&k=20&c=Jlnzs-Muoy9OCiMHD5Xc5JBO956hqVinqMkl5ZFQZH0="
                                    className='w-full'
                                    alt="" />
                            </div>
                            <div className='border-w-[50%] w-80 rounded-tr-3xl lg:mt-8 overflow-hidden'>
                                <img src="https://images.pexels.com/photos/6720537/pexels-photo-6720537.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    className='w-full'
                                    alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>




        </>
    )
}

export default Tires;