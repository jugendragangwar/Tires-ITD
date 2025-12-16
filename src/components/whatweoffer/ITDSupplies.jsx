import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';
import carservice from '../../assets/carservice.jpg';
import first from '../../assets/first.jpg';
import second from '../../assets/second.jpg';

const ITDSuppliers = () => {
    const handlePartner = () => {
        window.location.href = '/PartnerUsPage';
    };

    return (
        <>
            <Navbar />
            <div className="h-screen mx-auto">
                <div className="relative">
                    <div className="absolute inset-0 bg-cover text-center bg-center">
                        <img src={carservice} alt="" className="w-full h-[100%]" />
                    </div>
                    <div className="relative lg:ml-16 p-6 text-white">
                        <div className="max-w-2xl mt-28 sm:mt-28">
                            <h3 className="font-bold">Supplies</h3>
                            <h1 className="lg:text-[90px] font-bold text-[60px]">Top tools of the <br /> trade</h1>
                            <p className='text-xl mb-7'>
                                Along with offering the best tires and wheels, <br />
                                we carry the tools and supplies you need. <br />
                                Choose from wheel weights, TPMS, valve stems, <br />
                                lug nuts, and more, delivered when and where you need them.
                            </p>
                            <button className="bg-red-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" onClick={handlePartner}>
                                Partner With Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:mt-28 text-center">
                <h1 className="text-xl font-bold text-red-700 mb-4 mt-4">A better buying experience</h1>
                <p className="text-[50px] font-bold text-gray-800 mb-4">
                    Streamlined <span className='text-bold tex-xl text-red-700'>shopping</span>
                </p>
                <p className='text-gray-700 text-xl mb-4 p-2'>
                    You’ve got things you need to do, like change, balance, 
                    and repair your consumers’ tires. To be successful, you need the
                    right tools and supplies now. ITDOnline makes it easy to shop for everything 
                    you need all in one place.
                </p>

                <div className="grid sm:grid-cols-2 grid-cols-1 p-4 sm:divide-x sm:divide-gray-600 mb-8 lg:mt-8">
                    <div className="flex items-center justify-center">
                        <div className="grid lg:grid-cols-2 mt-8 lg:mt-20 mb-8">
                            <div className="relative lg:ml-16 z-30">
                                <img src={first} alt="" className="lg:mt-8 opacity-90 w-full h-auto lg:h-[30vh]" />
                            </div>
                            <div className="lg:ml-16">
                                <h1 className="mb-4 font-bold text-black text-[20px]">Quality you can trust</h1>
                                <p>From wheel weights that give your consumers a smooth ride, to valve stems, sensors, and other top-quality products for your shop, you can trust that these tools and supplies will stand up to the road’s demands.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="grid sm:grid-cols-2 grid-cols-1 mt-8 lg:mt-20 mb-8">
                            <div className="relative lg:ml-16 z-30">
                                <img src={second} alt="" className="lg:mt-8 opacity-90 w-full h-auto lg:h-[30vh]" />
                            </div>
                            <div className="lg:ml-16">
                                <h1 className="mb-4 font-bold text-black text-[20px]">Selection & price</h1>
                                <p>You’ll find exactly what you need with our top-quality products and brands. Our wide selection means you’ll have what you need for your shop to thrive. Our commitment to value means excellent quality at an affordable price.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center max-h-screen justify-center lg:mt-8">
                <h1 className="text-xl font-bold text-red-700 mb-4 mt-4">Find what you need</h1>
                <p className="text-[50px] font-bold text-gray-800 mb-4">Great brands at great prices</p>
                <p className="p-2">Explore the tools and supplies you need to get things done.</p>
                <br />
                <button className="bg-red-500 mb-6 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">View Supplies Catalog</button>
            </div>

            <div className="bg-blue-950 min-h-96 mb-20">
                <div className="lg:rounded-tl-[30%] rounded-tl-[10%] w-full h-[80vh] bg-white">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default ITDSuppliers;
