import React from "react";
import { ImageBackGround } from "../../pages/home/constants/constants";
import LazyImage from "../LazyImage/LazyImage";

const ImageBackground = () => {

  return (
    <div>
      <div className="relative w-full ">
        <LazyImage imageObj={ImageBackGround} />
        <div className="absolute top-40 left-40 text-4xl p-10 font-bold text-white bg-black-rgba(0,0,0,0.5) rounded-xl shadow-lg">
          {ImageBackGround.content}
        </div>
      </div>
    </div>
  );
};

export default ImageBackground;
