import React from "react";
import home_video from "../../assets/VideoSection.mp4";
import { FaPlayCircle } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const VideoSection = () => {
  return (
    <div className="h-[60vh] md:h-[80vh] w-[100%] mx-auto bg-black my-6 relative">
      <video
        autoPlay
        loop
        muted
        id="video"
        className="w-[100%] h-[60vh] md:h-[80vh] object-cover"
      >
        <source src={home_video} type="video/mp4" />
      </video>
      <div className="absolute w-[100%] h-[100%] bg-black/50 top-0 left-0 flex flex-col justify-center items-center text-white">
        <h1 className=" text-[40px] md:text-[80px] mb-3">
          Travel
          <span className="text-[#f00] ml-4 font-bold">
            <ReactTyped strings={["Itineraries"]} typeSpeed={490} loop />
          </span>
        </h1>
        <p className="w-[90%] font-[100] leading-6 md:w-[600px]">
          Looking for your dream vacation destination but don't know where to
          start? With the help of experienced and knowledgeable travel agents,
          you can plan the trip of a lifetime with ease.
        </p>

        <div className="mt-6">
          <FaPlayCircle className="text-[#f00] text-[55px]" />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
