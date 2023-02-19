import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface IImageObj {
  image: string;
  id: number | string;
  content: string;
}
const LazyImage = ({ imageObj }: { imageObj: IImageObj }) => (
  <LazyLoadImage
    // effect='blur' // opacity | black-and-white
    alt={imageObj?.id as string}
    src={imageObj?.image} // use normal <img> attributes as props
    // className="max-h-[600px] object-cover"
    className=" object-cover w-full"
  />
);

export default LazyImage;
