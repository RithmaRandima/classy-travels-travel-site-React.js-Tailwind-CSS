import React from "react";
import "./DestinationsBox.css";
import { CiFaceSmile, CiUser } from "react-icons/ci";
import { MdOutlineArrowOutward } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";

function DestinationBox(props) {
  return (
    <div className="popular-destination-box w-[85%] md:w-[95%] h-[370px] shadow-2xl shadow-black/20  hover:scale-105 duration-300 m-2 mx-auto relative">
      <img
        src={props.img}
        className="h-[370px]  w-[100%]  object-cover"
        alt={props.title}
      />
      <div className="popular-destination-box px-4 pt-7 absolute w-[100%] h-fit bg-gradient-to-t from-[#000] to-black/10 bottom-0 pb-3 text-center  flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center py-2">
            <h1 className="text-[30px] md:text-[20px] font-bold text-white text-left">
              {props.title}
            </h1>
            <p className=" text-[#f00] font-extrabold text-[22px]">
              ${props.price}
            </p>
          </div>
          <p className="flex items-center text-[15px] text-white ">
            <CiFaceSmile className="mr-3 text-[20px]" /> 9.3 Superb
          </p>
        </div>

        <div className="hidden popular-destination-box-bottom ">
          <p className="text-white w-[98%] my-3 font-normal text-[14px]">
            {props.description}
          </p>

          <button className="bg-[#f00] uppercase text-[12px] md:text-[9px] px-3 py-1 flex mx-auto justify-between items-center rounded-full hover:bg-black mt-4">
            See More <MdOutlineArrowOutward size={16} className="ml-1" />
          </button>

          <div className="flex items-center justify-between my-5 mt-16 md:mt-10 ">
            <div className="flex items-center justify-between w-[100%] ">
              <div className="text-[12px] flex text-white">
                <p className="flex items-center mr-3 text-[16px] md:text-[12px]">
                  <VscDebugRestart size={27} className="mr-1 p-1 text-[#f00]" />
                  {props.days}
                </p>
                <p className="flex items-center text-[16px] md:text-[12px]">
                  <CiUser size={27} className="mr-1 p-1 text-[#f00]" />
                  {props.userCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationBox;
