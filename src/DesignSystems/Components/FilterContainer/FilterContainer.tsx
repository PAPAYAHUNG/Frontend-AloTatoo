import React, { FC, useRef, useState } from "react";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import styled from "styled-components";

const listFilter = [
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
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-wrapper {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
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
`;

// interface IFilterContainer {
//   data: any;
//   itemsPerView?: number | "auto" | undefined;
// }

const FilterContainer: FC = () => {
  const renderSwiperSlide = () => {
    return listFilter.map((item: any) => (
      <SwiperSlide key={item?.id}>
      <div className="p-2 border border-sky-500 rounded-lg bg-red-800" >{item?.filter}</div>
      </SwiperSlide>
    ));
  };

  return (
    <>
      <StyledSwiper
        slidesPerView='auto'
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl:'.prev-element',
          nextEl:'.next-element',
          disabledClass:'dissable-element'
        }}
        modules={[ Navigation]}
        className="myStyledSwiper"
      >
        {renderSwiperSlide()}
      </StyledSwiper>
    </>
  );
};

FilterContainer.defaultProps = {
  itemsPerView: 3,
};

export default FilterContainer;
