import React, { useState } from "react";
const Model = () => {
  const [activeTab, setActiveTab] = useState("Car Tyre");

  const data = {
    "Car Tyre": [
      { id: 1, title: "Mahindra THAR", img: "https://img.freepik.com/free-psd/view-crossroad-car_23-2151780815.jpg?t=st=1765882235~exp=1765885835~hmac=201f25b05751f57103bdc225c32852e874f2515b1173f80cb5659aca49e65bfe&w=700" },
      { id: 2, title: "Maruti Baleno", img: "https://img.freepik.com/free-psd/view-crossroad-car_23-2151780818.jpg?t=st=1765882302~exp=1765885902~hmac=129561ed2389057456e9ca0928487c1d9a9d2cdf1ab4cb874dc96f4039dd28ae&w=1480" },
      { id: 3, title: "Maruti Wagon R", img: "https://img.freepik.com/free-photo/3d-car-with-simple-background_23-2150797044.jpg?t=st=1765882359~exp=1765885959~hmac=54725c415fd6ca5f8813325f69a1389eff88332959260aac04d29e0d83f7ddbe&w=1480" },
    ],
    "Heavy Vehicle": [
      { id: 1, title: "Ashok Leyland", img: "https://img.freepik.com/free-vector/car-wheel-black-background_1284-5275.jpg?t=st=1765882460~exp=1765886060~hmac=8750b6e78a394cf16b2fe1c5fdc684fea8b8713373c3eebbe2b502f2cf27ea8b&w=1480" },
      { id: 2, title: "Tata Ace", img: "https://img.freepik.com/free-vector/3d-realistic-black-tyre-side-front-view-shining-steel-rubber-wheel-car_1441-2353.jpg?t=st=1765882515~exp=1765886115~hmac=eb169956191bd99d41f2dfe85fd1768dd433bf416569ec3d1e5033395dd7e1e5&w=1480" },
      { id: 3, title: "Mahindra Blazo", img: "https://img.freepik.com/free-vector/car-wheel-realistic_1284-4977.jpg?t=st=1765882574~exp=1765886174~hmac=68d8cb8c9b10a4a1d55812a5f5e6463148222ba5bcb18f2a794b14631b90f8d7&w=1480" },
    ],
  };
  

  return (
    <div className="bg-gray-200  Section-Margin overflow-hidden py-5">
      <div className="container mx-auto">
        <h2 className="main-Heading text-white mb-4">
          Tyres For Popular Model
        </h2>

        <div className="flex justify-center space-x-4 mb-14 lg:mb-28">
          {Object.keys(data).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg  font-semibold ${
                activeTab === tab
                  ? "bg-[#2a4798] text-white  hover:bg-blue-800"
                  : "bg-blue-400  hover:bg-blue-500"
              } transition-colors duration-300`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="Grid ">
          {data[activeTab].map((item) => (
            <div
              key={item.id}
              className="relative bg-white mt-16 h-[70%] sm:h-[65%] md:h-[55%] lg:h-[85%]  lg:mt-0"
            >
              <div className="relative -top-16 left-0  flex flex-col justify-center items-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-full object-cover px-4"
              />
                <h3 className="text-lg font-semibold text-center text-gray-800 mt-4">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Model;

