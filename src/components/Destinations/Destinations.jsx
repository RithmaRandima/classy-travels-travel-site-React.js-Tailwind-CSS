import React from "react";
import DestinationBox from "./DestinationsBox/DestinationsBox";

import { popularDestinationsPackages } from "../../Data/DestinationData";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Destinations = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1600,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <div
      id="popular"
      className="flex flex-col w-[100%] h-[100%]  m-auto pb-20 "
    >
      <div className="py-10 px-2 pb-14 text-center">
        <p className="sub-title text-[#f00] text-[17px] md:text-[22px] mb-3">
          Clear Price
        </p>
        <h1 className="font-bold text-[32px] md:text-[37px] mb-2">
          Affordable Travel Packages
        </h1>
        <p className="text-gray-700 text-[14px] my-1 md:w-[830px] mx-auto tracking-[2px]">
          We believe that everyone deserves to experience their dream vacation
          without breaking the bank. That's why we offer a price section on our
          website that features a range of affordable travel
        </p>
      </div>
      {/* big screen */}
      <div className="hidden sm:grid w-[100%] mx-auto sm:grid-cols-2 md:grid-cols-4">
        {popularDestinationsPackages.map((data) => {
          return (
            <DestinationBox
              key={data.id}
              img={data.img}
              days={data.days}
              title={data.title}
              price={data.price}
              description={data.description}
              userCount={data.userCount}
            />
          );
        })}
      </div>

      {/* mobile */}
      <div className="block md:hidden w-[100%] mx-auto h-[100%]">
        <Slider {...settings}>
          {popularDestinationsPackages.map((data, i) => {
            return (
              <DestinationBox
                key={data.id}
                img={data.img}
                days={data.days}
                title={data.title}
                price={data.price}
                description={data.description}
                userCount={data.userCount}
              />
            );
          })}
        </Slider>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.6,
        }}
        className="py-1 px-2 pt-14 text-center"
      >
        <p className="text-gray-700 text-[14px] my-1 md:w-[830px] mx-auto tracking-[2px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit animi
          iure officiis quibusdam excepturi repellendus aperiam. Atque eligendi
          eos nemo molestiae enim dignissimos expedita repudiandae dicta culpa
          vero numquam, asperiores ipsa optio minima molestias. Error quisquam
          tenetur unde dolores illum.
        </p>
        <button className="bg-[#f00] p-2 px-5 mt-4 rounded-[50px] text-white text-[13px] uppercase">
          View All Tours
        </button>
      </motion.div>
    </div>
  );
};

export default Destinations;
