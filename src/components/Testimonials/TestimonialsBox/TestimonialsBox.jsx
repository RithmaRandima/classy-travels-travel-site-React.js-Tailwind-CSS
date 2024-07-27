import React from "react";

const TestimonialsBox = (props) => {
  return (
    <div className="w-[90%] md:w-[99%] mx-auto h-[350px] m-2 text-white flex items-center justify-start py-7 px-7 bg-red-500">
      <div className="text-left">
        <h1 className="text-[20px] font-bold mb-5">{props.message}</h1>

        <div className="flex items-center">
          <div className="w-[60px] h-[60px] bg-black rounded-full">
            <img
              src={props.image}
              alt=""
              className="w-[100%] h-[100%] object-cover rounded-full"
            />
          </div>
          <div className=" ml-4">
            <h1 className="font-extrabold">{props.name}</h1>
            <h5 className="text-[#f00]">{props.city}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsBox;
