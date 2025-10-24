import React from "react";
import Title from "../Shared/Title";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Rating from "react-rating";
import { IoStarOutline } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";

const Testimonial = () => {
  console.log(Array.from({ length: 7 }));
  return (
    <div className="mt-20 container px-10 mx-auto">
      <Title
        title={"Great Words From People"}
        subTitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore lacus vel facilisis."
        }
      />

      <div className="pt-10">
        <Swiper
        slid
          breakpoints={{

            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          spaceBetween={30}
          freeMode={true}
          loop
          autoplay={{
            delay: 1000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper !pt-20 "
        >
          {Array.from({ length: 7 }).map(() => (
            <>
              <SwiperSlide>
                <div className="h-[300px] bg-[#F7F7F8] mb-20 flex flex-col justify-start items-center border border-gray-300">
                  <div className="p-5  border-l-gray-300 border-l -rotate-45 border-b-gray-300 border-b border border-white   -mt-[61px] bg-white rounded-full w-fit ">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww"
                      className="w-20 rotate-45  h-20 object-cover  rounded-full"
                      alt=""
                    />
                  </div>
                  <h2 className="text-black/70">Co Founder </h2>
                  <h1 className="text-2xl font-bold">Stephen Smith</h1>
                  <p className="text-center mb-4  max-w-[300px] mx-auto mt-4">
                    “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do
                    eiusmod tem lacus vel facilisis.”
                  </p>

                  <Rating
                    emptySymbol={
                      <IoStarOutline className="text-primary text-xl" />
                    }
                    fullSymbol={<IoIosStar className="text-primary text-xl" />}
                    readonly
                    initialRating={4}
                  />
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
