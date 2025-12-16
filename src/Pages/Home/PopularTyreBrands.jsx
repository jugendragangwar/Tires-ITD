import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const tyresData = {
  car: [
    {
      id: 1,
      name: "Apollo Amazer 4G Life",
      price: "₹5,196",
      rating: 4.5,
      reviews: 23,
      type: "Car Tyre",
      features: ["Tubeless", "Fuel Efficient", "Dry Grip"],
      image:
        "https://img.freepik.com/premium-photo/winter-tires-with-sports-rims-3d-render_103577-6534.jpg?w=740",
    },
    {
      id: 2,
      name: "CEAT SecuraDrive",
      price: "₹7,401",
      rating: 4.0,
      reviews: 18,
      type: "Car Tyre",
      features: ["Tubeless", "Fuel Efficient", "Wet Grip"],
      image:
        "https://img.freepik.com/premium-photo/winter-tires-with-sports-rims-3d-render_103577-6534.jpg?w=740",
    },
    {
      id: 3,
      name: "Apollo Amazer 4G Life",
      price: "₹5,196",
      rating: 4.5,
      reviews: 23,
      type: "Car Tyre",
      features: ["Tubeless", "Fuel Efficient", "Dry Grip"],
      image:
        "https://img.freepik.com/premium-photo/winter-tires-with-sports-rims-3d-render_103577-6534.jpg?w=740",
    },
    {
      id: 4,
      name: "CEAT SecuraDrive",
      price: "₹7,401",
      rating: 4.0,
      reviews: 18,
      type: "Car Tyre",
      features: ["Tubeless", "Fuel Efficient", "Wet Grip"],
      image:
        "https://img.freepik.com/premium-photo/winter-tires-with-sports-rims-3d-render_103577-6534.jpg?w=740",
    },
    {
      id: 5,
      name: "Apollo Amazer 4G Life",
      price: "₹5,196",
      rating: 4.5,
      reviews: 23,
      type: "Car Tyre",
      features: ["Tubeless", "Fuel Efficient", "Dry Grip"],
      image:
        "https://img.freepik.com/premium-photo/winter-tires-with-sports-rims-3d-render_103577-6534.jpg?w=740",
    },
    {
      id: 6,
      name: "CEAT SecuraDrive",
      price: "₹7,401",
      rating: 4.0,
      reviews: 18,
      type: "Car Tyre",
      features: ["Tubeless", "Fuel Efficient", "Wet Grip"],
      image:
        "https://img.freepik.com/premium-photo/winter-tires-with-sports-rims-3d-render_103577-6534.jpg?w=740",
    },
    {
      id: 7,
      name: "Apollo Amazer 4G Life",
      price: "₹5,196",
      rating: 4.5,
      reviews: 23,
      type: "Car Tyre",
      features: ["Tubeless", "Fuel Efficient", "Dry Grip"],
      image:
        "https://img.freepik.com/premium-photo/winter-tires-with-sports-rims-3d-render_103577-6534.jpg?w=740",
    },
    {
      id: 8,
      name: "CEAT SecuraDrive",
      price: "₹7,401",
      rating: 4.0,
      reviews: 18,
      type: "Car Tyre",
      features: ["Tubeless", "Fuel Efficient", "Wet Grip"],
      image:
        "https://img.freepik.com/premium-photo/winter-tires-with-sports-rims-3d-render_103577-6534.jpg?w=740",
    },
  ],
  HeavyVehicle: [
    {
      id: 1,
      name: "Apollo EnduMaxx",
      price: "₹12,345",
      rating: 4.2,
      reviews: 15,
      type: "Truck Tyre",
      features: ["Heavy Load", "Durable", "High Traction"],
      image: "path/to/image5.jpg",
    },
    {
      id: 2,
      name: "CEAT WinLoad",
      price: "₹10,789",
      rating: 4.6,
      reviews: 12,
      type: "Truck Tyre",
      features: ["Tubeless", "Long Life", "Fuel Efficient"],
      image: "path/to/image6.jpg",
    },
  ],
};

const TyreSection = () => {
  const [activeTab, setActiveTab] = useState("car");

  const tabs = ["car", "Heavy Vehicle"];

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    gap: 5,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToPrevious = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  return (
    <section className="md:py-10 mt-10 overflow-hidden">
      <div className="container mx-auto shadow px-4  py-6">
        <h1 className="text-black text-left text-xl sm:text-3xl md:py-2 font-medium">
          Popular Tyres
        </h1>

        {/* Tabs Part */}
        <div className="flex md:w-1/4 mb-4 border-b border-black/10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 text-left py-4 md:py-6 font-semibold transition-all duration-300  ${
                activeTab === tab
                  ? "text-blue-800 border-blue-700 border-b"
                  : "text-orange-600"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Swiper */}
        <div className="relative">
          <button
            onClick={goToPrevious}
            aria-label="Previous"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <Slider ref={sliderRef} {...settings}>
            {tyresData[activeTab]?.map((tyre) => (
              <div className="px-2 cursor-pointer" key={tyre.id}>
                {/* Card */}
                <div className="flex flex-col justify-center items-center border mx-auto rounded-lg px-2">
                  <div className="md:h-40">
                    <img
                      src={tyre.image}
                      alt={tyre.name}
                      className="w-2/3 aspect-square  object-contain m-auto"
                    />
                  </div>
                  <h3 className="text-lg font-bold mt-2 line-clamp-1">
                    {tyre.name}
                  </h3>
                  <div className="flex items-center mt-2 gap-1">
                    <span className="text-orange-600 font-bold">
                      {tyre.price}
                    </span>
                    <span className="ml-auto text-gray-500 text-sm">
                      {tyre.rating} ⭐ ({tyre.reviews} reviews)
                    </span>
                  </div>

                  {/* Features */}
                  <div className="mt-3 flex gap-2">
                    {tyre.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-200 sm:bg-white text-gray-700 px-2 py-1 rounded text-sm "
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-500 mb-2">
                    View January Offers
                  </button>
                </div>
              </div>
            ))}
          </Slider>
          <button
            onClick={goToNext}
            aria-label="Next"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        {/* Bottom View All */}
        <div className="text-left mt-5 border-t-[1px] border-black/30">
          <button className="text-blue-700 font-medium py-2">
            View All {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}{" "}
            Tyres
          </button>
        </div>
      </div>
    </section>
  );
};

export default TyreSection;
