import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Container from "../../components/Container/Container";
import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  return (
    <>
      <Navbar />
        <Carousel />
      <Container>
        <ProductCard/>
      </Container>
    </>
  );
};

export default Home;
