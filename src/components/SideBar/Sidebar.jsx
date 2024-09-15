import React, { useContext } from "react";
import img1 from "../../assets/big-left-1.jpeg";
import img2 from "../../assets/big-left-2.jpeg";
import img3 from "../../assets/big-left-4.jpeg";
import img4 from "../../assets/Hero-Left-Top.jpeg";
import img5 from "../../assets/Hero-Left-bottom.jpeg";
import img6 from "../../assets/blog-02.jpeg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { ShopContext } from "../../App";

const Sidebar = () => {
  const { setNavStatus, sideBar, setSideBar } = useContext(ShopContext);

  return (
    <div
      className={
        sideBar === true
          ? "absolute bg-black md:bg-whit  h-[100vh] w-[50%] md:w-[35%] top-0 left-0 duration-700"
          : "absolute bg-black md:bg-white h-[100vh] w-[50%] md:w-[35%] top-0 left-[-100%] duration-1000"
      }
    >
      {/* link section */}
      <div className="block md:hidden text-white h-[100%] font-sans">
        <ul className="flex flex-col justify-between items-center gap-[1px]">
          <li className="flex items-center hover:bg-[#f00] w-full h-[70px] justify-center">
            <a href="#home" className="text-[15px] font-bold">
              Home
            </a>
          </li>

          <li className="flex items-center hover:bg-[#f00] w-full h-[70px] justify-center">
            <a href="#about" className="text-[15px] font-bold">
              About
            </a>
          </li>

          <li className="flex items-center hover:bg-[#f00] w-full h-[70px] justify-center">
            <a href="#packages" className="text-[15px] font-bold">
              Packages
            </a>
          </li>

          <li className="flex items-center hover:bg-[#f00] w-full h-[70px] justify-center">
            <a href="#destination" className="text-[15px] font-bold">
              Destination
            </a>
          </li>

          <li className="flex items-center hover:bg-[#f00] w-full h-[70px] justify-center">
            <a href="#blog" className="text-[15px] font-bold">
              Blog
            </a>
          </li>

          <li className="flex items-center hover:bg-[#f00] w-full h-[70px] justify-center">
            <a href="#blog" className="text-[15px] font-bold">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="absolute bottom-0 w-full mx-auto ">
          <div className="relative  border-white w-fit mx-auto border-2 pb-1 pr-5 mb-10">
            <h1 className="text-[17px] font-bold">
              Classy
              <span className="font-extrabold text-[20px] text-[#f00]">
                Fit
              </span>{" "}
            </h1>
            <p className="absolute text-[10px] bottom-[-10px] right-[-10px] bg-white text-black px-1">
              sport Experience
            </p>
          </div>

          <div className="my-2 mb-5">
            <h1 className="font-bold text-[19px]">Follow Us</h1>
            <div className="flex justify-between items-center mt-3 w-[50%] mx-auto">
              <FaFacebook className="text-[20px] text-[#f00] hover:scale-110 cursor-pointer duration-200" />
              <FaTwitter className="text-[20px] text-[#f00] hover:scale-110 cursor-pointer duration-200" />
              <FaLinkedin className="text-[20px] text-[#f00] hover:scale-110 cursor-pointer duration-200" />
              <FaInstagram className="text-[20px] text-[#f00] hover:scale-110 cursor-pointer duration-200" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute w-[100%] h-[100%] p-4">
        {/* logo Section */}
        <div className="relative  border-black w-fit mx-auto border-2 pb-1 pr-5 mb-3">
          <h1 className="text-[17px] font-bold">
            Classy
            <span className="font-extrabold text-[20px] text-[#f00]">
              Fit
            </span>{" "}
          </h1>
          <p className="absolute text-[10px] bottom-[-10px] right-[-10px] bg-black text-white px-1">
            sport Experience
          </p>
        </div>
        <p className="w-[200px] mx-auto my-3 text-[17px]">
          Discover the World, one Full Adventure at a Time!
        </p>

        {/* img container */}
        <div className="w-[70%] mx-auto h-[180px] my-4 grid grid-cols-3 gap-[15px]">
          <img
            src={img1}
            className="w-[100%] h-[80px] object-cover rounded-[20px]"
            alt=""
          />

          <img
            src={img2}
            className="w-[100%] h-[80px] object-cover rounded-[20px]"
            alt=""
          />

          <img
            src={img3}
            className="w-[100%] h-[80px] object-cover rounded-[20px]"
            alt=""
          />

          <img
            src={img4}
            className="w-[100%] h-[80px] object-cover rounded-[20px]"
            alt=""
          />

          <img
            src={img5}
            className="w-[100%] h-[80px] object-cover rounded-[20px]"
            alt=""
          />

          <img
            src={img6}
            className="w-[100%] h-[80px] object-cover rounded-[20px]"
            alt=""
          />
        </div>
        {/* details */}
        <div className="text-left w-[70%] mx-auto font-sans">
          <div className="my-3">
            <h1 className="font-bold text-[19px]">Email</h1>
            <p className="text-[13px]">info@travel.com</p>
          </div>

          <div className="my-3">
            <h1 className="font-bold text-[19px]">Phone</h1>
            <p className="text-[13px]">Travel Agency + 1 473 483 384</p>
            <p className="text-[13px]">info insurance + 1 474 499 384</p>
          </div>

          <div className="my-2">
            <h1 className="font-bold text-[19px]">Follow Us</h1>
            <div className="flex justify-between items-center mt-3 w-[50%]">
              <FaFacebook className="text-[20px] text-[#f00] hover:scale-110 cursor-pointer duration-200" />
              <FaTwitter className="text-[20px] text-[#f00] hover:scale-110 cursor-pointer duration-200" />
              <FaLinkedin className="text-[20px] text-[#f00] hover:scale-110 cursor-pointer duration-200" />
              <FaInstagram className="text-[20px] text-[#f00] hover:scale-110 cursor-pointer duration-200" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute top-[20px] right-[20px] cursor-pointer hover:text-[#f00]"
        onClick={() => {
          setSideBar(false);
          setNavStatus("home");
        }}
      >
        <FaTimes className="text-[20px]" />
      </div>
    </div>
  );
};

export default Sidebar;
