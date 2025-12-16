import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TyreBrandsSection = () => {
  const tabs = [
    "Car Tyre ",
    "Heavy Vehicle Tyre",
  ];
  const [activeTab, setActiveTab] = useState(0);

  const brandsData = [
    [
      { name: "Bridgestone", logo: "https://www.tyremarket.com/images/category/home_Bridgestone.webp" },
      { name: "JK", logo: "https://www.tyremarket.com/images/category/home_JK.webp" },
      { name: "Arivo", logo: "https://www.tyremarket.com/images/category/home_Arivo.webp" },
      { name: "Goodrich", logo: "https://www.tyremarket.com/images/category/home_BF_Goodrich.webp" },
      { name: "Dunlop", logo: "https://www.tyremarket.com/images/category/home_Dunlop.webp" },
      { name: "FALKEN", logo: "https://www.tyremarket.com/images/category/home_FALKEN.webp" },
      { name: "Apolo", logo: "https://www.tyremarket.com/images/category/home_Apollo.webp" },
      { name: "Goodyear", logo: "https://www.tyremarket.com/images/category/home_Goodyear.webp" },
    ],
    [
      { name: "FALKEN", logo: "https://www.tyremarket.com/images/category/home_FALKEN.webp" },
      { name: "JK", logo: "https://www.tyremarket.com/images/category/home_JK.webp" },
      { name: "Arivo", logo: "https://www.tyremarket.com/images/category/home_Arivo.webp" },
      { name: "Goodrich", logo: "https://www.tyremarket.com/images/category/home_BF_Goodrich.webp" },
      { name: "Dunlop", logo: "https://www.tyremarket.com/images/category/home_Dunlop.webp" },
      { name: "Firestone", logo: "https://www.tyremarket.com/images/category/home_Firestone.webp" },
    ],
  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    gap: 5,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
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
    <section className="overflow-hidden  Section-Margin">
      <div className="container mx-auto shadow-md px-4 py-6 mb-6">
        <h1 className="text-black text-left text-xl sm:text-3xl md:py-2 font-medium">Popular Tyre Brands</h1>
        <div>
          <div className="flex  md:w-2/4 mb-4 border-b border-gray-300">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`flex-1 text-left py-4 md:py-6 font-semibold transition-all duration-300 ${activeTab === index
                    ? "text-blue-900 border-b-2 border-blue-900"
                    : "text-gray-600 hover:text-gray-800"
                  }`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>


          <div className="relative">
            <button
              onClick={goToPrevious}
              aria-label="Previous"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <Slider ref={sliderRef} {...settings}>
              {brandsData[activeTab].map((brand, index) => (
                <div
                  key={index}
                  className="px-2 cursor-pointer py-2">
                  <div className='flex flex-col border shadow-md justify-center items-center m-auto py-4'>
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain px-1 md:py-2"
                    />
                    <span className="font-semibold text-gray-800">{brand.name}</span>
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

          <div className="text-left mt-5 border-t-[1px] border-gray-300">
            <button className="text-[#224cbf] font-medium py-2">
              View All {tabs[activeTab]}
            </button>
          </div>
        </div>
      </div>


    </section>
  );
};

export default TyreBrandsSection;
