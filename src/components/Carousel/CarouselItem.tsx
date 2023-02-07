import React from "react";
import { SwiperSlide } from "swiper/react";
import ListCarousel from "./constants";

const CarouselItem = (item: any) => {
  console.log({ item });

  return (
    <SwiperSlide>
      {/* <img src={item.image} alt={item.id} className="block w-full h-full object-cover" /> */}

        <img src="https://images5.alphacoders.com/816/816849.jpg" />

    </SwiperSlide>
  );
};

export default CarouselItem;
