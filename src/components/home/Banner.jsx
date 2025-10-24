import React from "react";
import bgImg from "../../assets/home/Background.png";
import bannerImage from "../../assets/home/bannerImage.png";
import { FaArrowRight } from "react-icons/fa";
import discount from "../../assets/home/50_percent_off.png";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url('${bgImg}')` }}
      className=" flex relative w-full overflow-hidden items-center justify-between px-5 py-10 md:py-20 lg:p-16 bg-center bg-cover"
    >
      <div className="relative  w-full">
        <div className="text-white space-y-2 mr-5  md:mx-10 max-w-[400px]">
          <h3 className="text-white/70">Super Delicious</h3>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            The best way to stuff your wallet.
          </h1>
          <h3 className="text-white/70">Todays Best Deal</h3>
          <button className="mt-5 bg-[#CD7A1D] pr-8 gap-2 p-2 rounded-full flex items-center">
            <div className="bg-white p-2 text-black rounded-full">
              <FaArrowRight />
            </div>
            Order Now
          </button>
        </div>

        <div className="absolute flex justify-end right-0 lg:-right-40 -bottom-2 lg:-bottom-10">
          <img src={discount} className="w-[50%]  lg:w-[70%]" alt="" />
        </div>
      </div>

      <div>
        <img src={bannerImage} className=" w-[55%] absolute lg:static -right-8 top-10  lg:h-[500px] lg:min-w-[700px]" alt="" />
      </div>
    </div>
  );
};

export default Banner;
