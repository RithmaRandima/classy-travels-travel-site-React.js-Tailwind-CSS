import React from "react";
import DestinationBox from "../DestinationBox/DestinationBox";

import { popularDestinationsData } from "../../Data/DestinationData";
import { motion } from "framer-motion";

const Destinations = () => {
  return (
    <div
      id="popular"
      className="flex flex-col w-[100%] h-[100%]  m-auto pb-20 "
    >
      <div className="py-10 px-2 pb-14 text-center">
        <h1 className="text-3xl md:text-5xl mb-6">Most Popular Tours</h1>
        <p className="text-gray-700 text-[19px] my-1 md:w-[830px] mx-auto tracking-[2px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sint
          nam aliquam adipisci ipsum harum id maiores nostrum at architecto.
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className=" w-[100%] mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {popularDestinationsData.map((data) => {
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
        <p className="text-gray-700 text-[19px] my-1 md:w-[830px] mx-auto tracking-[2px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit animi
          iure officiis quibusdam excepturi repellendus aperiam. Atque eligendi
          eos nemo molestiae enim dignissimos expedita repudiandae dicta culpa
          vero numquam, asperiores ipsa optio minima molestias. Error quisquam
          tenetur unde dolores illum.
        </p>
        <button className="bg-[#00ffee] p-2 px-5 mt-4 rounded-[50px] text-white text-[13px] uppercase">
          View All Tours
        </button>
      </motion.div>
    </div>
  );
};

export default Destinations;
