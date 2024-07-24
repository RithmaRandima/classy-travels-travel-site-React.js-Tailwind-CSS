import React from "react";
import { Background, Parallax } from "react-parallax";
import BackgroundImage from "../../assets/Testimonials-Background.jpg";
import TestimonialsBox from "./TestimonialsBox/TestimonialsBox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testimonialData } from "../../Data/TestimonialData";

const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col h-[100%] m-auto w-ful mb-20">
      <Parallax
        className="relative w-full h-full flex flex-col "
        strength={750}
      >
        <Background className="custom-bg w-[100vw] h-[155vh] md:h-[150vh]  overflow-hidden">
          <img
            src={BackgroundImage}
            alt="fill murray"
            className="h-[100%] w-[100%] object-cover"
          />
        </Background>

        <div className="pt-10 px-2 ">
          <h1 className="text-3xl md:text-5xl text-white">
            Unforgettable Travel <br />
            <span className="font-bold text-[#f00]"> Experiences</span>
          </h1>
        </div>

        <div className="w-[90%] md:w-[50%] mx-auto p-9 ">
          <Slider {...settings}>
            {testimonialData.map((data) => {
              return (
                <TestimonialsBox
                  key={data.id}
                  image={data.img}
                  name={data.name}
                  city={data.city}
                  message={data.message}
                />
              );
            })}
          </Slider>
        </div>
      </Parallax>
    </div>
  );
};

export default Testimonials;
