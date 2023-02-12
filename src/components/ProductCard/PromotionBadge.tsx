import React from "react";

const PromotionBadge = ({ content }: any) => {
  return (
    <>
      <div className="absolute top-3 -left-2">
        <div className="bg-red-800 text-white z-50 pd px-1 py-1 font-bold inline-block relative rounded-r-md">
          {content}
        </div>
        <div
          className="w-0 h-0 absolute -bottom-2
          border-t-[10px] border-t-transparent
          border-r-[10px] border-r-red-900
          border-b-[10px] border-b-transparent "
        ></div>
      </div>
    </>
  );
};

export default PromotionBadge;
