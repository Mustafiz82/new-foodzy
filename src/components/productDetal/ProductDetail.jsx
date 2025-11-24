import React, { useContext, useEffect, useState } from "react";

import Rating from "react-rating";
import { GoStar, GoStarFill } from "react-icons/go";
import Title from "../Shared/Title";
import ProductCard from "../Shared/ProductCard";
import { AuthContext } from "../../context/Authcontext";
import useFetch from "../../hook/useFetch";
import { useNavigate, useParams } from "react-router";
import axiosPublic from "../../config/axiosPublic";
import Swal from "sweetalert2";
import { CartContext } from "../../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: productDetail, refetch } = useFetch(`product/${id}`);
  const { refetch: cartRefetch } = useContext(CartContext);
  const [selectedImage, setSelectedImage] = useState(
    productDetail?.imageUrls?.[0]
  );
  const [selectedTab, setSelectedTab] = useState("description");
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();
  const { data: ProductData } = useFetch("product");
  const { user } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    setSelectedImage(productDetail?.imageUrls?.[0]);
  }, [productDetail]);

  useEffect(() => {
    refetch();
  }, [id]);

  const handleChangeQuantity = (delta) => {
    setQuantity(
      delta == "+" ? quantity + 1 : quantity > 1 ? quantity - 1 : quantity - 0
    );
  };

  const handleAddToCart = () => {
    if (user?.email) {
      const { _id, ...rest } = productDetail;
      console.log(rest);

      axiosPublic
        .post("/cart", { quantity, productID: _id, email: user.email })
        .then((res) => {
          // if(res.data)

          if (res.data.error) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: res.data.error,
              footer: '<a href="/cart">view Cart</a>',
            });
          }
          if (res.data.insertedId) {
            Swal.fire({
              title: "Success",
              text: "Product Added To cart !",
              icon: "success",
              footer: '<a href="/cart">view Cart</a>',
            });

            cartRefetch();
          }
        });
    } else {
      navigate("/login");
    }
  };

  const value = useContext(AuthContext);
  console.log(value);

  return (
    <div className="container mx-auto">
      <div className="w-full my-20 flex flex-col lg:flex-row gap-5">
        <div className="flex-1">
          <img
            className=" w-full object-cover h-[600px]"
            src={selectedImage}
            alt=""
          />
          <div className="flex w-screen lg:w-auto overflow-x-auto gap-5 mt-5">
            {productDetail?.imageUrls?.map((item) => (
              <img
                onClick={() => setSelectedImage(item)}
                className="w-32 h-32 object-cover"
                src={item}
                alt=""
              />
            ))}
          </div>
        </div>

        <div className="flex-1 p-4">
          <h1 className="text-3xl ">{productDetail.title}</h1>

          <p className="mt-3">{productDetail?.shortDescription}</p>

          <hr className="my-10" />

          <div className="flex items-center gap-2">
            <Rating
              emptySymbol={<GoStar className="text-2xl text-primary" />}
              fullSymbol={<GoStarFill className="text-2xl text-primary" />}
              initialRating={4}
              readonly
            />

            <span className="text-black/70">(75 Review)</span>
          </div>

          <div
            className="text-lg mt-4"
            dangerouslySetInnerHTML={{ __html: productDetail.description }}
          ></div>

          <div className="flex gap-2 items-end">
            <h1 className="text-primary mt-5 text-3xl font-semibold">
              ${productDetail.offeredPrice}
            </h1>
            <del className="text-black/70 text-2xl ">
              {" "}
              ${productDetail.originalPrice}
            </del>
          </div>

          <div className="flex my-5 gap-5">
            <div className="flex gap-1 items-center ">
              <span className="btn btn-outline btn-xl text-black/70">
                {quantity}
              </span>
              <div className="flex flex-col w-fit">
                <span
                  onClick={() => handleChangeQuantity("+")}
                  className="btn  btn-sm btn-outline  text-black/70"
                >
                  +
                </span>
                <span
                  onClick={() => handleChangeQuantity("-")}
                  className="btn btn-sm btn-outline  text-black/70"
                >
                  -
                </span>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="btn btn-primary  text-2xl px-8 py-8 text-white"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <div className="border mb-10 p-5 border-black/50">
        <div className="flex gap-10 text-2xl font-semibold">
          <h2
            onClick={() => setSelectedTab("description")}
            className={`pb-10 cursor-pointer ${
              selectedTab == "description" && "border-b-2 border-b-green-500"
            }`}
          >
            Description
          </h2>
          <h2
            onClick={() => setSelectedTab("review")}
            className={`pb-10 cursor-pointer ${
              selectedTab == "review" && "border-b-2 border-b-green-500"
            }`}
          >
            Review
          </h2>
        </div>

        <hr />

        {/* product Description */}
        <div className="mt-5">
          {selectedTab == "description" ? (
            <div>
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                adipisci, error delectus quod laborum enim iusto quo voluptates
                ullam at eveniet veritatis sint, fugit, rerum suscipit officia
                itaque quas repellat! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Totam adipisci, error delectus quod laborum
                enim iusto quo voluptates ullam at eveniet veritatis sint,
                fugit, rerum suscipit officia itaque quas repellat! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Totam adipisci,
                error delectus quod laborum enim iusto quo voluptates ullam at
                eveniet veritatis sint, fugit, rerum suscipit officia itaque
                quas repellat! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Totam adipisci, error delectus quod laborum
                enim iusto quo voluptates ullam at eveniet veritatis sint,
                fugit, rerum suscipit officia itaque quas repellat! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Totam adipisci,
                error delectus quod laborum enim iusto quo voluptates ullam at
                eveniet veritatis sint, fugit, rerum suscipit officia itaque
                quas repellat!
              </h2>
            </div>
          ) : (
            <div className="flex gap-5 items-center">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                </div>
              </div>

              <div className="">
                <Rating
                  emptySymbol={<GoStar className="text-2xl text-primary" />}
                  fullSymbol={<GoStarFill className="text-2xl text-primary" />}
                  initialRating={4}
                  readonly
                />

                <p className="text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatum ut tempore et. Sapiente doloremque temporibus
                  numquam in repudiandae cumque fugit? Aspernatur perspiciatis
                  error vero placeat, eos illum delectus alias possimus?
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Title
        title={"Popular Products"}
        subTitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis."
        }
      />

      <div className="grid gap-5 mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {ProductData.slice(0, 4).map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
