import React, { useState } from "react";
import Img from '../../assets/Tyre_Login.png'

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("New password and confirmation do not match!");
    } else {
      setMessage("Password changed successfully!");
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{
        // backgroundImage: `url(${LoginBg})`,
        background: "#F3F4F6",
      }}
    >
      <div className="bg-[#dfa674] flex max-w-3xl p-5 items-center rounded-xl">
        <div className="md:w-1/2 px-2">
          <h2 className="text-2xl font-bold text-center mb-6">Change Password</h2>
          <form onSubmit={handlePasswordChange}>
            <div className="mb-4 relative">
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                className="p-[6px] border hover:border-blue-700 outline-none w-full"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <span
                className="absolute top-[36px] right-2 cursor-pointer text-gray-600 hover:text-gray-800"
                onClick={() => setShowNewPassword((prev) => !prev)}
              >
                {showNewPassword ? "🙈" : "👁️"}
              </span>
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm New Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                className="p-[6px] border hover:border-blue-700 outline-none w-full"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span
                className="absolute top-[36px] right-2 cursor-pointer text-gray-600 hover:text-gray-800"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </span>
            </div>
            {message && <p className="text-center text-red-500 mb-4">{message}</p>}
            <button
              type="submit"
              className="text-white bg-[#002D74] rounded-xl py-2 px-5 font-semibold w-full"
            >
              Change Password
            </button>
          </form>
        </div>
        <div className="md:block hidden w-1/2 ">
          <img
            className=""
            src={Img}
            alt="login form"
          />
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
