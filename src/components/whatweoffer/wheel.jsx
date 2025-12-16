// import React from 'react';
// import Navbar from '../navbar/Navbar';
// import Footer from '../footer/Footer';
// import car from '../../assets/car.webp';
// import { IoMdSettings } from "react-icons/io";
// import { FaTrophy } from "react-icons/fa";
// import { AiFillTool } from "react-icons/ai";
// import { GiCarWheel } from "react-icons/gi";
// import { MdOutlineTireRepair } from "react-icons/md";
// import { TbTruckDelivery } from "react-icons/tb";

 
// const Wheel = () => {
//     return (
//         <>
//             <Navbar />
//             <div className="max-h-full mx-auto">
//                 <div className="relative">
//                     <div className="absolute inset-0 bg-cover text-center bg-center">
//                         <img src={car}
//                             alt=""
//                             className=" w-full h-[50%] "
//                         />
//                     </div>
//                     <div className="relative lg:ml-16  p-6 text-white font-bold  ">
//                         <div className="max-w-2xl  mt-28 lg:mt-28">
//                             <h3 className=" font-bold ">Wheel</h3>
//                             <h3 className="lg:text-[60px] text-[60px] ">A broad selection to move you forward </h3>
//                             <p className='text-bold mb-7'>From elegant to sporty, from rugged to basic, <br/> you’ll find every kind of wheel your consumers want,<br/> from the top brands in the business. </p>
//                             <button className="bg-red-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
//                             Download Product Catalog  
//                             </button>
//                         </div>
        
//                         {/* ifgrfgeifg */}
//                         <div className="  grid grid-cols-1  font-center ">
//                             <div className='text-black text-center mb-8   lg:left-0 lg:mt-28 mt-20'>     
//       <h2 className="font-bold text-xl leading-8 text-red-600">Wheels that stand out from the crowd</h2>
//       <h1 className="font-extrabold text-xl"><span className='text-blue-900'>Stunning</span> <span  className='text-red-600'>designs</span> </h1>
//       <p >When it comes to wheels, nobody wants to be stuck in the rut of sameness.<br/> Why not be unique? Why not be spectacular? With lots of options and ways to give their vehicles <br/> a fresh and eye-catching look, your consumers will love these wheels.</p>
//       {/* <img src={service}   alt=" auto " /> */}
//       <div className='grid grid-cols-3 divide-x divide-gray-600 mb-8 lg:mt-8'>
//                     <div className='flex items-center justify-center '>
//                     <div className='flex flex-col items-center'>
//                         <AiFillTool size={30}/> 
//                             <h1 className='font-bold text-xl mt-4'>Light Truck <span className='text-blue-900 font-bold text-xl'>& Offroad</span>   </h1>
//                         </div>
//                     </div>
//                     <div className='flex items-center justify-center'>
//                         <div className='flex flex-col items-center'>
//                         <IoMdSettings size={30}/>
//                             <h1 className='font-bold text-xl mt-4'>Dually </h1>
//                         </div>
//                     </div>
//                     <div className='flex items-center justify-center'>
//                         <div className='flex flex-col items-center'>
//                         <FaTrophy size={30}/>
//                             <h1 className='font-bold text-xl mt-4'>Street &  <span className='text-blue-900 font-bold text-xl'>Performance</span>  </h1>
//                         </div>
//                     </div>
                    
//                 </div>
//                 <div className='grid grid-cols-3 divide-x divide-gray-600 mb-8 lg:mt-8'>
//                     <div className='flex items-center justify-center '>
//                     <div className='flex flex-col items-center'>
//                         <GiCarWheel size={30}/> 
//                             <h1 className='font-bold text-xl mt-4'>Replica  </h1>
//                         </div>
//                     </div>
//                     <div className='flex items-center justify-center'>
//                         <div className='flex flex-col items-center'>
//                         <MdOutlineTireRepair size={30}/>
//                             <h1 className='font-bold text-xl mt-4'>Classic <span className='text-blue-900 font-bold text-xl'>& Modern Muscle</span> </h1>
//                         </div>
//                     </div>
//                     <div className='flex items-center justify-center'>
//                         <div className='flex flex-col items-center'>
//                         <TbTruckDelivery size={30}/>
//                             <h1 className='font-bold text-xl mt-4'>Van &  <span className='text-blue-900 font-bold text-xl'>Trailer</span>  </h1>
//                         </div>
//                     </div>
                    
//                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* egyeyigehwi */}

          

//             <div className="flex lg:mt-16 mt-16 items-center justify-center ">
//                 <div className="text-center">
//                     <h2 className="text-2xl font-bold mb-4 text-red-600">ITD exclusives</h2>
//                     <h1 className="mb-4 text-3xl  font-bold text-red-600">
//                     Stand out <h1 className=" text-3xl  font-bold text-blue-900">from the crowd</h1>
//                     </h1>
//                     <p className='mb-8 font-bold'> All wheels are carefully designed, engineered, and <br/> manufactured to meet and exceed rigorous testing <br/> standards with durable finishes to ensure a long service life. In fact, most of our brands include a lifetime structural warranty.</p>
//                 </div>
//             </div>

//             <div className='grid lg:grid-cols-2 mt-8 '>
//                 <div className='inset-0 items-center mb-16 lg:ml-16 relative'>
//                     <img
//                         src="https://images.pexels.com/photos/3399938/pexels-photo-3399938.jpeg?auto=compress&cs=tinysrgb&w=600"
//                         alt=""
//                         className='rounded-br-3xl relative w-full rounded-tl-3xl h-[70vh]'
//                     />
//                     <div className='absolute top-0 left-0 w-full h-[30%] flex   '>
//                         <h1 className='text-white text-center text-[70px] font-bold bg-blue-900 rounded-bl-3xl rounded-tr-3xl'>
//                         TIS Offroad
//                         </h1>
//                     </div>
//                 </div>


//                 {/* jhduhdeuidhed */}

//                 <div className="flex justify-between lg:ml-16">
//                     <div className=" ">
//                         <h2 className="text-3xl font-bold mb-4 text-red-600">TIS Offroad</h2>
//                         <h1 className="mb-4 font-bold text-blue-900 text-[50px]">
//                         Style without compromising durability <span className='text-red-700'> </span>
//                         </h1>
//                         <p className='font-bold'>We’re the industry’s top brand for light truck, SUV,
//                         <br/> and UTV wheels.  <br/> We set the trends. With us, style is never a compromise.
//                         </p>
//                         {/* <ul className='mb-8' >
//                             <li>1: Access to proprietary products</li>
//                             <li>2: A better buying experience</li>
//                             <li>3: Enhanced profitability</li>
//                         </ul>
//                         <button className="font-bold bg-red-600 text-white w-full p-2 rounded-lg">Explore Solutions</button> */}
//                     </div>
//                 </div>
//             </div>
//             {/* yiegriowi */}
//             <div className='grid lg:grid-cols-2 lg:mt-16  '>


//                 <div className="flex justify-between  lg:ml-16">
//                     <div className="justify-center ">
//                         <h2 className="text-2xl font-bold mb-4 text-red-600">Gear Off Road</h2>
//                         <h1 className="mb-4 font-bold text-blue-900 text-[50px]">
//                         Stunning wheels at a price point that makes sense <br /> 
                        
//                         </h1>
//                         <p className='font-bold'>We deliver great-looking wheels with both off-road durability and stylish visibility, at a price point that makes sense.   </p>

//                         {/* <p className="mb-4 font-bold">
//                             the broadest assortment of tires, wheels, and shop <br />
//                             supplies with same or next-day delivery.<br />

//                         </p>
//                         <button className="font-bold bg-red-600 text-white w-full p-2 rounded-lg">Partner With Us</button> */}
//                     </div>
//                 </div>
//                 <div className='inset-0 items-center lg:mb-16 mt-8  relative'>
//                     <img
//                         src="https://images.pexels.com/photos/2479634/pexels-photo-2479634.jpeg?auto=compress&cs=tinysrgb&w=600"
//                         alt=""
//                         className='rounded-bl-3xl relative w-full rounded-tr-3xl h-[70vh]'
//                     />
//                     <div className='absolute  top-0 right-0 w-full h-[30%]  flex flex-row-reverse   '>
//                         <h1 className='text-white font-bold justify-center text-center  bg-blue-900  w-[20%] rounded-tr-3xl rounded-bl-3xl'>
//                        <br/>
//                         Gear Off Road
//                         </h1>
//                     </div>
//                 </div>
//             </div>
            

//             <div className='grid lg:grid-cols-2 mt-8 '>
//                 <div className='inset-0 items-center mb-16 lg:ml-16 relative'>
//                     <img
//                         src="https://images.pexels.com/photos/3399938/pexels-photo-3399938.jpeg?auto=compress&cs=tinysrgb&w=600"
//                         alt=""
//                         className='rounded-br-3xl relative w-full rounded-tl-3xl h-[70vh]'
//                     />
//                     <div className='absolute top-0 left-0 w-full h-[30%] flex   '>
//                         <h1 className='text-white text-center text-[70px] font-bold bg-blue-900 rounded-bl-3xl rounded-tr-3xl'>
//                         Motiv
//                         </h1>
//                     </div>
//                 </div>


//                 {/* jhduhdeuidhed */}

//                 <div className="flex justify-between lg:ml-16">
//                     <div className=" ">
//                         <h2 className="text-3xl font-bold mb-4 text-red-600">Motiv</h2>
//                         <h1 className="mb-4 font-bold text-blue-900 text-[50px]">
//                         Bold designs with flair  <span className='text-red-700'> </span>
//                         </h1>
//                         <p className='font-bold'>Our premium styling and finishes give your <br/> luxury car an elegant look, along with value pricing.
//                         </p>
//                          </div>
//                 </div>
//             </div>

//             {/* yugduwtgduwgdi */}

//             <div className="flex flex-col items-center justify-center lg:mb-8 mb-8 space-y-8">
//                 <h3 className='font-bold text-red-600'>We bring the best</h3>
//                 <h2 className="text-3xl font-bold text-center">An unmatched selection</h2>
//                <h3>The best brands meet superior volume savings. Explore our brands to learn more.</h3>
//                 <h1 className='font-bold bg-red-600 text-white'>Explore Wheels Catalog</h1>
//                 <div className="grid grid-cols-1 md:grid-cols-3 px-4 gap-8">
//                     <div className=''>
//                         <img src="https://images.pexels.com/photos/2684219/pexels-photo-2684219.jpeg?auto=compress&cs=tinysrgb&w=600" 
//                         alt=""
//                         className='rounded-tr-3xl'
//                         />

//                         <div className="bg-white   p-6">
//                            <div className='flex justify-between'>
//                            <h3 className="text-xl font-semibold mb-4">BUSINESS</h3>
//                             <p className="text-sm mb-4">February 1, 2024</p>
//                            </div>
//                            </div>
//                     </div>


//                     <div>
//                         <img src="https://images.pexels.com/photos/205738/pexels-photo-205738.jpeg?auto=compress&cs=tinysrgb&w=600"
//                          alt=""
//                          className='rounded-tr-3xl'
//                          />

//                         <div className="bg-white   p-6">
//                             <div className='flex justify-between'>
//                             <h3 className="text-xl font-semibold mb-4">SUSTAINABILITY</h3>
//                             <p className="text-sm mb-4">February 1, 2024</p>
//                             </div>
//                          </div>
//                     </div>

//                     <div>
//                         <img src="https://images.pexels.com/photos/790177/pexels-photo-790177.jpeg?auto=compress&cs=tinysrgb&w=600"
//                          alt=""
//                          className='rounded-tr-3xl'
//                          />

//                         <div className="bg-white   p-6">
//                             <div className='flex justify-between'>
//                             <h3 className="text-xl font-semibold mb-4">CULTURE</h3>
//                             <p className="text-sm mb-4">April 11, 2024</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <img src="https://images.pexels.com/photos/790177/pexels-photo-790177.jpeg?auto=compress&cs=tinysrgb&w=600"
//                          alt=""
//                          className='rounded-tr-3xl'
//                          />

//                         <div className="bg-white   p-6">
//                             <div className='flex justify-between'>
//                             <h3 className="text-xl font-semibold mb-4">CULTURE</h3>
//                             <p className="text-sm mb-4">April 11, 2024</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <img src="https://images.pexels.com/photos/205738/pexels-photo-205738.jpeg?auto=compress&cs=tinysrgb&w=600"
//                          alt=""
//                          className='rounded-tr-3xl'
//                          />

//                         <div className="bg-white   p-6">
//                             <div className='flex justify-between'>
//                             <h3 className="text-xl font-semibold mb-4">SUSTAINABILITY</h3>
//                             <p className="text-sm mb-4">February 1, 2024</p>
//                             </div>
//                          </div>
//                     </div>

//                     <div className=''>
//                         <img src="https://images.pexels.com/photos/2684219/pexels-photo-2684219.jpeg?auto=compress&cs=tinysrgb&w=600" 
//                         alt=""
//                         className='rounded-tr-3xl'
//                         />

//                         <div className="bg-white   p-6">
//                            <div className='flex justify-between'>
//                            <h3 className="text-xl font-semibold mb-4">BUSINESS</h3>
//                             <p className="text-sm mb-4">February 1, 2024</p>
//                            </div>
//                            </div>
//                     </div>
//                     <div className=''>
//                         <img src="https://images.pexels.com/photos/2684219/pexels-photo-2684219.jpeg?auto=compress&cs=tinysrgb&w=600" 
//                         alt=""
//                         className='rounded-tr-3xl'
//                         />

//                         <div className="bg-white   p-6">
//                            <div className='flex justify-between'>
//                            <h3 className="text-xl font-semibold mb-4">BUSINESS</h3>
//                             <p className="text-sm mb-4">February 1, 2024</p>
//                            </div>
//                            </div>
//                     </div>


//                 </div>            </div>
//             <Footer/>
//         </>

        
//     );
// };

// export default Wheel;
