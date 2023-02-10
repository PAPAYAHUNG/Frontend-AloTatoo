import React from "react";
import styled from "styled-components";
import ProductCard from "../ProductCard";

const Listing = ({ data }: any) => {
    console.log({data});
    
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item: any) => (
        <>
          <div key={item.name}><ProductCard data={item}/></div>
        </>
      ))}
    </div>
  );
};

export default Listing;
