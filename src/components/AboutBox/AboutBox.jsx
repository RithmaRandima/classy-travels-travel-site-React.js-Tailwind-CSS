import React from "react";

const AboutBox = (props) => {
  return (
    <div className="relative w-full bg-red-400 h-[130px] md:h-[130px] ">
      <div className="absolute w-[100%] h-[100%]">
        <img
          src={props.img}
          className="w-[100%] h-[100%] object-cover"
          alt=""
        />
      </div>
      <div className="absolute left-[50px] top-[50%] translate-y-[-50%] md:right-[10px]">
        <h1 className="text-2xl text-white font-bold ">{props.title}</h1>
      </div>
    </div>
  );
};

export default AboutBox;
