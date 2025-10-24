import React from "react";
import image from "../../assets/others/faq.png";
import PageName from "../Shared/PageName";
import Service from "../Shared/Service";

const About = () => {
  return (
    <div className="lg:pb-10 ">
        
      <div className="flex flex-col container mx-auto p-5 gap-5  lg:my-20 ">
        <div className="flex-1 space-y-5">
          <h1 className="text-[40px] font-semibold">About Foodzy</h1>

          <p className="text-[21px] text-black/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam totam laudantium mollitia quibusdam similique, labore alias quisquam eaque sed cumque voluptate sunt ea blanditiis, tenetur veniam? Modi ut veritatis recusandae.</p>
          <p className="text-[21px] text-black/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam totam laudantium mollitia quibusdam similique, labore alias quisquam eaque sed cumque voluptate sunt ea blanditiis, tenetur veniam? Modi ut veritatis recusandae.</p>
          <p className="text-[21px] text-black/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam totam laudantium mollitia quibusdam similique, labore alias quisquam eaque sed cumque voluptate sunt ea blanditiis, tenetur veniam? Modi ut veritatis recusandae.</p>

            <div className="bg-[#F7F7F8]  flex justify-around p-5 ">
                <div className="text-center">
                    <h1 className="text-primary text-6xl font-semibold">100</h1>
                    <p>Vendors</p>
                </div>
                <div className="text-center">
                    <h1 className="text-primary text-6xl font-semibold">23<span className="text-3xl text-black/70">K</span></h1>
                    <p>Customers</p>
                </div>
                <div className="text-center">
                    <h1 className="text-primary text-6xl font-semibold">2<span className="text-3xl text-black/70">K</span></h1>
                    <p>Products</p>
                </div>
            </div>
        </div>
        <img src={image} className="flex-1 w-full h-full " alt="" />
      </div>

      <Service/>

    </div>
  );
};

export default About;
