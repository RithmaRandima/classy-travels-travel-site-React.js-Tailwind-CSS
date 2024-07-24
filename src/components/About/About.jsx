import React from "react";
import BackgroundImage from "../../assets/AboutBackground.png";
import { Background, Parallax } from "react-parallax";
import AboutBox from "../AboutBox/AboutBox";
import img1 from "../../assets/about-01.jpg";
import img2 from "../../assets/about-02.jpg";
import img3 from "../../assets/about-03.jpg";
import img4 from "../../assets/about-04.jpg";

const About = () => {
  return (
    <div id="about" className="h-[165vh] md:h-[100vh] w-[100%] pt-10 pb-5 ">
      <Parallax
        className="relative w-full h-full flex flex-col "
        strength={1000}
      >
        <Background className="custom-bg w-[100vw] h-[165vh] md:h-[100vh] opacity-70">
          <img src={BackgroundImage} alt="fill murray" />
        </Background>
        <div className="flex flex-col items-center text-center md:items-start justify-center h-[55vh] md:text-left px-7 w-[100%] md:w-[700px] ">
          <p className="text-[#f00] text-[17px] md:text-[22px] mb-3">
            Dream Vacation Destination
          </p>
          <h1 className="font-bold text-[32px] md:text-[37px] mb-2">
            Plan the Trip of <br /> a Lifetime with Ease
          </h1>
          <p className="leading-7 text-[16px] md:text-[17px] mb-3">
            Whether you're looking for a romantic getaway, a family-friendly
            adventure, or a solo journey to explore the world, a travel agency
            can provide you with a custom-tailored itinerary that exceeds your
            expectations.
          </p>
          <button>More Info</button>
        </div>
        <div className="flex-1 w-full h-[100vh] md:h-[35vh]  pt-10">
          <div className="grid grid-cols-1 md:grid-cols-4 w-full px-5 md:place-items-center gap-5 md:gap-7  md:h-full">
            <AboutBox img={img1} title="Surfing" />
            <AboutBox img={img2} title="Surfing" />
            <AboutBox img={img3} title="Surfing" />
            <AboutBox img={img4} title="Surfing" />
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default About;
