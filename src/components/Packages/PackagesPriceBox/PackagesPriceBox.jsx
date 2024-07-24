import React from "react";

function PackagesPriceBox(props) {
  return (
    <div
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
      className="w-[100%] mx-auto text-center md:w-[100%] h-[100%] shadow-2xl shadow-black/20 bg-white p-6 py-[40px] rounded-[25px] hover:translate-y-[-7px] duration-300"
    >
      <p className="font-extrabold text-[20px] mb-5 font-sans">
        {props.subheading}
      </p>
      <h1 className="text-[50px] font-extrabold">
        {props.price} <span className="font-normal text-[25px]">/ Day</span>
      </h1>
      <div>
        <p className="py-2 font-normal  text-[18px]">{props.detail_01}</p>
        <p className="py-2 font-normal text-[18px]">{props.detail_02}</p>
        <p className="py-2 font-normal  text-[18px]">{props.detail_03}</p>
        <p className="py-2 font-normal text-[18px]">{props.detail_04}</p>
        <p className="py-2 font-normal text-[18px]">{props.detail_05}</p>
      </div>
      <button
        style={{
          backgroundColor: `${props.bgColorBtn}`,
          color: `${props.color}`,
        }}
        className="py-3 px-5 text-[15px] mt-5"
      >
        {props.btnText}
      </button>
    </div>
  );
}

export default PackagesPriceBox;
