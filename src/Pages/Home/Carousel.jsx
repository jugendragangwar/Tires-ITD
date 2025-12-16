import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        arrows: false,
   
    };

    return (
        <div
            style={{
                background: 'linear-gradient(to bottom, #FFF2D7 50%, #000 50%)',
            }}>
            <div
                className="overflow-hidden mx-auto container py-4"

            >
                <Slider {...settings}>
                    <div>
                        <img
                            src="https://img.freepik.com/free-vector/tires-realistic-horizontal-banner_1284-73901.jpg?t=st=1735308864~exp=1735312464~hmac=453278ffd351b7c8e7937cdb3b198d3cd7854a7975837e95abaa4bfccda1d782&w=700"
                            alt="Carousel 1"
                            className="w-full object-cover"
                        />
                    </div>
                    <div>
                        <img
                            src="https://img.freepik.com/free-vector/best-choice-wheel-tire-horizontal-ads-poster-with-place-tires-brand-realistic-vector-illustration_1284-82102.jpg?t=st=1735308903~exp=1735312503~hmac=15d110ff085e3b876dd2730f6bd128284128aeb51d751b0d462eb0d017580bce&w=700"
                            alt="Carousel 2"
                            className="w-full object-cover "
                        />
                    </div>
                    <div>
                        <img
                            src="https://img.freepik.com/free-vector/tires-realistic-horizontal-banner_1284-73901.jpg?t=st=1735308864~exp=1735312464~hmac=453278ffd351b7c8e7937cdb3b198d3cd7854a7975837e95abaa4bfccda1d782&w=700"
                            alt="Carousel 3"
                            className="w-full object-cover"
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Carousel;
