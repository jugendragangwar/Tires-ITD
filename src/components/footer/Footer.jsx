import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaAngleRight } from "react-icons/fa";
import Logo1 from '../../assets/Logo1.png';
 

const Footer = () => {
  return (
    <footer className="bg-black w-[100wh]  text-white py-8 ">
      <div className="max-w-7xl mx-auto  px-4">
        <div className=" items-center flex-wrap    grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className='w-full   '>
            <h2 className="lg:text-[60px] text-[30px]  font-bold mb-4">Drop us a line</h2>
            <div className=' divide-y-2 divide-red-800'>
              <div className=' mb-8   pt-8 mt-4 flex gap-28  '>
                <p className="text-xl font-bold " >CALL US</p>
                <p>+91 880-066-6339, 999-911-8109,<br/> +971 521-843-043</p>
              </div>
              <div className='flex  pt-8 mt-4 gap-28'>
                <p className="text-xl font-bold mb-4">MAIL US</p>
                <div>
                  <p>14, chatarpur</p>
                  <p>South New Delhi 110074</p>
                </div>

              </div>
              <div className='flex gap-28 pt-8 mt-4'>
                <h2 className="text-xl font-bold mb-4">FOLLOW US</h2>
                <div className='flex gap-4'>
                <a href="https://www.facebook.com/profile.php?id=61560461702601&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={25} />
                  </a>
                  <a href="https://www.instagram.com/itdsupercharge?igsh=MWh3eHZqejZ6emRjNw==" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={25} />
                     </a>
                     <a href="https://www.linkedin.com/company/itd-supercharge" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={25} />
                  </a>
                </div>
              </div>
              <a href='/contact' className='text-xl  pt-8 mt-4 font-bold  flex'>CONTACT US
                <FaAngleRight size={25} />
              </a>
            </div>
          </div>
          <div className=' justify-center w-full  divide-red-800 divide-w-[50%]  items-center '>
            <h2 className="text-xl font-bold mb-8 border-red-800  border-b-2 pb-6">LINKS</h2>
            <ul className='  space-x-8'>
              <div className='mb-8  grid md:grid-cols-3 mt-6  gap-8'>
                <li><a href="/TermsCondition" className="underline">Terms of Use</a></li>
                <li><a href="/Suppliers" className="underline">Suppliers</a></li>
                <li><a href="/PrivacyPolicy" className="underline">Privacy Policy</a></li>
              </div>
            </ul>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <p className="">© 2024 Indian Tire Distributors, Inc. All Rights Reserved.</p>
          <p><img src={Logo1} alt="Radius Logo" className="h-10 w-auto mx-auto md:ml-2  mb-4" /></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;