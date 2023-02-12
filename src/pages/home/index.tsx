import React, { useEffect, useState } from "react";
import BrowseMore from "../../components/BrowseMore/BrowseMore";
// import Carousel from "../../components/Carousel/Carousel";
import Container from "../../components/Container/Container";
import CustomContainer from "../../DesignSystems/Components/CustomContainer/CustomContainer";
import Listing from "../../components/Listing/Listing";
import MultipleItemContainer from "../../components/MultipleItemContainer/MultipleItemContainer";
import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../../components/ProductCard";
import FilterContainer from "../../DesignSystems/Components/FilterContainer/FilterContainer";

const Carousel = React.lazy(() => import("../../components/Carousel/Carousel"));

const Home = () => {
  const [product, setProduct] = useState([]);
  const fetchProduct = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=8");
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=8")
      .then((res) => res.json())
      .then((data) => setProduct(data?.results));
  }, []);

  console.log({ product });

  return (
    <div>
      <Navbar />
      <Carousel />
      <Container>
        <CustomContainer data={product} />
        <FilterContainer/>

        <MultipleItemContainer data={product} />
        <Listing data={product} />
        <div className="flex items-center justify-center">
          <BrowseMore />
        </div>
      </Container>
    </div>
  );
};

export default Home;
