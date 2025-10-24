import React from "react";
import { GoStar, GoStarFill } from "react-icons/go";
import Rating from "react-rating";

const CheckoutCard = ({ item }) => {
  return (
    <div className="flex gap-4">
      <img className="w-28" src={item.image} alt="" />
      <div className="space-y-2">
        <h2>{item.name}</h2>
        <Rating
          emptySymbol={<GoStar className="text-xl text-primary" />}
          fullSymbol={<GoStarFill className="text-xl text-primary" />}
          initialRating={4}
          readonly
        />
        <div className="space-x-3">
          <span className="font-bold text-primary text-lg"> $120.25</span>
          <del className=" text-black/70  ">$120.25</del>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
