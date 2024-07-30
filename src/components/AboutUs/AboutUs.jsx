import React from "react";
import imgBig from "../../assets/big-left-3.jpg";
import imgTop from "../../assets/big-right-1.jpg";
import imgBottom from "../../assets/big-left-1.jpg";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <div
      id="about"
      className="overflow-hidden max-w-[1140px] m-auto w-full  grid grid-cols-1 md:grid-cols-2 mb-[50px] text-center md:text-left mt-10"
    >
      <div className="p-4 py-10">
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="text-[#f00] sub-title text-[17px] md:text-[22px] mb-3"
        >
          Dream Vacation Destination
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="font-bold text-[32px] md:text-[37px] mb-2"
        >
          Discover Your Next <br /> Adventure
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.3,
          }}
          className="text-gray-700 text-[20px]"
        >
          Whether you're planning a romantic honeymoon or a family vacation, our
          price section has got you covered. So, start browsing today and find
          the perfect vacation package at a price that won't leave you feeling
          guilty.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.3,
          }}
          className="my-4 text-[17px] "
        >
          Manager: <span className="text-red-500">Rithma Randima</span>
        </motion.p>
        <motion.button
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.3,
          }}
        >
          More Info
        </motion.button>
      </div>
      <div className="flex flex-row gap-2 h-[500px]">
        <div className="hidden md:flex flex-col gap-4">
          <div className="w-[100%]  h-[100%] relative md:rounded-t-full overflow-hidden">
            <img
              src={imgTop}
              className="w-[100%] h-[100%] object-cover "
              alt=""
              loading="lazy"
            />
          </div>

          <div className="w-full h-[100%]">
            <img
              src={imgBottom}
              className="w-[100%] h-[100%] md:rounded-ee-full object-cover "
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <div className="md:flex md:w-[330px] md:h-[100%] overflow-hidden md:rounded-b-full ">
            <img
              src={imgBig}
              className="w-[100%] h-[100%] object-cover"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
