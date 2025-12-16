import React from 'react'
import Navbar from '../navbar/Navbar'
import { TbJewishStar } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { SlHeart } from "react-icons/sl";
import { FaEye } from "react-icons/fa";
import Footer from '../footer/Footer';

const SocialResponsibility = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen">
        <div className="relative">
          <div className="absolute inset-0 bg-cover text-center bg-center">
            <img src="https://images.pexels.com/photos/3807167/pexels-photo-3807167.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className=" w-[100%] h-[100vh] "
            />
          </div>
          <div className="relative p-6 text-white font-bold">
            <div className="max-w-2xl mt-28">
              <h3 className="text-2xl font-bold text-blue-900 lg:text-3xl">Careers</h3>
              <h1 className="text-3xl  text-blue-900 mt-2 lg:text-5xl">Navigate the road ahead with us</h1>
              <p className='text-bold mb-7 text-blue-900 w-[80%] mt-2 lg:text-2xl lg:w-full'> ITD exists because of, and for, each of us. From the front
                line associates helping customers to the people working
                behind the scenes, ITD’s people are driving us toward a
              </p>
            </div>

            <div className="flex justify-center mt-[25%] w-[90%] lg:h-[70vh]  mx-auto lg:mt-14 ">
              <div className="text-center lg:mt-20 border-t border-b-0 border-l-0 border-r-0 rounded-r-3xl  bg-neutral-300 py-4">
                <h1 className="text-xl md:text-2xl font-bold text-red-700 mb-4 mt-4 lg:text-3xl lg:mt-6 ">We live our values</h1>
                <p className="text-3xl md:text-4xl text-gray-800 mb-4 lg:text-[50px] lg:mt-8">You belong here </p>
                <p className='text-gray-900 md:text-xl mb-4 text-justify mx-4 lg:text-2xl lg:mx-8 lg:mt-8'>
                  Our ongoing commitment to honesty, integrity, and professionalism guides everything
                  we do. Those values have built strong bonds of trust between ITD, our customers, and
                  our community for more than 80 years.
                </p>
                <button className='text-white bg-red-600 text-xl font-bold p-2'>Our Culture</button>
              </div>
            </div>
          </div>
        </div>

        <section className='bg-blue-900'>
          <div className='bg-white items-center lg:rounded-bl-[60%] rounded-bl-[10%] w-full py-10 md:py-20'>
            <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:mt-10 px-4 sm:px-8 lg:px-16">
              <div className='flex items-center justify-center'>
                <div className='flex flex-col items-center text-center'>
                  <LuUsers size={30} className="text-blue-900" />
                  <h1 className='font-bold text-xl sm:text-2xl'>Volunteering</h1>
                  <p className='text-base sm:text-lg text-gray-700 mt-2'>Anyone and everyone can think big</p>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <div className='flex flex-col items-center text-center'>
                  <TbJewishStar size={30} className="text-blue-900" />
                  <h1 className='font-bold text-xl sm:text-2xl'>Scholarships</h1>
                  <p className='text-base sm:text-lg text-gray-700 mt-2'>Our different backgrounds lead us to amazing ideas</p>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <div className='flex flex-col items-center text-center'>
                  <SlHeart size={30} className="text-blue-900" />
                  <h1 className='font-bold text-xl sm:text-2xl'>Donating</h1>
                  <p className='text-base sm:text-lg text-gray-700 mt-2'>Celebrate each other’s achievements</p>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <div className='flex flex-col items-center text-center'>
                  <FaEye size={30} className="text-blue-900" />
                  <h1 className='font-bold text-xl sm:text-2xl'>Funding</h1>
                  <p className='text-base sm:text-lg text-gray-700 mt-2'>We believe in putting people first</p>
                </div>
              </div>
            </div>
            <div className='flex justify-center mt-8'>
              <button className='bg-red-500 hover:bg-red-600 font-bold text-lg sm:text-xl py-2 px-6 text-white rounded-md transition duration-300'>
                Join Our Team
              </button>
            </div>
          </div>
        </section>



        <div className='bg-blue-900'>
          <div className='text-center px-4 sm:px-8 lg:px-16 py-6'>
            <p className="text-lg sm:text-xl font-bold text-white py-3">Don’t just take our word for it</p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
              Hear from the people who make ITD...ITD
            </h1>
          </div>

          <div className="grid gap-8 mt-8 pb-10 px-4 sm:px-8 lg:px-16 w-full lg:rounded-br-[40%] h-auto lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div className='shadow-2xl w-full h-auto rounded-bl-3xl rounded-tr-3xl bg-white overflow-hidden flex flex-col p-6'>
              <h1 className='text-gray-800 font-bold text-lg sm:text-xl md:text-2xl mb-4'>
                "Nothing matters more than our people. Our associates make it all happen for our customers and it's up to us to keep our great team of associates engaged, learning, and evolving."
              </h1>
              <p className='text-lg sm:text-xl text-red-500 mt-2'>-Rebecca Sinclair, Chief People & Corporate Affairs Officer</p>
            </div>

            <div className='shadow-2xl w-full h-auto rounded-bl-3xl rounded-tr-3xl bg-white overflow-hidden flex flex-col p-6'>
              <h1 className='text-gray-800 font-bold text-lg sm:text-xl md:text-2xl mb-4'>
                "ITD has given me a lot, done a lot for me. The whole experience of being there just blew my mind."
              </h1>
              <p className='text-lg sm:text-xl text-red-500 mt-2'>-Matthew, Delivery Driver</p>
            </div>

            <div className='shadow-2xl w-full h-auto rounded-bl-3xl rounded-tr-3xl bg-white overflow-hidden flex flex-col p-6'>
              <h1 className='text-gray-800 font-bold text-lg sm:text-xl md:text-2xl mb-4'>
                "The company makes you feel like a winner when you're going for it and doing your best."
              </h1>
              <p className='text-lg sm:text-xl text-red-500 mt-2'>-Michelle, Warehouse Associate</p>
            </div>
          </div>
        </div>


        <div className='grid lg:grid-cols-2  lg:mt-20 mb-8'>
          <div className=' z-20 inset-0 bg-blue-900 sm:w-3/4 w-full lg:h-[80vh] h-[40vh] rounded-tl-[10%] rounded-br-[10%] lg:ml-16 '>
            <div className='relative lg:ml-16 z-30  ml-8'>
              <img
                src="https://images.pexels.com/photos/21694/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className='rounded-br-3xl absolute lg:ml-16 lg:mt-8 rounded-tl-3xl w-full h-[40vh] lg:h-[70vh] mx-auto' />
            </div>
          </div>


          <div className="items-center  lg:ml-16 divide-y-2 gap-4  px-3">
            <div className="mb-4 ">
              <h1 className='mt-4 text-2xl font-bold text-blue-900 mb-4'>
                Wellness
              </h1>
              <p>Helping you thrive and be your best self</p>
            </div>
            <div className="mb-4 ">
              <h1 className='text-2xl font-bold text-blue-900 mb-4'>Growth opportunities</h1>
              <p>Growing your career in a multitude of ways</p>
            </div>
            <div className="mb-4 ">
              <h1 className='text-2xl font-bold text-blue-900 mb-4'>Paid time off</h1>
              <p>Taking time off when you need it</p>
            </div>
            <div className="mb-4 ">
              <h1 className='text-2xl font-bold text-blue-900 mb-4'>Continuous education</h1>
              <p>Becoming a lifelong learner</p>
            </div>
            <div className="mb-4 ">
              <h1 className='text-2xl font-bold text-blue-900 mb-4'>Health</h1>
              <p>Finding the comprehensive plan to suit your family needs </p>
            </div>
            <div>
              <div className='flex justify-center'>
                <button className='bg-red-600 text-xl font-bold text-white p-2 mt-4'>View Benefits</button>
              </div>
            </div>

          </div>
        </div >



        <div className='     '>
          <div className='text-center sm:mt-16 p-2 '>
            <p className="text-xl font-bold text-red-700 mb-4 mt-4 ">We're with you where it counts the most</p>
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Your  <span className='text-red-600'>safety</span> is our priority</h1>
            <p className='text-gray-800 text-xl mt-4 text-justify mx-3'>
              Our cross-functional safety team (Safety, HR, Operations, Sales, Legal, and
              Communications) takes a 360-degree approach to safety. From DriveCams
              that ensure our drivers are safe on the road, to measures that keep our
              employees physically and financially healthy - we're committed to our
              community of associates.
            </p>
          </div>

          <div className='   '>
            <h1 className='font-bold text-xl text-center px-2 mt-4 '>Here’s what putting people first looks like:</h1>
            <div className="flex flex-wrap gap-8 lg:rounded-br-[40%]  mt-4">
              <div className='shadow-2xl w-full sm:w-80 rounded-bl-3xl rounded-tr-3xl lg:mt-8 overflow-hidden border-2 mx-auto'>
                <h1 className='p-3 ml-4'>Achieved</h1>
                <div className='sm:ml-6 ml-4 mt-2'>
                  <h1 className='text-blue-900 font-bold text-[50px]'>84%</h1>
                  <p className='text-3xl font-bold text-blue-900 mb-8 p-2 mt-4'>of associate participation in medical plan benefits</p>
                </div>
              </div>
              <div className='shadow-2xl w-full sm:w-80 rounded-bl-3xl rounded-tr-3xl lg:mt-8 overflow-hidden mx-auto'>
                <h1 className='p-3 ml-4'>Achieved</h1>
                <div className='sm:ml-6 ml-4 sm:mt-2 '>
                  <h1 className='text-blue-900 font-bold text-[50px]'>24%</h1>
                  <p className='text-3xl font-bold text-blue-900 mb-8 mt-8'>reduction in collisions</p>
                </div>
              </div>
              <div className='shadow-2xl w-full sm:w-80 rounded-bl-3xl rounded-tr-3xl lg:mt-8 overflow-hidden mx-auto'>
                <h1 className='p-3 ml-4'>Established new</h1>
                <div className='sm:ml-6 ml-4 sm:mt-2'>
                  <h1 className='text-blue-900 font-bold text-[50px]'>Hybrid</h1>
                  <p className='text-3xl font-bold text-blue-900 mb-8 mt-2'>work program for associates</p>
                </div>
              </div>
            </div>

          </div>
        </div>



        <div className='bg-blue-900 '>
          <div className="w-full bg-white rounded-br-[30%]">
            <div className='text-center sm:mt-4 mt-16 px-4'>
              <p className="text-lg sm:text-xl font-bold text-red-700 mb-2 sm:mb-4">Bring your full self to work</p>
              <h1 className="text-[28px] sm:text-[40px] font-bold text-gray-800 mb-2 sm:mb-4">
                Drive the <span className='text-red-600'>future</span> of the tire industry
              </h1>
              <p className='text-gray-800 text-base sm:text-xl mb-4'>
                ITD offers a wide range of roles throughout the US. We’re always looking for talented
                individuals at all levels. If you’re ready to thrive and drive your career, check out our
                available positions.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="text-center lg:w-[80%] bg-white">
                <div className='flex justify-center'>
                  <img src="https://cdn.pixabay.com/photo/2024/03/21/09/21/ai-generated-8647183_1280.jpg"
                    className='sm:h-[50vh] h-[30vh] w-full sm:w-[80%] object-cover overflow-hidden'
                    alt="Industry Image" />
                </div>
              </div>
            </div>

            <div className='flex justify-center sm:mt-4 mt-8 '>
              <button className='bg-red-600 text-white font-bold text-lg sm:text-xl p-2 sm:p-3 rounded-sm'>
                Visit ITD’s Giving Page
              </button>
            </div>
          </div>
        </div>



        <div className="bg-blue-900">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-6 lg:pt-0 -mt-1  mx-10 pb-10 gap-6 lg:rounded-br-[40%] ">
            <div className='shadow-2xl border-w-[80%] w-[90%] sm:w-full mx-auto rounded-bl-3xl rounded-tr-3xl bg-white lg:mt-8 overflow-hidden'>
              <h1 className='ml-4 mt-2 sm:ml-10'>Achieved</h1>
              <div className='lg:ml-6 mt-2 p-3'>
                <h1 className='text-blue-900 font-bold text-[30px]'>Delivery Driver</h1>
                <p className='text-xl  text-blue-900 line-clamp-5'>We often say our drivers are the face of ITD for many of our customers. They’re an extension of our Sales team. If you excel in a mobile work environment and are a people person, we want you behind our wheels.</p>
              </div>
            </div>
            <div className='shadow-2xl border-w-[80%] w-[90%] sm:w-full mx-auto rounded-bl-3xl rounded-tr-3xl bg-white lg:mt-8 overflow-hidden'>
              <h1 className='ml-4 mt-2 sm:ml-10'>Achieved</h1>
              <div className='lg:ml-6 mt-2 p-3'>
                <h1 className='text-blue-900 font-bold text-[30px]'>Warehouse Associate</h1>
                <p className='text-xl  text-blue-900 line-clamp-5'>Picking hundreds of tires every day, our Warehouse teams pride themselves on precision and safety. If these attributes sound familiar, we want you to join us. </p>
              </div>
            </div>
            <div className='shadow-2xl border-w-[80%] w-[90%] sm:w-full mx-auto rounded-bl-3xl rounded-tr-3xl bg-white lg:mt-8 overflow-hidden'>
              <h1 className='ml-4 mt-2 sm:ml-10'>Established new</h1>
              <div className='lg:ml-6 mt-2 p-3'>
                <h1 className='text-blue-900 font-bold text-[30px]'>Field Leadership</h1>
                <p className='text-xl  text-blue-900 line-clamp-5'>Our field leaders oversee the day-to-day operations of their locations and are a critical part of delivering a superior customer experience.</p>
              </div>
            </div>
            <div className='shadow-2xl border-w-[80%] w-[90%] sm:w-full mx-auto rounded-bl-3xl rounded-tr-3xl bg-white lg:mt-8 overflow-hidden'>
              <h1 className='ml-4 mt-2 sm:ml-10'>Achieved</h1>
              <div className='lg:ml-6 mt-2 p-3'>
                <h1 className='text-blue-900 font-bold text-[30px]'>Sales</h1>
                <p className='text-xl  text-blue-900 line-clamp-5'>Our sales force manages the largest portfolio of products, programs, and promotions in the industry. They’re road warriors committed to retaining and building strong relationships with the customers they serve.</p>
              </div>
            </div>
            <div className='shadow-2xl border-w-[80%] w-[90%] sm:w-full mx-auto rounded-bl-3xl rounded-tr-3xl bg-white lg:mt-8 overflow-hidden'>
              <h1 className='ml-4 mt-2 sm:ml-10'>Achieved</h1>
              <div className='lg:ml-6 mt-2 p-3'>
                <h1 className='text-blue-900 font-bold text-[30px]'>Digital & Tech</h1>
                <p className='text-xl  text-blue-900 line-clamp-5'>We’re more than a tire distributor. We are committed to be the most connected and insightful automotive solutions provider in the industry. If curiosity and a passion for technology is in your DNA, we invite you to apply. </p>
              </div>
            </div>
            <div className=' shadow-2xl border-w-[80%] w-[90%] sm:w-full mx-auto rounded-bl-3xl rounded-tr-3xl bg-white lg:mt-8 overflow-hidden mb-8 sm:mb-0'>
              <h1 className='ml-4 mt-2 sm:ml-10'>Established new</h1>
              <div className='lg:ml-6 mt-2 p-3'>
                <h1 className='text-blue-900 font-bold text-[30px]'>Corporate</h1>
                <p className='text-xl  text-blue-900 line-clamp-5'>Whether your passion and talents are Human Resources, Communications, Marketing, Strategy, or Finance, we want to hear from you. We’re always on the lookout for great talent to join our team.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default SocialResponsibility