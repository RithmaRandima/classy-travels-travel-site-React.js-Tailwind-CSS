import React from "react";
import "./Hero.css";
import imgLeftBig from "../../assets/Hero-Left-Big.jpg";
import imgLeftTop from "../../assets/Hero-Left-Top.jpg";
import imgLeftBottom from "../../assets/Hero-Left-bottom.jpg";
import imgRightBig from "../../assets/Hero-Right-Big.jpg";
import imgRightTop from "../../assets/Hero-Right-Top.jpg";
import imgRightBottomSmall from "../../assets/Hero-Right-Small.jpg.jpg";

import image1 from "../../assets/Hero-Left-Top.jpg";
import image2 from "../../assets/Hero-Right-Big.jpg";
import image3 from "../../assets/Hero-Right-Top.jpg";
import image4 from "../../assets/News-Letter-Top.jpg";
import image5 from "../../assets/about-04.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sideImages = [image1, image2, image3, image4, image5];

const Hero = () => {
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
    <div className="relative w-[100%] h-[120vh] md:h-[100vh] bg-white">
      {/* center text */}
      <div className="absolute w-[100%] md:max-w-[500px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <p className="text-[#f00] text-[17px] md:text-[22px] mb-5">
          Travel Experiences!
        </p>
        <h1 className="bg-black   mx-auto  text-white text-[60px] md:text-[100px] md:px-10 h-fit md:w-fit  mb-6 font-extrabold">
          Sport
        </h1>
        <p className="mb-5 text-xl text-[12px] md:text-[15px] text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          placeat <br /> ipsa sint explicabo sequi id.
        </p>
        <button>More Info</button>
      </div>

      {/* big left img & big top */}
      <div className="absolute top-0 w-full h-[180px]  md:top-[50px] md:left-[20px] md:w-[300px] md:h-[500px]">
        <Slider {...settings}>
          {sideImages.map((images) => {
            return (
              <img
                src={images}
                className="w-[100%] h-[480px] object-cover"
                alt=""
              />
            );
          })}
        </Slider>
      </div>

      {/* left img 1 & big top */}
      <div className="hidden md:block absolute top-[80px] left-[250px] h-[250px] w-[200px]">
        <img
          src={imgLeftTop}
          className="w-[100%] h-[100%] object-cover object-right"
          alt=""
        />
      </div>
      {/* left img 2 & big top */}
      <div className="hidden md:block absolute top-[390px] left-[130px] h-[230px] w-[370px]">
        <img
          src={imgLeftBottom}
          className="w-[100%] h-[100%] object-cover object-bottom"
          alt=""
        />
      </div>

      {/* big right img big bottom img */}
      <div className="hero-big-right-image absolute block bottom-0 w-full h-[180px] md:top-[30px] md:right-[60px] md:w-[360px] md:h-[400px]">
        <Slider {...settings}>
          {sideImages.map((images) => {
            return (
              <img
                src={images}
                className="w-[100%] h-[480px] object-cover"
                alt=""
              />
            );
          })}
        </Slider>
      </div>

      {/* right img 1 & big top */}
      <div className="hidden md:block absolute  top-[190px] right-[20px] h-[350px] w-[230px]">
        <img
          src={imgRightBig}
          className="w-[100%] h-[100%] object-cover"
          alt=""
        />
      </div>
      {/* right img 2 & big top */}
      <div className="hidden md:block absolute  top-[390px] right-[310px] h-[190px] w-[190px]">
        <img
          src={imgRightBottomSmall}
          className="w-[100%] h-[100%] object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
