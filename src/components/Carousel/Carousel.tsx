import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import "swiper/css/navigation";
import { ListCarousel } from "../../pages/home/constants/constants";
import CarouselItem from "./CarouselItem";
import LazyImage from "../LazyImage/LazyImage";
import styled from "styled-components";

const StyledSwiper = styled(Swiper)`
  .swiper-pagination {
    left: 6% !important;
  }

  .swiper-pagination-bullet-active {
    width: 20px !important;
    border-radius: 20px;
  }
`;
const Carousel = () => {
  const renderCarouselContent = (item: any) => {
    return (
      <div className="relative ">
        <LazyImage imageObj={item} />
        <div className="absolute top-40 left-40 text-4xl p-10 font-bold text-white bg-black-rgba(0,0,0,0.5) rounded-xl shadow-lg">
          {item.content}
        </div>
      </div>
    );
  };

 
  return (
    <>
      <StyledSwiper
        pagination={{
          dynamicBullets: true,
        }}
        // navigation={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className=" text-white rounded-lg shadow-lg"
      >
        {ListCarousel.map((item) => {
          return <SwiperSlide>{renderCarouselContent(item)}</SwiperSlide>;
        })}
      </StyledSwiper>
    </>
  );
};

export default Carousel;
