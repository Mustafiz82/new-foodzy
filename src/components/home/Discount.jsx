import React from "react";
import discount1 from "../../assets/home/discount-1.png";
import discount2 from "../../assets/home/discount-2.png";

const Discount = () => {
  const data = [
    {
      title: "Cake & Milk",
      subtitle: "65 items",
    },
    {
      title: "Fresh Meat",
      subtitle: "30 items",
    },
    {
      title: "Vegetables",
      subtitle: "25 items",
    },
    {
      title: "Apple & Mango",
      subtitle: "45 items",
    },
    {
      title: "Strawberry",
      subtitle: "68 items",
    },
  ];

  return (
    <div className="container px-10 grid grid-cols-1 md:grid-cols-3 gap-5 p-20 mx-auto px-5">
      <div className="space-y-2 text-center">
        {data.map((item, idx) => (
          <div className="p-4 bg-[#E9E9E9]" key={idx}>
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-black/70">({item.subtitle})</p>
          </div>
        ))}
        <div className="p-4 bg-[#E9E9E9]">
          <h2 className="text-xl text-primary font-semibold">View More</h2>
        </div>
      </div>

      <div className="relative">
        <img className="h-full" src={discount1} alt="" />
        <div className="absolute text-white top-0 left-0 right-0 bottom-0">
          <div className="flex p-5 gap-2">
            <h2 className="text-4xl font-semibold">50</h2>
            <div className="text-sm text-white/80">
              <p>%</p>
              <p>OFF</p>
            </div>
          </div>

          <div className="absolute bottom-20 text-center left-1/2 -translate-x-1/2">
            <h2 className="text-xl font-semibold" >Cake</h2>
            <button className="btn btn-primary mt-5">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="relative">
        <img className="h-full" src={discount2} alt="" />
        <div className="absolute text-white top-0 left-0 right-0 bottom-0">
          <div className="flex p-5 gap-2">
            <h2 className="text-4xl font-semibold">40</h2>
            <div className="text-sm text-white/80">
              <p>%</p>
              <p>OFF</p>
            </div>
          </div>

          <div className="absolute bottom-20 text-center left-1/2 -translate-x-1/2">
            <h2 className="text-xl font-semibold" >Milk</h2>
            <button className="btn btn-primary mt-5">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
