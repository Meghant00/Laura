import React from "react";
import SliderItem from "./slider-item";
import slider from "../data/slider";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);
const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
    >
      {slider.map(({ name, post, photo, testimonial, id }) => (
        <SwiperSlide key={id}>
          <SliderItem
            name={name}
            post={post}
            image={photo}
            testimonial={testimonial}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
