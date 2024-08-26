import React from "react";
import bannerImg from "../../assets/image/banner.png";
import Hero from "./Hero";
import CompanySlide from "./CompanySlide";
import Banner2 from "../Banner2/Banner2";
import Banner3 from "../Banner3/Banner3";
import Banner4 from "../Banner4/Banner4";

const Banner = () => {
  return (
    <div
      className="h-full bg-cover"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <Hero></Hero>
      <CompanySlide></CompanySlide>
      {/* <Banner2></Banner2> */}
    </div>
  );
};

export default Banner;
