import React, { FC, useRef, useState } from "react";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import styled from "styled-components";
import ProductCard from "../ProductCard";

const StyledSwiper = styled(Swiper)`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-wrapper {
    padding-bottom: 30px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: transparent;

    /* Center slide text vertically */
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
`;

interface IMultipleItemContainer {
  data: any;
  itemsPerView?: number | "auto" | undefined
}

const MultipleItemContainer: FC<IMultipleItemContainer> = ({
  data,
  itemsPerView,
}) => {
  const renderSwiperSlide = () => {
    return data.map((item: any) => (
      <SwiperSlide key={item.name}>
        <ProductCard />
      </SwiperSlide>
    ));
  };

  return (
    <>
      <StyledSwiper
        slidesPerView={itemsPerView} 
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="myStyledSwiper"
      >
        {renderSwiperSlide()}
      </StyledSwiper>
    </>
  );
};

MultipleItemContainer.defaultProps = {
  itemsPerView: 3,
};

export default MultipleItemContainer;
