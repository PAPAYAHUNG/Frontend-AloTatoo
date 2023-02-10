import React from "react";
import PromotionBadge from "./PromotionBadge";

const ProductCard = ({data}:any) => {
  return (
    <div className="max-w-sm rounded shadow-lg relative">
      <img
        className="w-full rounded-t-md "
        // src="https://images8.alphacoders.com/484/thumbbig-484717.webp"
        src="https://c4.wallpaperflare.com/wallpaper/848/150/360/nature-landscape-aerial-view-mountains-wallpaper-thumb.jpg"
        // src={data?.url ||"https://images8.alphacoders.com/484/thumbbig-484717.webp"}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <div className="flex">
            <span className="text-lg font-bold text-red-800">4.555.555</span>
        </div>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
      <PromotionBadge content="Save 15%" />
    </div>
  );
}

export default ProductCard;
