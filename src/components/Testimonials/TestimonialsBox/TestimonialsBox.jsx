import React from "react";
import { FaStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { RiDoubleQuotesL } from "react-icons/ri";

const TestimonialsBox = (props) => {
  return (
    <div className="w-[90%] md:w-[99%] mx-auto h-[350px] m-2 mt-[55px] relative bg-gradient-to-t from-[#000]/80 to-black/50 p-4 py-5 text-white">
      {/* userImg */}
      <div className="w-[70px] h-[70px] bg-red-400 rounded-full overflow-hidden mx-auto shadow-sm shadow-white">
        <img
          src={props.img}
          alt=""
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      {/* title */}
      <h1 className="text-[17px] md:text-[20px] font-bold mt-3 cursor-pointer hover:text-[#f00] text-left">
        {props.title}
      </h1>
      <div className="hidden md:flex w-[30%] text-[10px] items-center justify-between text-[#f00] mb-2 mx-auto md:ml-1 mt-2">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      {/* message */}
      <RiDoubleQuotesL className="text-[23px] mt-4" />
      <p className="font-[200] text-[13px] mb-1 text-left ">{props.message}</p>

      <div className="flex items-center justify-between mt-5 gap-5">
        <p className="text-[#f00] text-[12px] md:text-[14px] tracking-[2px]">
          {props.name}
        </p>
        <p className="text-[15px] flex  items-center ">
          <IoLocationSharp className="text-[18px] text-[#f00] mr-2" />{" "}
          {props.city}
        </p>
      </div>
    </div>
  );
};

export default TestimonialsBox;
