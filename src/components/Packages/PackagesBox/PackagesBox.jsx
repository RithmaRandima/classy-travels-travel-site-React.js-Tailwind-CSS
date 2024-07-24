import React from "react";
import { FaStar, FaStarHalfAlt, FaRegMap } from "react-icons/fa";

function PackagesBox(props) {
  return (
    <div className=" w-[100%] h-[100%] shadow-2xl shadow-black/20  hover:translate-y-[-7px] duration-300 bg-white/90">
      <img
        src={props.img}
        className="h-[280px]  w-[100%]  object-cover"
        alt={props.name}
      />
      <div className="px-4 pt-1">
        <div className="flex justify-between items-center py-2">
          <h1 className="text-[18px] font-bold">{props.name}</h1>
          <p className=" text-[#ff0000] font-semibold">{props.price}</p>
        </div>
        <div className="flex gap-3 text-[#ff00008d] ">
          <FaStar size={12} />
          <FaStar size={12} />
          <FaStar size={12} />
          <FaStar size={12} />
          <FaStarHalfAlt size={12} />
        </div>

        <p className="text-gray-500 w-[98%] my-5 font-normal text-[12px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit natus
        </p>

        <h5 className="mb-3 text-[12px] font-bold">2 days 3 nights</h5>
        <hr />

        <div className="flex items-center justify-between my-5">
          <section className="flex flex-col gap-1 text-[12px]">
            <p>
              <FaRegMap size={10} />
              {props.city}
            </p>
          </section>
          <p className="bg-black w-[60px] text-center text-white text-[12px] font-semibold">
            Discover
          </p>
        </div>
      </div>
    </div>
  );
}

export default PackagesBox;
