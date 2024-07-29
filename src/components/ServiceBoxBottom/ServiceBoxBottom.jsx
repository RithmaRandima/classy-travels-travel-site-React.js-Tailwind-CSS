import React from "react";
import "./ServiceBoxBottom.css";
import { CiFaceSmile, CiUser } from "react-icons/ci";
import { MdMarkEmailRead, MdOutlineArrowOutward } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";
import { FaClock, FaLocationDot } from "react-icons/fa6";
import { GiTreasureMap } from "react-icons/gi";

function PopularServiceBox(props) {
  return (
    <div className="service-box-bottom w-[85%] md:w-[95%] h-[100%] shadow-2xl shadow-black/20  hover:scale-105 duration-300 m-2 mb-5 mx-auto relative">
      <img
        src={props.img}
        className="h-[270px]  w-[100%]  object-cover"
        alt={props.title}
      />

      {/* middle bar */}
      <div className="w-[95%] text-[#f00] bg-white shadow-lg mx-auto flex items-center justify-between px-5 py-2 absolute left-[50%] translate-x-[-50%] top-[250px]">
        <div className="flex items-center">
          <FaClock size={18} />
          <p className="ml-5 text-gray-400">10 Days</p>
        </div>

        <div className="flex items-center">
          <MdMarkEmailRead size={18} className="mr-5" />
          <GiTreasureMap size={18} />
        </div>
      </div>

      {/* Bottom Info */}
      <div className="mt-3 p-4">
        <div className="pb-3 border-b-[1px] mb-3">
          <p className="text-[20px] text-left font-bold mb-2">Bangkok</p>
          <div className="flex items-center">
            <FaLocationDot size={18} className="text-[#f00] " />
            <p className="ml-4 text-gray-400 text-[15px]">Thailand</p>
          </div>
        </div>

        <div className="pb-3 border-b-[1px] mb-3 text-left">
          <p className="text-[12px] text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            similique mollitia? Numquam Quae natus commodi architecto doloribus
          </p>
        </div>

        <div className="flex items-center justify-between">
          <button className="rounded-none py-1 text-[10px] tracking-[2px]">
            Details
          </button>
          <div className="flex flex-col items-end">
            <p className="text-gray-600 capitalize">from</p>
            <p className="text-[22px] font-extrabold">
              $ 98{" "}
              <span className="old-price line-through font-light ml-2 text-[17px]">
                $112
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularServiceBox;
