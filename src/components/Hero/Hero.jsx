import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  heroLeftBig,
  heroLeftLeftSmallTop,
  heroLeftSmall,
  heroRightBig,
  heroRightSmallLeft,
  heroRightSmallRight,
} from "../../Data/HeroImages";
import { motion } from "framer-motion";

const changeAutoPlaySpeed = (autoPlaySpeed) => {
  return {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: autoPlaySpeed,
    arrows: false,
    cssEase: "linear",
  };
};

const Hero = () => {
  var leftBig = changeAutoPlaySpeed(4000);
  var leftSmallTop = changeAutoPlaySpeed(6000);
  var leftSmallBottom = changeAutoPlaySpeed(2000);

  var rightBig = changeAutoPlaySpeed(4000);
  var rightSmallLeft = changeAutoPlaySpeed(10000);
  var rightSmallRight = changeAutoPlaySpeed(5000);
  return (
    <div className="relative w-[100%] h-[80vh] md:h-[100vh] bg-white">
      {/* center text */}
      <div className="absolute w-[100%] md:max-w-[500px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
        <p className=" heading-name text-[#f00] text-[17px] md:text-[25px] tracking-[2px]">
          Travel Experiences!
        </p>
        <h1 className=" heading-name  mx-auto  text-black rotate-[-10deg] text-[100px] md:text-[150px] tracking-[10px] mt-[-30px] md:mt-[-50px]  mb-6 font-extrabold">
          Classy
        </h1>
        <p className=" heading-sub-name mb-5 text-[16px] md:text-[17px] w-[80%]  tracking-[2px] md:w-[75%] md:mt-[-20px] mx-auto text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          placeat <br /> ipsa sint explicabo sequi id.
        </p>
        <button>More Info</button>
      </div>

      {/* big left img & big top */}
      <div className="absolute top-0 w-full h-[180px]  md:top-[50px] md:left-[20px] md:w-[300px] md:h-[500px]">
        <Slider {...leftBig}>
          {heroLeftBig.map((images) => {
            return (
              <img
                src={images}
                className="w-[100%] h-[180px] md:h-[500px] object-cover"
                alt=""
                loading="lazy"
              />
            );
          })}
        </Slider>
      </div>

      {/* left small top */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1.2,
        }}
        className="hidden md:block absolute top-[80px] left-[250px] h-[250px] w-[200px]"
      >
        <img
          src={heroLeftLeftSmallTop[0]}
          className="w-[100%] h-[250px]  object-cover"
          alt=""
          loading="lazy"
        />
      </motion.div>
      {/* left img 2 & small bottom */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1.2,
        }}
        className="hidden md:block absolute top-[390px] left-[130px] h-[230px] w-[370px]"
      >
        <Slider {...leftSmallBottom}>
          {heroLeftSmall.map((images) => {
            return (
              <img
                src={images}
                className="w-[100%] h-[230px] object-cover"
                alt=""
                loading="lazy"
              />
            );
          })}
        </Slider>
      </motion.div>

      {/* big right img big bottom img */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1.2,
        }}
        className="absolute block bottom-0 w-full h-[180px] md:top-[30px] md:right-[60px] md:w-[360px] md:h-[400px]"
      >
        <img
          src={heroRightBig[0]}
          className="w-[100%] h-[180px] md:h-[480px] object-cover"
          alt=""
          loading="lazy"
        />
      </motion.div>

      {/* right small Right */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1.2,
        }}
        className="hidden md:block absolute  top-[330px] right-[30px] h-[300px] w-[230px]"
      >
        <img
          src={heroRightSmallRight[0]}
          className="w-[100%] h-[300px] object-cover"
          alt=""
          loading="lazy"
        />
      </motion.div>

      {/* right small Left */}
      <div className="hidden md:block absolute  top-[390px] right-[310px] h-[190px] w-[190px]">
        <Slider {...rightSmallLeft}>
          {heroRightSmallLeft.map((images) => {
            return (
              <img
                src={images}
                className="w-[100%] h-[190px] object-cover"
                alt=""
                loading="lazy"
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
