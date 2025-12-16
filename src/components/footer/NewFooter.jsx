import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from '../../assets/Images/Logo.webp';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="sm:grid md:grid-cols-4 sm:grid-cols-2 text-black mx-1 py-4 md:py-8">
        <div className="">
          <img src={Logo} className="w-[100px]" alt="Company Logo" />
        </div>
        <div className="flex flex-col mt-2">
          <div className="text-sm uppercase text-[#261dcd] font-bold">Resources</div>
          <a className="hover:text-blue-800 font-medium" href="/TermsCondition">T&C</a>
          <a className="hover:text-blue-800 font-medium" href="/Suppliers">Suppliers</a>
          <a className="hover:text-blue-800 font-medium" href="/PrivacyPolicy">Privacy Policy</a>
        </div>
        <div className="flex flex-col mt-2">
          <div className="text-sm uppercase text-[#261dcd] font-bold">Vehicles</div>
          <a className="hover:text-blue-800 font-medium" href="/#">Cars</a>
          <a className="hover:text-blue-800 font-medium" href="/#">Heavy Vehicle</a>
        </div>
        <div className="flex flex-col mt-2">
          <Link to='ContactSection'>   <div className="text-sm uppercase cursor-default text-[#261dcd] font-bold">Contact us</div></Link>
          <a className="hover:text-blue-800 font-medium" href="/#">14,Chhatarpur, South New Delhi 110074</a>
          <a className="hover:text-blue-800 font-medium" href="mailto:contact@company.com">contact@company.com</a>
          <a className="hover:text-blue-800 font-medium" href="tel:+918800666339">+91 880-066-6339, +971 521-843-043</a>
          <a className="hover:text-blue-800 font-medium" href="tel:+971521843043"></a>
        </div>
      </div>


      <div className="">
        <p className="bg-[#EEECEC] text-sm md:text-base font-medium  text-center py-2 md:py-4">© 2024 ITD Supercharge. All Rights Reserved.</p>
      </div>
    </div>
  );
};
export default Footer;
