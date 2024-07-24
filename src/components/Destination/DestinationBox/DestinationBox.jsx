import React from "react";
import "./DestinationBox.css";

const DestinationBox = (props) => {
  return (
    <div className="destination-box relative w-full bg-red-400 h-[320px] md:h-[400px] rounded-[20px] overflow-hidden">
      <div className="absolute w-[100%] h-[100%] bg-purple-500">
        <img
          src={props.img}
          className="w-[100%] h-[100%] object-cover"
          alt=""
        />
      </div>
      <div className="absolute w-[100%] h-[100%] bg-gradient-to-t from-black/90 to-transparent"></div>
      <div className=" destination-box-info absolute left-[50%] top-[65%]  translate-x-[-50%] w-full">
        <h1 className="text-[20px] text-white font-bold mb-3">{props.title}</h1>
        <p className="mb-3 text-white w-[70%] mx-auto">{props.desc}</p>
        <button className="hidden text-[10px]">All Packages</button>
      </div>
    </div>
  );
};

export default DestinationBox;
