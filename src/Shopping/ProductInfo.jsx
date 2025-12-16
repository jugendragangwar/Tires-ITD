import React from 'react';
import Navbar from '../components/navbar/Header';
import Footer from '../components/Footer/NewFooter';

const ProductInfo = () => {
  return (
    <>
      <Navbar />
      <div className=" p-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="w-full sticky top-0">
              <div className="bg-white shadow p-2 min-h-[420px] ">
                <img
                  src="https://img.freepik.com/premium-vector/car-tires-isolated-white_149267-18.jpg?w=740"
                  alt="Tyre Product"
                  className="w-full aspect-video object-cover"
                />
              </div>
              <div className="flex overflow-auto gap-4 mt-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <img
                    key={i}
                    src="https://img.freepik.com/premium-vector/realistic-illustration-single-car-tire_149267-338.jpg?w=740"
                    alt="Product"
                    className="w-16 h-16 aspect-square object-cover cursor-pointer shadow-md  hover:border-blue-900 border"
                  />
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h3 className="text-xl font-bold text-gray-800">Premium Tyre Model X</h3>
              <div className="flex items-center gap-3 mt-2 text-[#212326]">
                <div className="flex items-center gap-1">
                  <span className="text-base">4.5</span>
                  {[...Array(4)].map((_, idx) => (
                    <svg
                      key={idx}
                      className="w-4 h-4 fill-[#1f5070]"
                      viewBox="0 0 14 13"
                    >
                      <path d="M7 0L9.5 3.6L13.6 4.8L11 8.3L11.1 12.6L7 11.2L2.9 12.6L3 8.3L0.3 4.8L4.5 3.6L7 0Z" />
                    </svg>
                  ))}
                  <svg
                    className="w-4 h-4 fill-gray-300"
                    viewBox="0 0 14 13"
                  >
                    <path d="M7 0L9.5 3.6L13.6 4.8L11 8.3L11.1 12.6L7 11.2L2.9 12.6L3 8.3L0.3 4.8L4.5 3.6L7 0Z" />
                  </svg>
                </div>
                <span>|</span>
                <p className="text-sm text-[#212326]">123 Ratings</p>
                <span>|</span>
                <p className="text-sm text-[#212326]">67 Reviews</p>
              </div>
              <p className="mt-2 text-sm text-[#212326]">
                Durable and high-performance tyres designed for all terrains, ensuring safety, longevity, and smooth rides.
              </p>

              {/* Price and Discount */}
              <div className="flex items-center gap-4 mt-4">
                <p className="text-base text-[#393a3d] line-through">₹200</p>
                <h4 className="text-3xl font-bold text-[#1f5070]">₹180</h4>
                <span className="bg-[#1f5070] text-white text-sm font-semibold px-2 py-1">Save 10%</span>
              </div>

              {/* Quantity and Buttons */}
              <div className="mt-6">
                <div className="flex items-center gap-2 border p-2 w-max">
                  <button className="text-gray-600">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 121.805 121.804"
                    >
                      <path d="M7.308 68.211h107.188a7.309 7.309 0 0 0 7.309-7.31 7.308 7.308 0 0 0-7.309-7.309H7.308a7.31 7.31 0 0 0 0 14.619z" />
                    </svg>
                  </button>
                  <span className="text-gray-800 font-semibold px-3">1</span>
                  <button className="text-gray-600">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 509.892c-19.058 0-34.5-15.442-34.5-34.5V36.608c0-19.058 15.442-34.5 34.5-34.5s34.5 15.442 34.5 34.5v438.784c0 19.058-15.442 34.5-34.5 34.5z" />
                      <path d="M475.392 290.5H36.608c-19.058 0-34.5-15.442-34.5-34.5s15.442-34.5 34.5-34.5h438.784c19.058 0 34.5 15.442 34.5 34.5s-15.442 34.5-34.5 34.5z" />
                    </svg>
                  </button>
                </div>
                <div className="flex gap-4 mt-4">
                  <button className="w-1/2 border bg-white text-gray-800 font-semibold p-3 hover:bg-gray-100">
                    Add to Cart
                  </button>
                  <button className="w-1/2 bg-[#1f5070] text-white font-semibold p-3 hover:bg-[#1f5a81]">
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Delivery Location */}
              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-800">Select Delivery Location</h3>
                <p className="text-sm text-[#212326] mt-1">
                  Enter the pincode to check product availability.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <input
                    type="number"
                    placeholder="Enter pincode"
                    className="Input_Box"
                  />
                  <button className="bg-[#1f5070] text-white p-2 px-4 hover:bg-purple-700">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductInfo;
