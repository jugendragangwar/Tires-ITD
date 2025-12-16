import React from "react";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import Navbar from "../components/navbar/Header";
import Footer from "../components/footer/NewFooter";

const CartPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl max-lg:max-w-2xl mx-auto bg-white p-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-100 p-6 rounded-md">
              <h2 className="font-bold text-2xl text-[#2C3E50]">Your Cart</h2>
              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                    <img
                      src="https://img.freepik.com/premium-vector/realistic-detailed-auto-car-wheel-isolated-white-background-symbol-automobile-repair-service-vector-illustration_287964-734.jpg"
                      className="w-full h-full object-contain"
                      alt="Auto Car Wheel"
                    />
                  </div>

                  <div className="w-full">
                    <h3 className="text-base font-semibold text-gray-800">Auto Car Wheel</h3>
                    <h6 className="text-sm text-gray-800 font-bold cursor-pointer mt-0.5">₹18.00</h6>

                    <div className="flex gap-4 mt-4">
                      <button
                        type="button"
                        className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
                      >
                        <FaMinus className="w-4 h-4" />
                        <span className="mx-2.5">1</span>
                        <FaPlus className="w-4 h-4" />
                      </button>
                      <div className="ml-auto">
                        <FaTrashAlt className="w-4 h-4 fill-red-500 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="border-gray-300" />
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                    <img
                      src="https://img.freepik.com/premium-vector/realistic-detailed-auto-car-wheel-isolated-white-background-symbol-automobile-repair-service-vector-illustration_287964-734.jpg"
                      className="w-full h-full object-contain"
                      alt="Auto Car Wheel"
                    />
                  </div>

                  <div className="w-full">
                    <h3 className="text-base font-semibold text-gray-800">Auto Car Wheel</h3>
                    <h6 className="text-sm text-gray-800 font-bold cursor-pointer mt-0.5">₹18.00</h6>

                    <div className="flex gap-4 mt-4">
                      <button
                        type="button"
                        className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
                      >
                        <FaMinus className="w-4 h-4" />
                        <span className="mx-2.5">1</span>
                        <FaPlus className="w-4 h-4" />
                      </button>
                      <div className="ml-auto">
                        <FaTrashAlt className="w-4 h-4 fill-red-500 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <img
                src="https://readymadeui.com/images/master.webp"
                alt="MasterCard"
                className="w-12 object-contain"
              />
              <img
                src="https://readymadeui.com/images/visa.webp"
                alt="Visa"
                className="w-12 object-contain"
              />
              <img
                src="https://readymadeui.com/images/american-express.webp"
                alt="American Express"
                className="w-12 object-contain"
              />
            </div>
          </div>

          <form>
            <h2 className="font-bold text-2xl text-[#2C3E50]">Payment Details</h2>
            <div className="grid gap-4 mt-8">
              <div>
                <label className="block text-base text-gray-800 mb-2">Card Holder Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="Input_Box"
                />
              </div>

              <div>
                <label className="block text-base text-gray-800 mb-2">Card Number</label>
                <div className="flex Input_Box">
                  <span className="flex items-center px-3">💳</span>
                  <input
                    type="number"
                    placeholder="xxxx xxxx xxxx"
                    className=" w-full outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-base text-gray-800 mb-2">Expiry Date</label>
                  <input
                    type="number"
                    placeholder="08/27"
                    className="Input_Box"
                  />
                </div>

                <div>
                  <label className="block text-base text-gray-800 mb-2">CVV</label>
                  <input
                    type="number"
                    placeholder="XXX"
                    className="Input_Box"
                  />
                </div>
              </div>
            </div>

            <ul className="text-gray-800 mt-8 space-y-4">
              <li className="flex flex-wrap gap-4 text-sm">
                Subtotal <span className="ml-auto font-bold">₹138.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Discount <span className="ml-auto font-bold">₹0.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Tax <span className="ml-auto font-bold">₹4.00</span>
              </li>
              <hr className="border-gray-300" />
              <li className="flex flex-wrap gap-4 text-sm font-bold">
                Total <span className="ml-auto">₹142.00</span>
              </li>
            </ul>

            <button
              type="button"
              className="bg-[#1f5070] text-white py-2 rounded-lg hover:scale-105 duration-300 hover:bg-[#1f5070] border border-[#3498DB] font-medium w-full mt-4"
            >
              Make Payment
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
