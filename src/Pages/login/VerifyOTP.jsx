import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import { BaseUrl } from "../../components/BaseUrl/BaseUrl";
import Loginbg from '../../assets/Images/Loginbg.webp'

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const validateOtp = (otpValue) => /^\d{6}$/.test(otpValue);

  const handleChange = (otpValue) => {
    setOtp(otpValue);
    setErrorMessage(validateOtp(otpValue) ? "" : "OTP should be 6 digits.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateOtp(otp)) {
      setErrorMessage("Please enter a valid 6-digit OTP.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.put(`${BaseUrl}/user/verifyOtp/${id}`, { otp });
      setSuccessMessage("OTP Verified Successfully!");
      navigate("/login");
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center"
    style={{
      backgroundImage: `url(${Loginbg})`,
    
    }}
    >
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">OTP Verification</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex justify-center">
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            renderSeparator={<span className="mx-1"></span>}
            renderInput={(props) => (
              <input
                {...props}
                className="w-12 h-12 text-center border text-blue-700 border-blue-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-50"
                style={{ fontSize: "24px" }}
                maxLength={1}
                aria-label="OTP Digit"
              />
            )}
          />
        </div>
        <button
          type="submit"
          disabled={loading || !validateOtp(otp)}
          className={`w-full py-2 text-white font-semibold rounded-lg ${loading || !validateOtp(otp) ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>
      </div>
    </div>
  );
};

export default VerifyOTP;
