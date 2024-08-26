import React from "react";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner2/Banner2";
import Banner3 from "../Banner3/Banner3";
import FooterCard from "../FooterCard/FooterCard";
import BannerTech from "../BannerTech/BannerTech";
import BannerTalent from "../BannerTalent/BannerTalent";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Banner3></Banner3>
      <BannerTalent></BannerTalent>
      <BannerTech></BannerTech>
    </div>
  );
};

export default Home;
