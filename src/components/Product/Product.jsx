import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { LuLayoutList } from "react-icons/lu";
import { MdOutlineGridOn, MdOutlineKeyboardArrowDown } from "react-icons/md";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import ProductCard from "../Shared/ProductCard";
import useFetch from "../../hook/useFetch";

const Product = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const {data:ProductData} = useFetch("product")

  console.log(viewMode);

  const filterCategory = [
    {
      name: "Juice  & Drinks ",
      productCount: 20,
    },
    {
      name: "Dairy & Milk",
      productCount: 54,
    },
    {
      name: "Snack and spices",
      productCount: 64,
    },
  ];
  const filterColor = [
    {
      name: "Blue",
      value: "#0000FF",
    },
    {
      name: "Red",
      value: "#FF0000",
    },
    {
      name: "Green",
      value: "#00FF00",
    },
  ];
  const filterWeight = [
    {
      name: "2kg pack",
      value: "2kg",
    },
    {
      name: "20kg pack",
      value: "20kg",
    },
    {
      name: "30kg pack",
      value: "30kg",
    },
  ];

  const tags = [
    "vegetables",
    "Dry Fruits",
    "Juice",
    "Dry Fruits",
    "vegetables",

    "Juice",
  ];


  return (
    <div className="container md:pt-10 lg:pt-20 flex gap-5 w-full items-start  mx-auto px-5 md:px-10 lg:px-10  my-10">
      {/* filter */}
      <div
        className={`duration-300 w-[300px]  pb-24 lg:pb-0 fixed lg:static z-[999] top-36 ${isFilterOpen ? "left-0 " : "-left-full"} h-full overflow-y-auto ${
          isFilterOpen ? "lg:w-1/4  " : "lg:w-0 lg:overflow-hidden"
        }`}
      >
        <div className={`min-w-[300px]  p-5 bg-[#E9E9E9]  h-full `}>
          <h1 className="text-xl flex justify-between font-semibold font-poppins">
            Product Category{" "}
            <button onClick={() => {setFilterOpen(false)}}>X</button>
          </h1>

          <ul className="space-y-2 my-5 text-lg">
            {/* filter by Category */}
            {filterCategory.map((item, index) => (
              <li className="flex justify-between items-center" key={index}>
                <p className="flex gap-2">
                  <input
                    className="checkbox bg-white checked:bg-white"
                    type="checkbox"
                  />
                  <span>{item.name}</span>
                </p>
                <span>[{item.productCount}]</span>
              </li>
            ))}
          </ul>

          {/* Filter by price */}

          <h1 className="text-xl mt-10 font-semibold font-poppins">
            Filter by Price{" "}
          </h1>
          <div className="mt-10">
            <RangeSlider
              onInput={(value) => {
                console.log(value);
              }}
              className="bg-primary"
              max={500}
            />
          </div>

          <h1 className="text-xl mt-10 font-semibold font-poppins">
            Product Color{" "}
          </h1>

          <ul className="space-y-2 my-5 text-lg">
            {/* filter by Category */}
            {filterColor.map((item, index) => (
              <li className="flex justify-between items-center" key={index}>
                <p className="flex gap-2">
                  <input
                    className="checkbox bg-white checked:bg-white"
                    type="checkbox"
                  />
                  <span>{item.name}</span>
                </p>
                <span
                  className="w-5 h-5 "
                  style={{ backgroundColor: item?.value }}
                ></span>
              </li>
            ))}
          </ul>
          <h1 className="text-xl mt-10 font-semibold font-poppins">
            Product Color{" "}
          </h1>

          <ul className="space-y-2 my-5 text-lg">
            {/* filter by Category */}
            {filterWeight.map((item, index) => (
              <li className="flex justify-between items-center" key={index}>
                <p className="flex gap-2">
                  <input
                    className="checkbox bg-white checked:bg-white"
                    type="checkbox"
                  />
                  <span>{item.name}</span>
                </p>
              </li>
            ))}
          </ul>

          <h1 className="text-xl mt-10 font-semibold font-poppins">
            Product Tags{" "}
          </h1>

          <div className="flex max-w-[80%]  mt-5 gap-5 flex-wrap">
            {tags.map((item, index) => {
              return (
                <p key={index} className="px-4 py-2 bg-white text-black/70 ">{item}</p>
              );
            })}
          </div>
        </div>
      </div>

      {/* product grid */}
      <div className={`${isFilterOpen ? "w-full lg:w-3/4  " : "w-full "}`}>
        <div className="p-2   flex justify-between items-center bg-[#E9E9E9]">
          <div className=" flex gap-2">
            <FiFilter
              onClick={() => setFilterOpen((prev) => !prev)}
              className={` p-1 text-3xl rounded-md ${
                isFilterOpen ? "bg-primary text-white" : "bg-white"
              }`}
            />
            <MdOutlineGridOn
              onClick={() => setViewMode("grid")}
              className={`hidden md:block p-1 text-3xl rounded-md ${
                viewMode == "grid" ? "bg-primary text-white" : "bg-white"
              }`}
            />

            <LuLayoutList
              onClick={() => setViewMode("list")}
              className={`${
                viewMode == "list"
                  ? "bg-primary text-white"
                  : "bg-white text-black"
              }  p-1 text-3xl hidden md:block rounded-md`}
            />
            <p className="text-black/70 ml-10">We found 29 items for you</p>
          </div>
          <div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-white text-black/70 m-1"
              >
                Sort By : Featured{" "}
                <MdOutlineKeyboardArrowDown className="text-xl" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>price (Acceding)</a>
                </li>
                <li>
                  <a>price (Descending)</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className={`grid ${
            viewMode == "list"
              ? "grid-cols-1"
              : isFilterOpen
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          } gap-5`}
        >
          {ProductData.map((item, idx) => (
            <ProductCard viewMode={viewMode} key={idx} item={item} />
          ))}
        </div>

        <div className="join flex justify-center my-10">
          <button className="join-item btn">prev</button>
          <button className="join-item bg-primary text-white btn">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn btn-disabled">...</button>
          <button className="join-item btn">99</button>
          <button className="join-item btn">100</button>
          <button className="join-item btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
