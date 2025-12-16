import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { BaseUrl } from "../../components/BaseUrl/BaseUrl";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Registration } from "../../Constants/Constant";
import Navbar from "../../components/navbar/Header";
import Footer from '../../components/footer/NewFooter'
import Img from '../../assets/Images/Register.webp'
import { FaBuilding, FaUser, FaEnvelope, FaPhone, FaLock, FaFileInvoice, FaIdCard } from "react-icons/fa";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    personName: "",
    email: "",
    phoneNumber: "",
    password: "",
    gstNumber: "",
    pancardNumber: "",
    address: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BaseUrl}${Registration}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200 || response.status === 201) {
        navigate(`/VerifyOtp/${response.data.user.id}`);
        toast.success(response.data.user.message || "Check your mail for OTP verification. User created successfully.");
      } else {
        toast.error(response.message || "Registration failed! Please try again.");
      }
    } catch (error) {
      toast.error("Error: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${Img})`,

        }}
      >
        <div className="w-full max-w-4xl bg-gray-100 p-8 shadow-md rounded-xl my-10 sm:my-0 mx-2 ">
          <h3 className="font-bold text-2xl text-[#2C3E50]">Ready to Shop? Let’s Get Started!</h3>
          <span className="text-base mt-2 text-[#2a536f] mb-2">A few quick steps, and you’re all set to explore our amazing collection."</span>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="businessName" className="block text-gray-700 font-medium mb-2">
                  <FaBuilding className="inline-block mr-2" /> Business Name
                </label>
                <input
                  id="businessName"
                  type="text"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Enter Business Name"
                  className="Input_Box"
                />

              </div>

              <div>
                <label htmlFor="personName" className="block text-gray-700 font-medium mb-2">
                  <FaUser className="inline-block mr-2" /> Your Name
                </label>
                <input
                  id="personName"
                  type="text"
                  value={formData.personName}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="Input_Box"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  <FaEnvelope className="inline-block mr-2" /> Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email Address"
                  className="Input_Box"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">
                  <FaPhone className="inline-block mr-2" /> Mobile Number
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter Mobile Number"
                  className="Input_Box"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  <FaLock className="inline-block mr-2" /> Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your Password"
                  className="Input_Box"
                />
              </div>
              <div>
                <label htmlFor="pancardNumber" className="block text-gray-700 font-medium mb-2">
                  <FaIdCard className="inline-block mr-2" /> Pancard Number
                </label>
                <input
                  id="pancardNumber"
                  type="text"
                  value={formData.pancardNumber}
                  onChange={handleChange}
                  placeholder="Enter Pancard Number"
                  className="Input_Box"
                />
              </div>
              <div>
                <label htmlFor="pancardNumber" className="block text-gray-700 font-medium mb-2">
                  <FaIdCard className="inline-block mr-2" />Address
                </label>
                <input
                  id="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter Your Address"
                  className="Input_Box"
                />
              </div>
              <div>
                <label htmlFor="gstNumber" className="block text-gray-700 font-medium mb-2">
                  <FaFileInvoice className="inline-block mr-2" /> GST Number
                </label>
                <input
                  id="gstNumber"
                  type="text"
                  value={formData.gstNumber}
                  onChange={handleChange}
                  placeholder="Enter GST Number"
                  className="Input_Box"
                />
              </div>
            </div>


            <div className="flex  sm:justify-center mt-4">
              <button
                className="w-full sm:w-1/2 bg-[#1f5070] text-white py-2 rounded-lg hover:scale-105 duration-300 hover:bg-[#1f5070] font-medium"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />

      </div>
      <Footer />
    </>
  );
};

export default RegistrationForm;
