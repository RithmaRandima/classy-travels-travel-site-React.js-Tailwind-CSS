import React from "react";

const TopBar = () => {
  return (
    <div className="hidden md:flex items-center justify-between w-full h-[50px] bg-black text-white px-7">
      <div className="flex h-[100%]">
        <div className="flex items-center h-[100%]">
          <p className="text-[13px]">Contact us +1 453 546 5434 </p>
          <p className="text-red-600 text-[60px] mx-2"> &#183;</p>
        </div>
        <div className="flex items-center h-[100%]">
          <p className="text-[13px]"> Travel Itinerary </p>
          <p className="text-red-600 text-[60px]  mx-2"> &#183;</p>
        </div>
        <div className="flex items-center h-[100%]">
          <p className="text-[13px]">Quote: info@travel.com </p>
        </div>
      </div>

      <div className="flex h-[100%]">
        <div className="flex items-center h-[100%]">
          <p className="text-[13px]">Twitter </p>
          <p className="text-red-600 text-[60px] mx-2"> &#183;</p>
        </div>
        <div className="flex items-center h-[100%]">
          <p className="text-[13px]"> Facebook </p>
          <p className="text-red-600 text-[60px]  mx-2"> &#183;</p>
        </div>
        <div className="flex items-center h-[100%]">
          <p className="text-[13px]">Instagram </p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
