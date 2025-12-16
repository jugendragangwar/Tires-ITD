import React, { useState, useEffect } from "react";
import Img from "../../assets/Tyre_Login.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../../components/BaseUrl/BaseUrl";
import Header from "../../components/navbar/Header";
import Footer from "../../components/Footer/NewFooter";
import { usePasswordToggle } from "../../Constants/Constant";
import SignUp from "../../assets/Images/SignUp.webp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { inputType, toggleVisibility, isVisible } = usePasswordToggle();

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, status } = await axios.post(`${BaseUrl}/user/login`, {
        email,
        password,
      });

      if (status === 200 || status === 201) {
        localStorage.setItem("Logintoken", data.token);
        console.log(data.token, "response.data.token");
        console.log("Login successful:", data.message);
        navigate("/");
      } else {
        throw new Error(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error(error.message);
      alert(error.message || "An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div
        className="flex justify-center items-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${SignUp})`,
        }}
      >
        <div className="bg-white shadow-lg flex max-w-3xl p-5 items-center">
          {/* Login Form Section */}
          <div className="md:w-1/2 px-2 ">
            <h2 className="font-semibold text-3xl text-[#2C3E50]">Login</h2>
            <p className="text-base mt-2 text-[#2a536f] mb-2">
              If you're already a member, easily log in now.
            </p>

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              {/* Email Input */}
              <input
                className="Input_Box"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {/* Password Input */}
              <div className="relative">
                <input
                  className="Input_Box"
                  type={inputType}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div
                  onClick={toggleVisibility}
                  className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-black"
                >
                  {isVisible ? (
                    <FaRegEyeSlash size={20} />
                  ) : (
                    <FaRegEye size={20} />
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                className={`bg-[#1f5070] text-white py-2 rounded-lg hover:scale-105 duration-300 hover:bg-[#1f5070] border border-[#3498DB] font-medium  ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                type="submit"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            {/* Additional Links */}
            <div className="mt-6">
              <hr className="border-gray-300" />
              <p className="text-center text-gray-700 font-bold text-sm">OR</p>
              <hr className="border-gray-300" />
            </div>
            <div className="mt-4 py-2 text-sm border-b border-gray-300">
              <Link
                to="/Forgot"
                className="text-[#0b446a] hover:text-red-600  underline"
              >
                Forget password?
              </Link>
            </div>
            <div className="flex justify-between mt-2">
              <p className=" md:mr-0 text-sm items-center my-auto text-[#2c323a]">
                If you don't have an account..
              </p>
              <Link to="/RegistrationForm">
                <button className="text-white bg-[#002D74] rounded-xl py-2 px-5 text-lg hover:bg-[#004080]">
                  Register
                </button>
              </Link>
            </div>
          </div>
          {/* Image Section */}
          <div className="md:block hidden w-1/2">
            <img src={Img} alt="Login Illustration" className="rounded-xl" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
