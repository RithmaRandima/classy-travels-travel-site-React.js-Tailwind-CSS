import React from "react";
import OfferBox from "./OfferBox/OfferBox";

import { OffersData } from "../../Data/OfferData";

function Offer() {
  return (
    <div className="w-[100%] h-[100%]  mb-20">
      <div className="w-[100%] h-[100%] grid grid-cols-1 md:grid-cols-3">
        {OffersData.map((offer) => {
          return (
            <OfferBox
              img={offer.img}
              country={offer.country}
              place={offer.place}
              day_count={offer.day_count}
              price={offer.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Offer;
