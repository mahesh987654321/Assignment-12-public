import React from "react";
import BannerCss from "./BannerCss.css";

const Banner = () => {
  return (
    <div className="container">
      <img
        src="https://etimg.etb2bimg.com/photo/85652320.cms"
        alt=""
        className="h-2/4 w-full banner-imgHeight"
      />
      <div class="centered text-4xl font-bold">
        YOU CAN GET BEST CARS BODY PARTS
      </div>
    </div>
  );
};

export default Banner;
