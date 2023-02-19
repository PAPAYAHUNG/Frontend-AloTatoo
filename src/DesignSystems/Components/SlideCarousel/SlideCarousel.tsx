import React, { FC, useRef, useState } from "react";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import styled from "styled-components";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { StyledWrapperMorphic } from "../../../components/ProductCard";
import PromoCard from "../../../components/PromoCard/PromoCard";

const ListFilter = [
  { filter: "Traditional", id: 1, url: "/", value: "traditional", image: "" },
  { filter: "Blackwork", id: 2, url: "/", value: "blackwork", image: "" },
  { filter: "Realistic", id: 3, url: "/", value: "realistic", image: "" },
  { filter: "Abstract", id: 4, url: "/", value: "abstract", image: "" },
  { filter: "Watercolor", id: 5, url: "/", value: "watercolor", image: "" },
  { filter: "Floral", id: 6, url: "/", value: "floral", image: "" },
  { filter: "Wildlife", id: 7, url: "/", value: "wildlife", image: "" },
  { filter: "Geometric", id: 8, url: "/", value: "geometric", image: "" },
  { filter: "Lettering", id: 9, url: "/", value: "lettering", image: "" },
  { filter: "Japanese", id: 10, url: "/", value: "japanese", image: "" },
  { filter: "Portrait", id: 11, url: "/", value: "portrait", image: "" },
  { filter: "Fantasy", id: 12, url: "/", value: "fantasy", image: "" },
];

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;

  .swiper.fitler-container {
    width: 90%;
    height: 100%;
  }

  .swiper-wrapper {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: transparent;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-button-disabled {
    display: none;
  }
`;

interface ISlideCarousel {
  data: any;
  itemsPerView?: number | "auto" | undefined;
  Component:any
}

const SlideCarousel: FC<ISlideCarousel> = ({ data, itemsPerView,Component }) => {
  const renderSwiperSlide = () => {
    return data.map((item: any) => (
      // <SwiperSlide key={item?.id}>
      //   <PromoCard data={item} />
      // </SwiperSlide>
      <SwiperSlide key={item?.id}>
        <Component data={item} />
      </SwiperSlide>
    ));
  };

  return (
    <div className="fitler-container relative ">
      <div
        className="swiper-button flex items-center justify-center 
      bg-black-rgba2
      absolute top-1/2 transform -translate-y-1/2
      image-swiper-button-next  p-2 w-10 h-10 right-[15px]
      z-10
      rounded-full cursor-pointer "
      >
        <RightOutlined />
      </div>
      <div
        className="swiper-button flex items-center justify-center 
      bg-black-rgba2 
      absolute top-1/2 transform -translate-y-1/2
       p-2 w-10 h-10 left-[15px]
      z-10
      rounded-full cursor-pointer image-swiper-button-prev "
      >
        <LeftOutlined />
      </div>
      <StyledSwiper
        slidesPerView={itemsPerView || "auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        // autoplay={false}
        modules={[Navigation]}
        className="myStyledSwiper"
      >
        {renderSwiperSlide()}
      </StyledSwiper>
    </div>
  );
};

SlideCarousel.defaultProps = {
  itemsPerView: 3,
};

export default SlideCarousel;
