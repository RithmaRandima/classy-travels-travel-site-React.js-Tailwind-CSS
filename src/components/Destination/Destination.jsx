import React from "react";
import BackgroundImage from "../../assets/Destination-Background.jpg";
import { Background, Parallax } from "react-parallax";
import DestinationBox from "./DestinationBox/DestinationBox";
import { destinationsData } from "../../Data/DestinationData";

const Destination = () => {
  return (
    <div id="destination" className=" h-[300vh] md:h-[145vh]  w-[100%] ">
      <Parallax
        className="relative w-full h-[300vh] md:h-[145vh] flex flex-col "
        strength={1000}
        blur={100}
      >
        <Background className="custom-bg w-[100vw] h-[300vh] md:h-[100vh] blur-[0px]">
          <img src={BackgroundImage} alt="fill murray h-[100%]" />
        </Background>

        <div className="flex flex-col items-center text-center md:items-start justify-center h-[55vh] md:text-left px-7 w-[100%] md:w-[700px] text-white z-10">
          <p className="text-[#f00] text-[17px] md:text-[22px] mb-3">
            Next Adventure
          </p>
          <h1 className="font-bold text-[32px] md:text-[37px] mb-2">
            Travel Destinations <br /> Available Worldwide
          </h1>
          <p className="leading-7 text-[16px] md:text-[17px] mb-3">
            We have compiled a list of top destinations across the globe,
            scoured the world for the most alluring and fascinating places to
            visit. From the beautiful beaches of the Caribbean to the majestic
            mountains of Europe and the vibrant cities of Asia, our destination
            list has something for everyone.
          </p>
        </div>
        <div className="flex-1 w-full h-[235vh] md:h-[80vh] pt-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-4 w-full px-5 md:place-items-center gap-5 md:gap-7  md:h-full ">
            {destinationsData.map((data) => {
              return (
                <DestinationBox
                  key={data.id}
                  img={data.img}
                  title={data.title}
                  desc={data.desc}
                />
              );
            })}
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Destination;
