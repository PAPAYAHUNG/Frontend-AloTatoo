import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import "swiper/css/navigation";
import ListCarousel from "./constants";
import CarouselItem from "./CarouselItem";
import LazyImage from "../LazyImage/LazyImage";

const Carousel = () => {

  const renderCarouselContent = (item: any) => {
    return (
      <div className="relative">
        <LazyImage image={item}/>
        <div className="absolute top-40 left-40 text-4xl font-bold text-white">{item.content}</div>
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


