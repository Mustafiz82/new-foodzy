import React from "react";
import food1 from "../../assets/home/food1.png";
import food2 from "../../assets/home/food2.png";
import food3 from "../../assets/home/food3.png";

const Food = () => {
  return (
    <div className="my-20 text-white lg:text-black container px-10  mx-auto gap-5  grid md:grid-cols-4 ">
      <div className="">
        <img className="w-full" src={food1} alt="" />
      </div>
      <div className="">
        <img className="w-full" src={food2} alt="" />
      </div>
      <div className="col-span-2 relative">
        <img className="w-full" src={food3} alt="" />
        <div className="absolute h-full pt-10 space-y-2 top-0 bg-black/20 lg:bg-transparent lg:top-20 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-5 w-full lg:w-fit p-5">
          <h2 className="font-semibold text-center lg:text-left text-2xl font-poppins ">
            Organic & Healthy
            <br /> Vegetables
          </h2>
          <p className="text-black/70">
            <span className="font-bold text-xl text-primary">25%</span> off
          </p>
          <div className="flex lg:block justify-center ">
            <button className="btn bg-primary text-white">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
