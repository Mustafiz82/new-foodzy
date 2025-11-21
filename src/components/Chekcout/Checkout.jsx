import React, { useContext, useEffect, useState } from "react";
import { ProductData } from "../../Data/PopularProductData";
import CheckoutCard from "./CheckoutCard";
import useFetch from "../../hook/useFetch";
import { AuthContext } from "../../context/Authcontext";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const { data: cartData, refetch } = useFetch(`cart/${user.email}`);

  console.log(cartData);

  useEffect(() => {
    refetch();
  }, [user]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  

  return (
    <div className="flex flex-col  lg:flex-row container mx-auto p-5 w-full gap-5">
      <div className="flex flex-col md:flex-row lg:flex-col gap-3 w-full lg:w-1/3  ">
        <div className="border border-black/60 p-5 ">
          <h2 className="text-xl font-semibold">Summary</h2>

          <div className="flex mb-2 mt-5 justify-between">
            <p className="text-black/70">sub Total </p>
            <p>$80.00</p>
          </div>
          <div className="flex justify-between">
            <p className="text-black/70">Delivery Charge </p>
            <p>$10.00</p>
          </div>

          <hr className="my-5 bg-black/70" />
          <div className="flex justify-between">
            <p className="text-black text-lg font-semibold">Total Amount </p>
            <p>$90.00</p>
          </div>

          <div className="space-y-3 mt-5">
            {cartData?.slice(0, 2)?.map((item, index) => (
              <CheckoutCard key={index} item={item} />
            ))}
          </div>
        </div>

        <div className="border lg:mt-5  p-5 border-black/60">
          <h2 className="text-xl font-semibold">Payment Method</h2>
          <p className="text-black/70 my-2">Please select Payment Mehod</p>
          <div className="mt-5">
            <input
              type="radio"
              name="radio-10"
              className="radio mr-2 radio-error"
              defaultChecked
            />
            Cash On Delivery
          </div>
          <div>
            <input
              type="radio"
              name="radio-10"
              className="radio mr-2 mt-2 radio-error"
              defaultChecked
            />{" "}
            Payment with Stripe
          </div>
          <div className="flex">
            <input
              type="radio"
              name="radio-10"
              className="radio mr-2 mt-2 radio-error"
              defaultChecked
            />{" "}
            Payment with SSLCOMMERZ
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className=" w-full lg:w-2/3 space-y-4 border border-black/60 p-5 ">
        <h2 className="text-xl font-semibold">Billing Information</h2>

        <div className="flex-1">
          <label htmlFor="first_name">
            First Name <span className="text-primary">*</span>
          </label>
          <input
            placeholder="Enter Your First Name"
            id="first_name"
            type="text"
            className="input mt-2 focus:outline-0 w-full focus:border-2 focus:border-primary  input-border"
            {...register("first_name" , { required: true })} 
          />
        </div>
        <div className="flex-1">
          <label htmlFor="last_name">Last Name </label>
          <input
            placeholder="Enter Your Last Name"
            id="last_name"
            type="text"
            className="input mt-2 focus:outline-0 w-full focus:border-2 focus:border-primary  input-border"
             {...register("last_name")} 
          />
        </div>

        <div className="flex-1 mt-5">
          <label htmlFor="address">
            Address <span className="text-primary">*</span>
          </label>
          <input
            placeholder="Enter Your Address"
            id="address"
            type="text"
            className="input mt-2 focus:outline-0 w-full  focus:border-2 focus:border-primary  input-border"
             {...register("address")} 
          />
        </div>
        <div className="flex-1">
          <label htmlFor="city">City </label>
          <input
            placeholder="Enter Your City Name"
            id="city"
            type="text"
            className="input mt-2 focus:outline-0 w-full focus:border-2 focus:border-primary  input-border"
             {...register("city")} 
          />
        </div>
        <div className="flex-1">
          <label htmlFor="city">Post Code </label>
          <input
            placeholder="Enter Your City Name"
            id="postCode"
            type="text"
            className="input mt-2 focus:outline-0 w-full focus:border-2 focus:border-primary  input-border"
             {...register("post_code")} 
          />
        </div>
        <div className="flex-1">
          <label htmlFor="country">Country </label>
          <input
            placeholder="Enter Your Country Name"
            id="country"
            type="text"
            className="input mt-2 focus:outline-0 w-full focus:border-2 focus:border-primary  input-border"
             {...register("country")} 
          />
        </div>

        <div className="flex justify-end mt-8">
          <button type="submit" className="btn ml-auto btn-primary bg-primary  text-white">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
