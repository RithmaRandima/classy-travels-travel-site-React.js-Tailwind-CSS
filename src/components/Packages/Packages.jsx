import React from "react";
import { packagesData } from "../../Data/PackageData";

import PackagesBox from "./PackagesBox/PackagesBox";
import PackagesPriceBox from "./PackagesPriceBox/PackagesPriceBox";

const Packages = () => {
  return (
    <div id="packages" className="flex flex-col w-[100%] h-[100%] m-auto pb-8">
      <div className="py-10 px-2 pb-14">
        <p className="text-gray-700 text-[24px] my-1">Special Offers</p>
        <h1 className="text-3xl md:text-4xl">
          <span className="font-bold">Top </span>
          Tour Packages
        </h1>
      </div>
      <div className=" w-[96%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {packagesData.map((data) => {
          return (
            <PackagesBox
              key={data.id}
              img={data.img}
              name={data.name}
              price={data.price}
              city={data.city}
            />
          );
        })}
      </div>

      <div className=" w-[95%] md:w-[84%]  grid grid-cols-1 md:grid-cols-3 gap-3 py-10 mt-3 mx-auto">
        <PackagesPriceBox
          subheading="Half Board"
          price="$ 50"
          detail_01="Transfers from Airport"
          detail_02="Minimum 3 Star Hotel"
          detail_03="Alcoholic beverages"
          detail_04="Incl. Museum Tickets"
          detail_05="Meals in Restaurants"
          btnText="VIEW TRIPS"
        />
        <PackagesPriceBox
          bgColor="red"
          color="white"
          bgColorBtn="black"
          subheading="All Inclusive"
          price="$ 32"
          detail_01="Meals in Restaurants"
          detail_02="Alcoholic beverages"
          detail_03="Minimum 3 Star Hotel"
          detail_04="Transfers from Airport"
          detail_05="Incl. Museum Tickets"
          btnText="VIEW ALL"
        />
        <PackagesPriceBox
          bgColor="black"
          color="white"
          subheading="Excursions Included"
          price="$ 68 "
          detail_01="Alcoholic beverages"
          detail_02="Meals in Restaurants"
          detail_03="Minimum 3 Star Hotel"
          detail_04="Incl. Museum Tickets"
          detail_05="Transfers from Airport"
          btnText="BUTTON"
        />
      </div>
    </div>
  );
};

export default Packages;
