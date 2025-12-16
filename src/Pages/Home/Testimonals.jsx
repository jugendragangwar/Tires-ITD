import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = () => {
    return (
        <section className="bg-white Section-Margin">
            <div className="max-w-5xl mx-auto">
                <h1 className="main-Heading">
                    What Our Clients Say
                </h1>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        prevEl: ".prev-button",
                        nextEl: ".next-button",
                    }}

                >
                    {carouselItems.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className="p-6 md:p-8 bg-[#BFDCFE] rounded-bl-[5rem] rounded-tr-[5rem] ">

                            <p className="text-base text-center font-medium mx-auto mb-2 md:w-[70%] line-clamp-2">
                                {item.text}
                            </p>
                            <div className="flex justify-center items-center gap-3">
                                <img
                                    className="h-16 w-16 rounded-full object-cover"
                                    src={item.image}
                                    alt={item.name}
                                />
                                <div>
                                    <p className="text-black/80 text-lg font-semibold">{item.name}</p>
                                    <p className="text-black/90 text-sm">{item.role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-center gap-4 items-center mt-6">
                    <button
                        className="prev-button border-blue-500 border w-10 h-10 flex rounded-full items-center justify-center"
                        aria-label="Previous Slide"
                    >
                        <FaChevronLeft className="text-blue-500 " />
                    </button>
                    <button
                        className="next-button border-blue-500 border w-10 h-10 flex rounded-full items-center justify-center"
                        aria-label="Next Slide"
                    >
                        <FaChevronRight className="text-blue-500" />
                    </button>
                </div>
            </div>
        </section>
    );
};

const carouselItems = [
    {
        text: "\"The team provided excellent guidance in selecting the right tyres for my sedan. They’re smooth, quiet, and fuel-efficient.\"",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3",
        name: "John Matthews",
        role: "Daily Commuter",
    },
    {
        text: "\"I love taking road trips, and the tyres I got here have been reliable and durable over thousands of miles. No complaints at all!\"",
        image: "https://alfred.lexingtonthemes.com/avatar1.png",
        name: "Emma Watson",
        role: "Road Trip Enthusiast",
    },
    {
        text: "\"These off-road tyres are fantastic. They handle mud, rocks, and uneven terrain effortlessly. I’m thrilled with the performance!\"",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
        name: "Carlos Martinez",
        role: "Off-Road Explorer",
    },
    {
        text: "\"I’ve noticed a big difference in the handling of my car since I switched to these tyres. They grip the road so well, even in the rain.\"",
        image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3",
        name: "Sophia Lee",
        role: "Urban Driver",
    },
    {
        text: "\"The prices here are unbeatable, and the tyres are top quality. I’m really impressed with their service and products.\"",
        image: "https://alfred.lexingtonthemes.com/avatar2.png",
        name: "James Patel",
        role: "Budget Shopper",
    },
    {
        text: "\"As a delivery driver, I need durable and long-lasting tyres. The ones I got from here are holding up perfectly under constant use.\"",
        image: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3",
        name: "Chris Johnson",
        role: "Delivery Driver",
    },
    {
        text: "\"The winter tyres I purchased have been a game changer. They perform amazingly on snow and ice—very dependable!\"",
        image: "https://alfred.lexingtonthemes.com/avatar3.png",
        name: "Liam Brown",
        role: "Winter Traveller",
    },
    {
        text: "\"The staff here are so knowledgeable and friendly. They made the entire buying process easy and stress-free.\"",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3",
        name: "Emily Clark",
        role: "First-Time Buyer",
    },
    {
        text: "\"I was skeptical about buying tyres online, but the experience was seamless, and the delivery was quick. Highly recommended!\"",
        image: "https://plus.unsplash.com/premium_photo-1664642386312-707d51a4f776?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
        name: "Olivia Davis",
        role: "Online Shopper",
    },
    {
        text: "\"I’ve never had tyres this quiet before. They’ve made a huge difference in the comfort of my daily drives.\"",
        image: "https://alfred.lexingtonthemes.com/avatar4.png",
        name: "Noah Wilson",
        role: "Comfort Seeker",
    },
    {
        text: "\"The high-performance tyres I bought here handle corners like a dream. They’re perfect for my sports car.\"",
        image: "https://images.unsplash.com/photo-1532073150508-0c2d6e81f59d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3",
        name: "Lucas Green",
        role: "Sports Car Owner",
    },
    {
        text: "\"I manage a fleet of trucks, and the heavy-duty tyres I got here have drastically reduced maintenance costs. Excellent quality!\"",
        image: "https://plus.unsplash.com/premium_photo-1672750486757-963f030a21ef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
        name: "Henry Taylor",
        role: "Fleet Manager",
    },
    {
        text: "\"Their eco-friendly tyre options are fantastic. I feel good knowing I’m making a sustainable choice for my vehicle.\"",
        image: "https://alfred.lexingtonthemes.com/avatar5.png",
        name: "Amelia Moore",
        role: "Eco-Conscious Buyer",
    },
    {
        text: "\"These tyres have exceeded my expectations for both performance and durability. A great investment!\"",
        image: "https://images.unsplash.com/photo-1502767089025-6572583495b0?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3",
        name: "Ethan Walker",
        role: "Frequent Traveller",
    },
    {
        text: "\"The all-season tyres I bought are perfect for my area. They handle both wet and dry roads flawlessly.\"",
        image: "https://alfred.lexingtonthemes.com/avatar6.png",
        name: "Ava Lopez",
        role: "Seasonal Driver",
    },
    {
        text: "\"I run a taxi service, and my tyres see heavy use. The ones I got here have been super reliable and long-lasting.\"",
        image: "https://plus.unsplash.com/premium_photo-1670321897106-02c32ddaa937?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
        name: "Daniel Martinez",
        role: "Taxi Operator",
    },
    {
        text: "\"Their run-flat tyres are exactly what I needed for added peace of mind during long drives.\"",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3",
        name: "Grace Allen",
        role: "Long-Distance Commuter",
    },
    {
        text: "\"Switching to these tyres has made my bike rides much smoother. Great grip and balance on all surfaces.\"",
        image: "https://alfred.lexingtonthemes.com/avatar7.png",
        name: "Leo Adams",
        role: "Motorcycle Enthusiast",
    },
    {
        text: "\"My tractor needed specialised tyres, and this store delivered exactly what I was looking for. Outstanding quality!\"",
        image: "https://plus.unsplash.com/premium_photo-1670008431962-0d2ec7816237?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
        name: "Jack Carter",
        role: "Farmer",
    },
    {
        text: "\"The tread design on these tyres is perfect for wet roads. I feel so much safer driving in heavy rain.\"",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3",
        name: "Mia White",
        role: "Safety-Conscious Driver",
    },
];


export default Carousel;
