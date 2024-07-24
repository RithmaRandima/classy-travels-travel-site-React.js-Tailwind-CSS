import React from "react";

function OfferBox(props) {
  return (
    <div className="offer-box overflow-hidden w-[100%] h-[400px] md:h-[330px] relative">
      <img
        src={props.img}
        className="w-[100%] h-[100%] object-cover duration-500"
        alt={props.title}
      />
      {/* overlay */}
      <div className="offer-box-overlay bg-[#000]/50 w-[100%] absolute left-0 bottom-0 right-0 flex justify-between p-4  align-middle text-white duration-300">
        <div>
          <h5 className="text-[13px] italic my-1 uppercase">{props.country}</h5>
          <h1 className="font-bold text-[20px] capitalize">{props.place}</h1>
        </div>

        <div className="text-right">
          <h5 className="my-2 text-[14px] font-semibold uppercase">
            {props.day_count}
          </h5>
          <h1 className="font-bold text-[18px]">
            <span className="text-[20px] font-bold">$</span>
            {props.price}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default OfferBox;
