import React, { useState, useEffect } from 'react';
import wheel from "../../../public/wheel.gif";
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/navbar/Header'
import Footer from '../../components/Footer/Footer'

const StepperWithContent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    businessName: "",
    personName: "",
    email: "",
    phoneNumber: "",
    password: "",
    gstNumber: "",
    pancardNumber: "",
  });
  const navigate = useNavigate();

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


  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
   <>
   <Navbar/>
   <div className='min-h-screen  py-10'>
        <ul className="relative flex flex-row justify-center  w-[99%] mx-auto">
          <img
            src={wheel}
            alt="wheel"
            width={50}
            className="absolute transition-transform duration-[3000ms] left-0 ease-in-out"
            style={{ transform: `translateX(${activeStep * 33 + "vw"})` }}
          />

          {[0, 1, 2].map((step) => (
            <li
              key={step}
              className="flex items-center gap-x-2 shrink basis-0 flex-1 group"
              onClick={() => setActiveStep(step)}
            >
              <span className={activeStep >= step ? 'block bg-gray-100 rounded-full' : 'hidden'}>
                {step + 1}
              </span>
            </li>
          ))}
        </ul>

        <div onSubmit={handleSubmit} className="mt-5 sm:mt-8 w-1/2 mx-auto">
          {[0, 1, 2].map((step) => (
            <div
              key={step}
              className={`text-center ${activeStep === step ? 'block' : 'hidden'}`}
            >
              {step === 0 && (
                <form className='bg-[#dfa674] flex max-w-3xl p-5 items-center rounded-xl'>
                  <label htmlFor="businessName">Business Name</label>
                  <input
                    id="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Enter Business Name"
                    className="p-[6px] outline-none w-full border hover:border-blue-700"
                  />
                  <label htmlFor="gstNumber">GST Number</label>
                  <input
                    id="gstNumber"
                    type="text"
                    value={formData.gstNumber}
                    onChange={handleChange}
                    placeholder="Enter GST Number"
                    className="p-[6px] outline-none w-full border hover:border-blue-700"
                  />
                </form>
              )}
              {step === 1 && (
                <form className='bg-[#F3F4F6]'>
                  <label htmlFor="personName">Your Name</label>
                  <input
                    id="personName"
                    type="text"
                    value={formData.personName}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    className="p-[6px] outline-none w-full border hover:border-blue-700"
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email Address"
                    className="p-[6px] outline-none w-full border hover:border-blue-700"
                  />
                  <label htmlFor="phoneNumber">Mobile Number</label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter Mobile Number"
                    className="p-[6px] outline-none w-full border hover:border-blue-700"
                  />
                </form>
              )}
              {step === 2 && (
                <form>
                  <input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your Password"
                    className="p-[6px] outline-none w-full border hover:border-blue-700"
                  />
                  <label htmlFor="pancardNumber">Pancard Number</label>
                  <input
                    id="pancardNumber"
                    type="text"
                    value={formData.pancardNumber}
                    onChange={handleChange}
                    placeholder="Enter Pancard Number"
                    className="p-[6px] outline-none w-full border hover:border-blue-700"
                  />
                </form>
              )}
            </div>
          ))}
        </div>

        <div className="mt-5 flex justify-center items-center gap-x-2">
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            Back
          </button>

          {activeStep === 2 ? (
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Finish
            </button>
          ) : (
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>
      </div>
    <Footer/>
   </>
  );
};

export default StepperWithContent;
