import React from "react";
import imgBig from "../../assets/News-Letter.jpg";
import imgTop from "../../assets/News-Letter-Top.jpg";
import imgBottom from "../../assets/News-Letter-Bottom.jpg";
import { motion } from "framer-motion";

function AboutDetails() {
  return (
    <div
      id="about"
      className="overflow-hidden max-w-[1140px] m-auto w-full  grid grid-cols-1 md:grid-cols-2 mb-[50px] text-center md:text-left mt-20"
    >
      <div className="p-4 py-10">
        <p className="text-[#f00] text-[17px] md:text-[22px] mb-3">
          Dream Vacation Destination
        </p>
        <h1 className="font-bold text-[32px] md:text-[37px] mb-2">
          Discover Your Next <br /> Adventure
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.6,
          }}
          className="text-gray-700 text-[20px]"
        >
          Whether you're planning a romantic honeymoon or a family vacation, our
          price section has got you covered. So, start browsing today and find
          the perfect vacation package at a price that won't leave you feeling
          guilty.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
          className="mt-10 text-[17px]  mb-4"
        >
          Manager: <span className="text-red-500">Rithma Randima</span>
        </motion.p>
        <button>More Info</button>
      </div>
      <div className="flex flex-row gap-2 h-[500px]">
        <div className="hidden md:flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            className="w-[100%]  h-[100%] relative md:rounded-t-full overflow-hidden"
          >
            <img
              src={imgTop}
              className="w-[100%] h-[100%] object-cover "
              alt=""
            />
            <div className="absolute w-[100%] h-[100%] top-0 left-0 bg-gradient-to-b to-black/50 from-black/20 "></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            className="w-full h-[100%]"
          >
            <img
              src={imgBottom}
              className="w-[100%] h-[100%] md:rounded-ee-full object-cover "
              alt=""
            />
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.6,
            }}
            className="md:flex md:w-[330px] md:h-[100%] overflow-hidden md:rounded-b-full "
          >
            <img
              src={imgBig}
              className="w-[100%] h-[100%] object-cover"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutDetails;
