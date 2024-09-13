import React from "react";
import BackgroundImage from "../../assets/package-box-1.jpeg";
import { Background, Parallax } from "react-parallax";
import PackageBox from "./PackageBox/PackageBox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { packagesData } from "../../Data/PackageData";

const Package = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1600,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,

          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div id="destination" className=" h-[94vh] md:h-[145vh]  w-[100%] ">
      <Parallax
        className="relative w-full h-[94vh] md:h-[145vh] flex flex-col "
        strength={300}
        blur={100}
      >
        <Background className="custom-bg w-[100vw] h-[95vh] bg-black md:h-[145vh] blur-[0px]">
          <img
            src={BackgroundImage}
            className="h-[95vh] md:h-[150vh] w-[100%] object-cover"
            alt="fill murray"
          />
        </Background>

        <div className="flex flex-col items-center text-center md:items-start justify-center h-[40vh] md:h-[55vh] md:text-left px-7 w-[100%] md:w-[700px] text-white z-10">
          <p className="sub-title text-[#f00] text-[17px] md:text-[22px] mb-3">
            Next Adventure
          </p>
          <h1 className="font-bold text-[32px] md:text-[37px] mb-2">
            Travel Destinations <br /> Available Worldwide
          </h1>
          <p className="leading-7 text-[16px] md:text-[17px] mb-3">
            We have compiled a list of top destinations across the globe,
            scoured the world for the most alluring and fascinating places to
            visit. From the beautiful beaches of the Caribbean to the majestic
            mountains of Europe and the vibrant cities of Asia, our destination
            list has something for everyone.
          </p>
        </div>
        <div className="flex-1 w-full h-[235vh] md:h-[80vh] pt-[20px]">
          <div className="w-[98%] mx-auto mt-[10px] h-[100%]">
            <Slider {...settings}>
              {packagesData.map((data) => {
                return (
                  <PackageBox
                    key={data.id}
                    img={data.img}
                    city={data.city}
                    desc={data.desc}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Package;
