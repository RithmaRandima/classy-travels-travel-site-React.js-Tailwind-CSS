import React, { useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "../SideBar/Sidebar";
import { ShopContext } from "../../App";

const Navbar = () => {
  const { navStatus, setNavStatus, sideBar, setSideBar } =
    useContext(ShopContext);

  return (
    <div className="sticky top-[0px] z-[100] flex justify-between items-center  w-full bg-white shadow-lg px-6 py-3">
      {/* link Items section */}
      <div className="hidden md:block">
        <ul className="flex">
          <li
            className="flex items-center"
            onClick={() => setNavStatus("home")}
          >
            <a
              href="#home"
              className={navStatus === "home" ? "text-[#f00]" : "text-black"}
            >
              Home{" "}
            </a>
            <span className="text-red-600 text-[60px]  mx-2"> &#183;</span>
          </li>

          <li
            className="flex items-center"
            onClick={() => setNavStatus("about")}
          >
            <a
              href="#about"
              className={navStatus === "about" ? "text-[#f00]" : "text-black"}
            >
              About
            </a>
            <span className="text-red-600 text-[60px]  mx-2"> &#183;</span>
          </li>

          <li
            className="flex items-center"
            onClick={() => setNavStatus("packages")}
          >
            <a
              href="#packages"
              className={
                navStatus === "packages" ? "text-[#f00]" : "text-black"
              }
            >
              Packages
            </a>
            <span className="text-red-600 text-[60px]  mx-2"> &#183;</span>
          </li>

          <li
            className="flex items-center"
            onClick={() => {
              setNavStatus("destination");
            }}
          >
            <a
              href="#home"
              className={
                navStatus === "destination" ? "text-[#f00]" : "text-black"
              }
            >
              Destination
            </a>
            <span className="text-red-600 text-[60px]  mx-2"> &#183;</span>
          </li>

          <li
            className="flex items-center"
            onClick={() => setNavStatus("blog")}
          >
            <a
              href="#blog"
              className={navStatus === "blog" ? "text-[#f00]" : "text-black"}
            >
              Blog
            </a>
            <span className="text-red-600 text-[60px]  mx-2"> &#183;</span>
          </li>

          <li
            className="flex items-center"
            onClick={() => {
              setNavStatus("contact");
              setSideBar(true);
            }}
          >
            <a
              href="#home"
              className={navStatus === "contact" ? "text-[#f00]" : "text-black"}
            >
              Contact
            </a>
            <span className="text-red-600 text-[60px]  mx-2"> &#183;</span>
          </li>
        </ul>
      </div>
      {/* logo Section */}
      <div className="relative  border-black border-2 pb-1 pr-5">
        <h1 className="text-[18px] font-bold">
          Classy
          <span className="font-extrabold text-[23px] text-[#f00]">
            Fit
          </span>{" "}
        </h1>
        <p className="absolute text-[11px] bottom-[-10px] right-[-10px] bg-black text-white px-1">
          sport Experience
        </p>
      </div>

      {/* social section */}
      <div className="flex items-center gap-4">
        <div
          className={sideBar === true ? " text-[#f00] cursor-pointer" : " "}
          onClick={() => setSideBar(!sideBar)}
        >
          {sideBar === true ? (
            <FaTimes className="text-[25px]" />
          ) : (
            <FaBars className="text-[25px]" />
          )}
        </div>

        <button className="hidden md:block">Search</button>
      </div>

      {/* sidebar */}

      <Sidebar
        sideBar={sideBar}
        setSideBar={setSideBar}
        setNavStatus={setNavStatus}
      />
    </div>
  );
};

export default Navbar;
