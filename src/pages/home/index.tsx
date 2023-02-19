import React, { Fragment, useEffect, useState } from "react";
import BrowseMore from "../../components/BrowseMore/BrowseMore";
// import Carousel from "../../components/Carousel/Carousel";
import Container from "../../components/Container/Container";
import CustomContainer from "../../DesignSystems/Components/CustomContainer/CustomContainer";
import Listing from "../../components/Listing/Listing";
import MultipleItemContainer from "../../components/MultipleItemContainer/MultipleItemContainer";
import Navbar from "../../components/Navbar/Navbar";
import FilterContainer from "../../DesignSystems/Components/FilterContainer/FilterContainer";
import SearchInput from "../../components/SeachInput/SearchInput";
import image from "../../assets/images/bg.jpg";
import SlideCarousel from "../../DesignSystems/Components/SlideCarousel/SlideCarousel";
import { PromoCards } from "./constants/constants";
import PromoCard from "../../components/PromoCard/PromoCard";
import ImageBackground from "../../components/ImageBackground/ImageBackground";

const Carousel = React.lazy(() => import("../../components/Carousel/Carousel"));
const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=8")
      .then((res) => res.json())
      .then((data) => setProduct(data?.results));
  }, []);

  console.log({ product });

  return (
    <div className=" bg-no-repeat relative  bg-cover bg-center bg-fixed w-full h-full">
      {/* <img
        src="https://r4.wallpaperflare.com/wallpaper/880/265/274/4k-oled-plants-fern-green-hd-wallpaper-b38df8dd4c8ec721d2412b41c202e51e.jpg"
        className="w-full h-full object-cover absolute mix-blend-overlay"
        alt=""
      /> */}
      <div className="bg-black/0 ">
        <div className="z-30 relative">
          <ImageBackground />
          <Navbar />
          <Container>
            {/* <Carousel /> */}
            {/* <SlideCarousel data={PromoCards} Component={PromoCard} /> */}
            {/* <div className="my-5">
              <CustomContainer data={product} />
            </div> */}
            <div className="mt-5">
              {/* <MultipleItemContainer data={product} /> */}
              <SlideCarousel data={PromoCards} Component={PromoCard} />
            </div>
            <SearchInput />
            <FilterContainer />

            <Listing data={product} />

            <div className="flex items-center cursor-pointer justify-center mt-5">
              <BrowseMore />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
