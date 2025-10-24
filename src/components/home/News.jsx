
import Title from "../Shared/Title";
import image from "../../assets/home/news1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const News = () => {
  return (
    <div className="my-20 mx-auto container px-10 ">
      <Title
        title={"Latest News"}
        subTitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis."
        }
      />

      <Swiper
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
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        spaceBetween={30}
        loop
        autoplay={{
            delay : 1000
            ,reverseDirection : true
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Pagination , Autoplay ]}
        className="mySwiper mt-20"
      >
        {Array.from({ length: 6 }).map(() =>   <SwiperSlide>
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
              <figure>
                <img src={image} alt="Shoes" />
              </figure>
            </div>
          </SwiperSlide>
        
        )}

        
      </Swiper>
    </div>
  );
};

export default News;
