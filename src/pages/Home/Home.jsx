import React from "react";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner2/Banner2";
import Banner3 from "../Banner3/Banner3";
import FooterCard from "../FooterCard/FooterCard";
import BannerTech from "../BannerTech/BannerTech";
import BannerTalent from "../BannerTalent/BannerTalent";
import BannerQuality from "../BannerQuality/BannerQuality";
import Hiringbanner from "../Hiringbanner/Hiringbanner";
import AnimatedBanner from "../AnimatedBanner/AnimatedBanner";
import star from "../../assets/image/backgroud/stars-background.svg";
import CompanySlide from "../Banner/CompanySlide";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AnimatedBanner></AnimatedBanner>
      <Banner2></Banner2>
      <Banner3></Banner3>
      <BannerQuality></BannerQuality>
      <Hiringbanner></Hiringbanner>
      <BannerTalent></BannerTalent>
      <BannerTech></BannerTech>
    </div>
  );
};

export default Home;
