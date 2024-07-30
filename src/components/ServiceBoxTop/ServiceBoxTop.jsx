import React from "react";
import "./ServiceBoxTop.css";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ServiceBoxTop = (props) => {
  return (
    <div className="service-box-top relative w-[100%] h-[130px] md:h-[130px]  hover:scale-110 ">
      <div className="absolute w-[100%] h-[100%]">
        <img
          src={props.img}
          className="w-[100%] h-[100%] object-cover"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="about-box-overlay w-[100%] h-[100%] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] flex flex-col justify-center">
        <h1 className="text-2xl text-white font-bold ">{props.title}</h1>
        <p className="about-box-description hidden text-[9px] text-white w-[80%] mx-auto my-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          pariatur!
        </p>
        <button className="about-box-btn hidden px-3 py-1 rounded-none  text-[9px]  mx-auto items-center">
          See More <FaArrowRight className="font-extrabold ml-1" />
        </button>
      </div>
    </div>
  );
};

export default ServiceBoxTop;
