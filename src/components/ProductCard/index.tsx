import { HeartOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import PromotionBadge from "./PromotionBadge";

export const StyledWrapperMorphic = styled.div`
background: rgba( 255, 255, 255, 0.4 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 20px );
-webkit-backdrop-filter: blur( 20px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`;
// text-gray-900 border border-gray-300  bg-gray-50
// dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400
const ProductCard = ({ data }: any) => {
  return (
    <StyledWrapperMorphic
      className="max-w-sm rounded-lg shadow-lg relative 
    border border-gray-300 
    "
    >
      <img
        className="w-full rounded-t-md "
        src="https://c4.wallpaperflare.com/wallpaper/848/150/360/nature-landscape-aerial-view-mountains-wallpaper-thumb.jpg"
        // src={data?.url ||"https://images8.alphacoders.com/484/thumbbig-484717.webp"}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4 ">
        <div>
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 py-4 bg-black-rgba2 rounded-md mt-3">
          <div className="flex justify-between items-center">
            <div className="flex">
              <span className="text-lg font-bold text-red-800 mr-2">
                4,555,555
              </span>
              <span className="text-lg font-bold text-red-800"> vnd</span>
            </div>
            <div className="like-button text-red-900 cursor-pointer">
              <HeartOutlined />
            </div>
          </div>
        </div>
      </div>
      <PromotionBadge content="Save 15%" />
    </StyledWrapperMorphic>
  );
};

export default ProductCard;
