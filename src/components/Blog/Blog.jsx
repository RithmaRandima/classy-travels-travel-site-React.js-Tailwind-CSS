import React from "react";
import BlogBox from "./BlogBox/BlogBox";
import "./BlogBox/BlogBox.css";
import img1 from "../../assets/blog-01.jpeg";
import { blogData } from "../../Data/BlogData";

const Blog = () => {
  return (
    <div id="blog" className="h-[100%] w-[100%] py-3">
      <div className="flex flex-col items-center justify-center h-[50vh] px-7 w-[100%]">
        <p className="sub-title text-[17px] md:text-[22px] mb-3">
          Roaming Tales
        </p>
        <h1 className="font-bold text-[32px] md:text-[37px] mb-2">
          Travel Blog
        </h1>
        <p className="leading-7 text-[16px] md:text-[17px] text-gray-500 font-[400] mb-3 md:w-[70%]">
          We share our experiences, tips and travel stories to inspire and guide
          our readers in their own wanderlust adventures. From hidden gems to
          popular destinations, we showcase the beauty and diversity of the
          world, and promote responsible and sustainable travel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  w-full h-[100%]">
        <div className="blog-box w-full h-[100%] p-2 py-6 font-sans">
          <div className="blog-box-img-container w-[90%] mx-auto text-left">
            <div className="w-[100%]  overflow-hidden  h-[300px]">
              <img
                src={img1}
                alt=""
                className="w-[100%] object-cover h-[100%]"
              />
            </div>
            <div className="bg-black w-fit text-white my-4 p-1 px-5 rounded-lg hover:scale-75 duration-500">
              April 7, 2024
            </div>
            <h1 className="my-3 font-extrabold text-[22px]">
              Plan the Perfect Vacation
            </h1>
            <p className="font-[200] text-[18px] my-4">
              Planning a vacation can be overwhelming, but this post offers a
              step-by-step guide to help readers create a comprehensive travel
              itinerary. From choosing a destination to booking accommodations
              and activities, readers will learn how to plan a stress-free and
              enjoyable trip.
            </p>
            <button className="hover:scale-110 duration-500">Read More</button>
          </div>
        </div>

        {/* blog box Section*/}
        <div className="w-full h-[100%] p-2 py-6 ">
          {/* BlogBox Container */}
          <div className="flex flex-col justify-between gap-2 md:gap-5">
            {blogData.map((data) => {
              return (
                <BlogBox
                  img={data.img}
                  date={data.date}
                  title={data.title}
                  description={data.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
