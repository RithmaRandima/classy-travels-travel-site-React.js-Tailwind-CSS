import React from "react";
import { TiTick } from "react-icons/ti";
import BgImage from "../../assets/Newsletter.jpg";

import { motion } from "framer-motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { heroLeftBig } from "../../Data/HeroImages";

const bgImage = {
  backgroundImage: `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.6)),url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100%",
};

const NewsLetter = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    cssEase: "linear",
  };
  return (
    <div
      style={bgImage}
      className=" pt-3 h-[100%] md:h-[100vh] w-[100%] grid grid-cols-1 md:grid-cols-2 place-items-center"
    >
      <motion.div
        initial={{ x: -500 }}
        whileInView={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 100,
          delay: 0.1,
        }}
        className=" w-[430px] h-[480px] "
      >
        <Slider {...settings}>
          {heroLeftBig.map((images) => {
            return (
              <img
                src={images}
                className="w-[100%] h-[480px] object-cover"
                alt=""
              />
            );
          })}
        </Slider>
      </motion.div>

      <div className="p-6 hidden md:block">
        <div className="flex items-start flex-col text-left text-white">
          <p className="sub-title text-[#f00] text-[17px] md:text-[22px] mb-3">
            Adventure Travel
          </p>
          <h1 className="font-bold text-[32px] md:text-[37px] mb-2">
            Embrace the Thrill of <br /> the Unknown
          </h1>
          <p className="leading-7 text-[16px] md:text-[17px] mb-3">
            Are you tired of the typical tourist destinations and looking to
            step out of your comfort zone? Adventure travel may be the perfect
            solution for you! Here are four reasons why you should book an
            adventure travel experience :
          </p>
        </div>
        <div>
          <div className="border-b border-white/70 flex py-5 text-white">
            <TiTick className="text-[22px]  mr-3" />
            <p>Connect with nature</p>
          </div>

          <div className="border-b border-white/70 flex py-5 text-white">
            <TiTick className="text-[22px]  mr-3" />
            <p>Experience other cultures</p>
          </div>

          <div className="flex py-5 text-white">
            <TiTick className="text-[22px]  mr-3" />
            <p>Create unforgettable memories</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
