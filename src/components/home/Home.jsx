import React from "react";
import Banner from "./Banner";
import Discount from "./Discount";
import PopularProduct from "./PopularProduct";
import BannerDiscount from "./BannerDiscount";
import Service from "../Shared/Service";
import Testimonial from "./Testimonial";
import Food from "./Food";
import Deals from "./Deals";
import News from "./News";

const Home = () => {
  return (
    <div className="font-poppins">
      <Banner />
      <Discount />
      <PopularProduct />
      <BannerDiscount />
      <Service />
      <Deals />
      <Food />
      <Testimonial />
      <News />
    </div>
  );
};

export default Home;
