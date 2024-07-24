import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-[100%] text-white  bg-[#050505]">
      <div className="grid grid-cols-1 md:grid-cols-4 pb-9 pt-3">
        <div className=" w[100%] h-[100%] text-center p-6">
          {/* logo Section */}
          <div className="relative w-fit mx-auto border-white border-2 pb-1 pl-1 pr-5 mb-10">
            <h1 className="text-[15px] font-bold">
              Classy
              <span className="font-extrabold text-[20px]  text-[#f00]">
                Fit
              </span>{" "}
            </h1>
            <p className="absolute text-[10px] bottom-[-10px] right-[-10px] bg-white px-1 text-black">
              sport Experience
            </p>
          </div>
          <p className="w-[240px] mx-auto mb-5 text-[15px] text-gray-400">
            classy<span className="text-[#f00] font-bold">Fit</span>, founded in
            2022, is dedicated to all those who love to wander far and wide.
          </p>
          <p className="w-[200px] mx-auto text-[15px] text-gray-400">
            We'd like to invite you on a culinary adventure, where you’ll
            explore undiscovered gourmet experiences.
          </p>
        </div>
        {/*col-2  */}
        <div className=" w[100%] h-[100%] text-center p-6">
          <h1 className="font-bold mb-5 text-[18px]">VISIT</h1>
          <p className="w-[180px] mx-auto text-[14px] text-gray-400">
            317 Pacific C Hwy Huntington, CA 92648
          </p>

          <h1 className="font-bold my-5 text-[18px]">TALK</h1>
          <p className="w-[180px] mx-auto text-[14px] text-gray-400">
            123,456-7
          </p>

          <h1 className="font-bold my-5 text-[18px]">WRITE</h1>
          <p className="w-[180px] mx-auto text-[14px] text-gray-400">
            infi@travel.com
          </p>
        </div>

        {/* col-3 */}
        <div className="text-center">
          <h1 className="font-bold my-5 text-[18px]">RESERVATIONS</h1>
          <button className="border border-white bg-transparent text-white py-2 px-6 mb-5">
            BOOK YOUR Ticket
          </button>
          <h1 className="font-bold my-5 text-[18px]">Hours</h1>
          <p className="mx-auto text-[14px] text-gray-400">
            MONDAY thru FRIDAY
          </p>
          <p className="mx-auto text-[14px] text-gray-400 mb-5">11am - 9pm</p>
          <p className="mx-auto text-[14px] text-gray-400">SATURDAY/SUNDAY</p>
          <p className="mx-auto text-[14px] text-gray-400"> 10am - 11pm</p>
        </div>
        {/* col-4 */}
        <div className="text-center">
          <h1 className="font-bold my-5 text-[18px]">ABOUT</h1>
          <p className="mx-auto text-[14px] text-gray-400">FAQ</p>
          <p className="w-[50%] mx-auto text-[14px] text-gray-400 mb-7">
            Reservation Policy Privacy Policy Health & Safety
          </p>
          <h1 className="font-bold my-5 text-[18px]">FOLLOW ALONG</h1>
          <div className="flex gap-6 items-center justify-center">
            <p>
              <FaInstagram size={24} />
            </p>
            <p>
              <FaFacebook size={24} />
            </p>
            <p>
              <FaTwitter size={24} />
            </p>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="flex flex-col md:flex-row md:justify-between px-10 justify-center items-center py-4 gap-7 pb-[17px]  bg-[#000000] text-white">
        <p className="text-[10px] md:text-[8px] tracking-[4px]">
          © 2024 Classy<span className="text-red-500 font-bold">Fit</span> ALL
          RIGHTS RESERVED.
        </p>
        {/* logo Section */}
        <div className="relative  border-white border-2 pl-1  pb-1 pr-5">
          <h1 className="text-[15px] font-bold">
            Classy
            <span className="font-extrabold text-[18px] text-[#f00]">
              Fit
            </span>{" "}
          </h1>
          <p className="absolute text-[8px] bottom-[-5px] right-[-10px] bg-white text-black">
            sport Experience
          </p>
        </div>
        <p className="text-[10px] font-bold tracking-[4px]">
          FLY ABOVE THE WORLD
        </p>
      </div>
    </div>
  );
};

export default Footer;
