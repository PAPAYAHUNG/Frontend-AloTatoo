import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ListCarousel from "./constants";
import CarouselItem from "./CarouselItem";
const Carousel = () => {
  const renderCarouselContent = (item: any) => {
    return (
      <div className="relative">
        <img
          src={item.image}
          alt={item.id}
          className="max-h-[600px] object-cover"
        />
        <div className="absolute top-40 left-40 text-4xl font-bold">{item.content}</div>
      </div>
    );
  };
  return (
    <>
      <Swiper
         pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {ListCarousel.map((item) => {
     
          return <SwiperSlide>{renderCarouselContent(item)}</SwiperSlide>;
        })}
      </Swiper>
    </>
  );
};

export default Carousel;


