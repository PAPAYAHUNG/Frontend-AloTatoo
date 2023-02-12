import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImage = ({ image }:any) => (
  <div>
    <LazyLoadImage
      // effect='blur' // opacity | black-and-white
      alt={image?.id}
      src={image?.image} // use normal <img> attributes as props
      className="max-h-[600px] object-cover"
 />
  </div>
);

export default LazyImage;
