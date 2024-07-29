import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineBars } from "react-icons/ai";
import { motion } from "framer-motion";

const DestinationPicker = () => {
  return (
    <div className="h-[100%] md:h-[80vh] w-[100%] bg-gray-100 ">
      <div className="flex flex-col items-center text-center justify-center h-[40vh] px-7 w-[100%]">
        <p className="text-[#f00] text-[17px] md:text-[22px] mb-3">
          Choose your Trip
        </p>
        <h1 className="font-bold text-[32px] md:text-[37px] mb-2">
          Start your Vacation Now
        </h1>
        <p className="leading-7 text-[16px] md:text-[17px] mb-3 md:w-[70%]">
          Looking for your dream vacation destination but don't know where to
          start? With the help of experienced and knowledgeable travel agents,
          you can plan the trip of a lifetime with ease.
        </p>
      </div>

      <div className="flex items-center justify-center  w-full h-[100%] md:h-[40vh] md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.6,
          }}
          className="flex flex-col md:flex-row items-center justify-between w-full gap-5 bg-white h-[100%] md:h-[130px] p-10 md:px-10 rounded-[20px]"
        >
          <div className="flex items-center w-full font-sans">
            <div>
              <FaSearch className="text-red-700 text-[35px]" />
            </div>
            <div className="text-left ml-5">
              <h1 className="text-[22px] font-extrabold">Place</h1>
              <input
                type="text"
                className="w-[100%] outline-0 p-1 placeholder-black/50 px-4"
                placeholder="insert Keyword"
              />
            </div>
          </div>

          <div className="flex items-center  w-full font-sans">
            <div>
              <FaLocationDot className="text-red-700 text-[35px]" />
            </div>
            <div className="text-left ml-5">
              <h1 className="text-[22px] font-extrabold">Destinations</h1>
              <input
                type="text"
                className="w-[100%] outline-0 p-1 placeholder-black/50 px-4"
                placeholder="insert Keyword"
              />
            </div>
          </div>

          <div className="flex items-center  w-full font-sans">
            <div>
              <AiOutlineBars className="text-red-700 text-[35px]" />
            </div>
            <div className="text-left ml-5">
              <h1 className="text-[22px] font-extrabold">Typologies</h1>
              <input
                type="text"
                className="w-[100%] outline-0 p-1 placeholder-black/50 px-4"
                placeholder="insert Keyword"
              />
            </div>
          </div>

          <div className="flex items-center  w-full font-sans md:w-[220px] h-[80px]">
            <button className="w-full md:w-[160px] bg-red-700 h-[60px] md:h-[50px] font-extrabold uppercase md:text-[16px] text-[18px]">
              Search
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DestinationPicker;
