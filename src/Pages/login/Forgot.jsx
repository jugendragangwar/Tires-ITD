import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Img from "../../assets/Tyre_Login.png";
import { BaseUrl } from '../../components/BaseUrl/BaseUrl'
import Navbar from '../../components/navbar/Header'
import Footer from '../../components/Footer/NewFooter'

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const [user_Id, setUser_ID] = useState("")
  console.log(user_Id, "userid")

  const navigate = useNavigate();



  // Handle Email Submission
  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please include a valid email address so we can get back to you.");
      return;
    }
    try {
      const response = await axios.put(`${BaseUrl}/user/forgetPassword`, { email });
      setUser_ID(response.data.user_id)

      if (response.status === 200 || response.status === 201) {
        alert(response.data.message || "OTP has been sent to your email!");
        setStep(2);
      } else {
        setError("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      setError(
        "Error: " +
        (error.response?.data?.message || "Something went wrong. Try again.")
      );
    }
  };


  const handleOtpSubmit = async (event) => {
    event.preventDefault();

    if (!otp || !/^\d{6}$/.test(otp)) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    if (!newPassword || newPassword.length < 6) {
      setError("Please enter a valid password (at least 6 characters).");
      return;
    }

    try {
      const response = await axios.put(`${BaseUrl}/user/VerifyOtpAndResetPassword/${user_Id}`, {
        otp,
        newPassword,
      });

      if (response.status === 200 || response.status === 201) {
        alert(response.data.message || "Password reset successfully!");
        navigate("/login");
      } else {
        setError("OTP verification failed. Please try again.");
      }
    } catch (error) {
      setError(
        "Error: " +
        (error.response?.data?.message || "Something went wrong. Try again.")
      );
    }
  };

  return (
   <>
   <Navbar/>
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-gray-100 shadow-lg flex flex-col-reverse sm:flex-row max-w-3xl p-6 items-center rounded-xl">
        <div className="md:w-1/2 sm:px-6 mt-6 sm:mt-0">
          {step === 1 ? (
            <>
             <div className="mb-6">
             <h1 className="font-bold text-3xl text-[#2C3E50]">
                Forgot Password?
              </h1>
              <p className="text-base mt-2 text-[#2a536f] mb-2">
                Remember your password?
                <a
                className="text-[#1443a9] text-base hover:text-blue-800 hover:underline"
                  href="#login"
                >
                  Login here
                </a>
              </p>
             </div>
              <form onSubmit={handleEmailSubmit} className="grid gap-y-4">
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="abc@gmail.com"
                    className="Input_Box"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {error && <p className="text-xs text-red-600 mt-2">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="bg-[#1f5070] text-white py-2 rounded-lg hover:scale-105 duration-300 hover:bg-[#1f5070] border border-[#3498DB] font-medium"
                >
                  Send OTP
                </button>
              </form>
            </>





          ) : (
            <>
              <h1 className="text-center text-2xl font-bold text-[#1E3A8A] mb-4">
                Verify OTP
              </h1>
              <p className="text-center text-sm text-gray-700 mb-5">
                Enter the 6-digit OTP sent to <strong>{email}</strong>.
              </p>
              <form onSubmit={handleOtpSubmit} className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="otp"
                    className="text-sm font-semibold text-gray-700 mb-2 block"
                  >
                    OTP
                  </label>
                  <input
                    type="text"
                    id="otp"
                    name="otp"
                    className="py-3 px-4 w-full border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="newPassword"
                    className="text-sm font-semibold text-gray-700 mb-2 block"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    className="py-3 px-4 w-full border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="text-xs text-red-600 mt-2">{error}</p>}
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 rounded-lg hover:scale-105 duration-300 hover:bg-blue-800 font-medium"
                >
                  Verify OTP and Reset Password
                </button>
              </form>
            </>
          )}
        </div>
        <div className=" sm:w-1/2 bg-gray-100">
          <img
            className="rounded-xl bg-gray-100 bg-blend-color-burn "
            // src={Img}
            src="https://img.freepik.com/free-vector/sport-car-wheel-with-red-brake-gear_107791-949.jpg?t=st=1736510255~exp=1736513855~hmac=7227e63583ec3411f89d2b5a97e438d2e8c69040388bb555093efce082ad9364&w=740"
            alt="Forgot Password Illustration"
          />
        </div>
      </div>
    </div>
    <Footer/>
   </>
  );
};

export default ForgotPassword;
