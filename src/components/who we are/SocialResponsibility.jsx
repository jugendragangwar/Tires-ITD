import React from 'react'
import Navbar from '../navbar/Navbar'
import { CiDeliveryTruck } from "react-icons/ci";
import { TbJewishStar } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { SlHeart } from "react-icons/sl";
import { FaEye } from "react-icons/fa";
import Footer from '../footer/Footer';
import give from '../../assets/give.png';

const SocialResponsibility = () => {
  return (
    <>
      <Navbar />
      <div className="  max-h-full mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-cover text-center bg-center">
            <img src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className=" w-full h-[60%] "
            />
          </div>
          <div className="relative   p-6 text-white font-bold  ">
            <div className="max-w-2xl  mt-28 lg:mt-28 text-center ">
              <h3 className=" font-bold ">Social Responsibility</h3>
              <h1 className="lg:text-[80px] text-[60px]    ">We Care</h1>
              <p className='text-bold mb-7'> Driving a people-first, connected culture</p>

            </div>

            <div className="flex justify-center   h-[70vh] ">

              <div className="text-center lg:mt-20 mt-20  lg:w-[80%] border-t   border-b-0 border-l-0 border-r-0 rounded-r-3xl  bg-white">
                <h1 className="text-xl font-bold text-red-700 mb-4 mt-4 ">Where the rubber meets the road</h1>
                <p className="text-[50px] text-gray-800 mb-4">Serving our communities  </p>
                <p className='text-gray-700 mb-4'>
                  At ITD, weCare about the communities in which we live and serve. We believe in <br />
                  driving hope, happiness, and wellbeing across our great country, so that this <br />
                  generation and the next has opportunity and accessibility to thrive and drive into the <br />
                  future.
                </p>

              </div>
            </div>

          </div>
        </div>


        <div className='   sm:h-screen h-[69vh]   bg-blue-900'>
          <div className='text-center lg:mt-52 '>
            <p className="text-xl font-bold text-red-700 mb-4 mt-4 ">How we give back</p>
            <h1 className="text-[50px] font-bold text-white mb-4">Committed to supporting our <br /> <span className='text-red-500'>communities</span>  </h1>
            <p className='text-white text-xl mb-4'>
              As a catalyst for positive change, we work to serve our communities in a number of ways. <br />
              Within ITD, we support our associates who are going through difficult times.    <br />
              More broadly, we help underserved communities by contributing the items people need.    <br />
              We also give back to our nation’s everyday heroes, primarily through the Gary Sinise <br />
              Foundation. We think of it as three pillars of support.
            </p>

          </div>
        </div>


        <div className='bg-blue-900     '>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2  w-full h-[100%]   bg-white lg:rounded-tr-[60%]">
            <div className=' shadow-2xl border-w-[50%] w-80 h-[92%] ml-12  rounded-tl-3xl rounded-br-3xl lg:mt-8 overflow-hidden'>
              <img src={give}
                className=' w-full h-[40%] overflow-hidden'
                alt="" />
              <div className='lg:ml-6 '>
                <h1 className='text-gray-800 font-bold text-xl p-2'>Give a hand foundation</h1>
                <p className='text-2xl font-bold text-gray-900 mb-8 p-2 '>We support each other in times of hardship to promote a healthy and inclusive culture.</p>
              </div>
            </div>




            <div className='shadow-2xl border-w-[50%] w-80 h-[92%] ml-12 rounded-br-3xl  rounded-tl-3xl lg:mt-8 overflow-hidden'>
              <CiDeliveryTruck size={70} className='text-blue-900 flex justify-center' />
              <div className='lg:ml-6 lg:mt-8  '>
                <h1 className='text-gray-800 font-bold text-xl p-2'>Our Community</h1>
                <p className='text-3xl font-bold text-gray-900 mb-8 mt-8 p-2'>ITD delivers thousands of meals, school supplies, and other needed items in our annual drives. </p>
              </div>
            </div>





            <div className=' shadow-2xl border-w-[50%] w-80 h-[92%] ml-12  rounded-tl-3xl rounded-br-3xl lg:mt-8 overflow-hidden'>
              <img src="https://www.garysinisefoundation.org/img/og-image-default.png?w=1280&h=720&fit=fill"
                className='w-full overflow-hidden'
                alt="" />
              <div className='lg:ml-6 lg:mt-8'>
                <h1 className='text-gray-800 font-bold text-xl p-2'>Our Everyday Heroes</h1>
                <p className='text-3xl font-bold text-gray-900 mb-8 mt-8 p-2'>Since 2019, ITD has raised $4.5 million for the Gary Sinise Foundation.</p>
              </div>
            </div>
          </div>

             
             <div className=' bg-white '> 
          <div className=' grid lg:grid-cols-4 grid-cols-2   bg-white   sm:divide-x gap-8 divide-gray-600   '>
            <div className='flex items-center  justify-center  '>
              <div className='flex flex-col  items-center'>
                <LuUsers size={30} />
                <h1 className='font-bold text-xl mt-4'>Volunteering </h1>
                <p className='text-xl p-2'>Regularly dedicating <br />  time to give back
                </p>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <div className='flex flex-col mt-4 items-center'>
                <TbJewishStar size={30} />
                <h1 className='font-bold text-xl mt-4'>Scholarships   </h1>
                <p className='text-xl p-2'>Annually awarding our <br /> diverse suppliers
                </p>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <div className='flex flex-col mt-4 items-center'>
                <SlHeart size={30} />
                <h1 className='font-bold text-xl mt-4'>Donating  </h1>
                <p className='text-xl p-2'>Donating needed items <br /> when hardship strikes
                </p>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <div className='flex flex-col mt-4 items-center'>
                <FaEye size={30} />
                <h1 className='font-bold text-xl mt-4'>Funding  </h1>
                <p className='text-xl p-2'>Helping fund our <br /> associates in ways <br /> that matter
                </p>
              </div>
            </div>

          </div>
          <div className='flex justify-center bg-white mt-6'>
            <button className='bg-red-500 font-bold text-xl p-2 text-white '>Join Our Team</button>
          </div>
        </div>
        </div>



        <div className='     '>
          <div className='text-center lg:mt-52 p-2 '>
            <p className="text-xl font-bold text-red-700 mb-4 mt-4 ">How we give back</p>
            <h1 className="text-[50px] font-bold text-gray-800 mb-4">Committed to supporting our <br /> <span className='text-red-500'>communities</span>  </h1>
            <p className='text-gray-800 text-xl mb-4'>
              As a catalyst for positive change, we work to serve our communities in a number of ways. <br />
              Within ITD, we support our associates who are going through difficult times.    <br />
              More broadly, we help underserved communities by contributing the items people need.    <br />
              We also give back to our nation’s everyday heroes, primarily through the Gary Sinise <br />
              Foundation. We think of it as three pillars of support.
            </p>
            <div className='flex justify-center'>
              <img src="https://cdn.pixabay.com/photo/2024/01/30/12/28/ai-generated-8541909_1280.png"
                className=''
                alt="" />
            </div>


          </div>
        </div>



        <div className='     '>
          <div className='text-center lg:mt-52 p-2'>
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
          <div className="relative    font-bold  ">
            <div className='text-center lg:mt-52 p-6'>
              <p className="text-xl font-bold text-red-700 mb-4 mt-4 ">Committed to our causes</p>
              <h1 className="text-[50px] font-bold text-white mb-4">ITD charitable  <br /> corporate <span className='text-red-500'>partnerships</span>

              </h1>
              <p className='text-white text-xl mb-4'>
                The charitable organizations we support reflect our commitment to supporting  <br />
                diversity, inclusion, and equal treatment for all.  <br />
              </p>



            </div>


            {/* <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>
              <div className=" border-w-[50%] h-60   shadow-2xl ">
                <img src="https://media.istockphoto.com/id/1187544564/vector/food-sharing-project-illustration.jpg?s=612x612&w=0&k=20&c=2urK5Gc7HyGV_EnnRwm_n64IQQ45NvFxRa9Id9clato="
                  className='w-full h-full overflow-hidden'
                  alt="" />
              </div>
              <div className=" border-w-[50%] h-60   shadow-2xl ">
                <img src="https://media.istockphoto.com/id/1187544564/vector/food-sharing-project-illustration.jpg?s=612x612&w=0&k=20&c=2urK5Gc7HyGV_EnnRwm_n64IQQ45NvFxRa9Id9clato="
                  className='w-full h-full overflow-hidden'
                  alt="" />
              </div>
              <div className=" border-w-[50%] h-60   shadow-2xl ">
                <img src="https://media.istockphoto.com/id/1187544564/vector/food-sharing-project-illustration.jpg?s=612x612&w=0&k=20&c=2urK5Gc7HyGV_EnnRwm_n64IQQ45NvFxRa9Id9clato="
                  className='w-full h-full overflow-hidden'
                  alt="" />
              </div>
              <div className=" border-w-[50%] h-60   shadow-2xl ">
                <img src="https://media.istockphoto.com/id/1187544564/vector/food-sharing-project-illustration.jpg?s=612x612&w=0&k=20&c=2urK5Gc7HyGV_EnnRwm_n64IQQ45NvFxRa9Id9clato="
                  className='w-full h-full overflow-hidden'
                  alt="" />
              </div>
            </div> */}




            <div className='bg-blue-900      '>
              <div className="   w-full h-[100vh]   bg-white rounded-br-[30%] ">

                <div className='text-center lg:mt-40  sm:mt-28 p-2'>
                  <p className="text-xl font-bold text-red-700 mb-4 mt-4 ">Committed to our country</p>
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

                  <div className="text-center    sm:w-[80%]  bg-white">
                    <div className='flex justify-center'>
                      <img src="https://cdn.pixabay.com/photo/2024/03/21/09/21/ai-generated-8647183_1280.jpg"
                        className='w-80 overflow-hidden h-[30vh]'
                        alt="" />
                    </div>

                  </div>
                </div>
                <div className='flex justify-center'>
                  <button className='bg-red-600 text-white font-bold text-xl  p-2'>Visit ITD’s Giving Page</button>
                </div>
              </div>
            </div>




            <div className="  h-[100vh]   bg-blue-900">

              <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  justify-around lg:ml-8   w-full h-[100vh]   lg:rounded-br-[40%]">
                <div className='  items-center    rounded-tr-3xl lg:mt-8 overflow-hidden'>
                  <img src="https://www.shutterstock.com/image-photo/employee-employer-balanced-cooperation-concept-260nw-328018841.jpg"
                    className=' w-[70%] h-[60%]  rounded-tr-3xl ml-14 mt-4'
                    alt="" />
                  <div className='sm:ml-6 '>
                    <h1 className='text-white font-bold text-xl px-4'>We’re committed to giving back to our Everyday Heroes </h1>

                  </div>
                </div>




                <div className='  items-center    rounded-tr-3xl lg:mt-8 overflow-hidden'>
                  <img src="https://www.shutterstock.com/image-photo/young-woman-having-business-meeting-260nw-365256740.jpg"
                    className=' w-[70%] h-[60%]  rounded-tr-3xl ml-14 '
                    alt="" />
                  <div className='lg:ml-6'>
                    <h1 className='text-white font-bold text-xl px-4'>We’re committed to giving back to our Everyday Heroes </h1>

                  </div>
                </div>




                <div className='  lg:mt-8 overflow-hidden'>
                  <img src="https://media.istockphoto.com/id/1384110533/photo/asian-male-director-is-interviewing-to-recruit-new-employees.jpg?s=612x612&w=0&k=20&c=rR1-wkWClaIfcH7vwut8L2AXK3LML2RLQ-xZ60ZrwEE="
                    className=' w-[70%] h-[60%] rounded-tr-3xl ml-14'
                    alt="" />
                  <div className='lg:ml-6 '>
                    <h1 className='text-white font-bold text-xl px-4'>We’re committed to giving back to our Everyday Heroes </h1>

                  </div>
                </div>
              </div>
            </div>




            
             


             
        <Footer/>
        </div>
        </div>
        </div>
    
      
    </>
  )
}

export default SocialResponsibility