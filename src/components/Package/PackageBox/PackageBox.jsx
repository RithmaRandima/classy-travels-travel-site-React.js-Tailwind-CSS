import React from "react";
import "./PackageBox.css";

const PackageBox = (props) => {
  return (
    <div className="package-box w-[85%] md:w-[95%] h-[400px] shadow-2xl shadow-black/20  hover:scale-105 duration-300 m-2 mx-auto relative">
      <div className="absolute w-[100%] h-[100%] ">
        <img
          src={props.img}
          className="w-[100%] h-[100%] object-cover"
          alt=""
        />
      </div>
      <div className="absolute w-[100%] h-[100%] bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className=" destination-box-info absolute left-[50%] top-[65%]  translate-x-[-50%] w-full">
        <h1 className="text-[20px] text-white font-bold mb-3">{props.city}</h1>
        <p className="mb-3 text-white w-[70%] mx-auto">{props.desc}</p>
        <button className="hidden text-[10px] cursor-pointer">
          All Packages
        </button>
      </div>
    </div>
  );
};

export default PackageBox;
