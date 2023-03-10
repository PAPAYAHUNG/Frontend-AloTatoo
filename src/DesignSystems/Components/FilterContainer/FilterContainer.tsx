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
import { ListFilter } from "../../../pages/home/constants/constants";

// const ListFilter = [
//   { filter: "Traditional", id: 1, url: "/", value: "traditional", image: "" },
//   { filter: "Blackwork", id: 2, url: "/", value: "blackwork", image: "" },
//   { filter: "Realistic", id: 3, url: "/", value: "realistic", image: "" },
//   { filter: "Abstract", id: 4, url: "/", value: "abstract", image: "" },
//   { filter: "Watercolor", id: 5, url: "/", value: "watercolor", image: "" },
//   { filter: "Floral", id: 6, url: "/", value: "floral", image: "" },
//   { filter: "Wildlife", id: 7, url: "/", value: "wildlife", image: "" },
//   { filter: "Geometric", id: 8, url: "/", value: "geometric", image: "" },
//   { filter: "Lettering", id: 9, url: "/", value: "lettering", image: "" },
//   { filter: "Japanese", id: 10, url: "/", value: "japanese", image: "" },
//   { filter: "Portrait", id: 11, url: "/", value: "portrait", image: "" },
//   { filter: "Fantasy", id: 12, url: "/", value: "fantasy", image: "" },
// ];

const StyledSwiper = styled(Swiper)`
  width: 90%;
  height: 100%;
  /* .swiper {
    width: 80%;
    height: 100%;
  } */

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

// interface IFilterContainer {
//   data: any;
//   itemsPerView?: number | "auto" | undefined;
// }

const FilterContainer: FC = () => {
  const renderSwiperSlide = () => {
    return ListFilter.map((item: any) => (
      <SwiperSlide key={item?.id}>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <StyledWrapperMorphic className="p-2 border border-sky-500  rounded-lg">
            {item?.filter}
          </StyledWrapperMorphic>
          <div className="w-[120px] h-[120px] pt-2">
            <img
              className="object-cover w-full h-full rounded-lg "
              src={item?.image}
              alt={item?.filter}
            />
          </div>
        </div>
      </SwiperSlide>
    ));
  };

  return (
    <div className="fitler-container relative ">
      <div
        className="swiper-button flex items-center justify-center 
      bg-black-rgba-morphic
      absolute top-1/2 transform -translate-y-1/2
      image-swiper-button-next2  p-2 w-10 h-10 right-[15px]
      z-10
      rounded-full cursor-pointer "
      >
        <RightOutlined />
      </div>
      <div
        className="swiper-button flex items-center justify-center 
      bg-black-rgba-morphic 
      absolute top-1/2 transform -translate-y-1/2
       p-2 w-10 h-10 left-[15px]
      z-10
      rounded-full cursor-pointer image-swiper-button-prev2 "
      >
        <LeftOutlined />
      </div>
      <StyledSwiper
        slidesPerView="auto"
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".image-swiper-button-next2",
          prevEl: ".image-swiper-button-prev2",
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

FilterContainer.defaultProps = {
  itemsPerView: 3,
};

export default FilterContainer;
