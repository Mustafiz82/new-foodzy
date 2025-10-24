import React from "react";
import { FaArrowRight } from "react-icons/fa";
import prouductBannerImage from "../../assets/home/product-banner-img.png";
import { ProductData } from "../../Data/PopularProductData";
import Title from "../Shared/Title";
import ProductCard from "../Shared/ProductCard";

const PopularProduct = () => {
  const category = ["All", "Snack", "Vegetable", "Fruit", "Bakery"];

  return (
    <div className="container px-10 mx-auto">
      <Title
        title={"Popular Products"}
        subTitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis."
        }
      />

      <div className="grid mt-10 grid-cols-1 lg:grid-cols-4 gap-y-5 lg:gap-5 ">
        <div className="space-y-2  flex lg:flex-col flex-row gap-5 w-full text-center">
          <div className="flex-1 space-y-3">
            {category.map((item, idx) => (
              <div
                className="p-3 md:py-4 lg:py-3 flex w-full justify-between bg-[#E9E9E9]"
                key={idx}
              >
                <h2 className="text-xl font-semibold">{item}</h2>
                <p className="text-black/70">
                  <FaArrowRight />
                </p>
              </div>
            ))}
          </div>
          <div className="relative flex-1 h-[500px] md:h-[350px] lg:min-h-[950px] w-full">
            <img
              src={prouductBannerImage}
              className="w-full object-cover h-full"
              alt=""
            />
            <div className="absolute space-y-2 text-left top-24 text-white left-10">
              <p className="text-3xl text-white/90">Juicy</p>
              <h2 className="text-5xl font-semibold text-[#F7E8AA]">Fruits</h2>
              <p className="text-white/70">100% Natural</p>
              <button className="btn btn-primary mt-3">Shop Now</button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-3 gap-5">
          {ProductData.map((item, idx) => (
            <ProductCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
