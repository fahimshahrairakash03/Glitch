import React, { useEffect, useState } from "react";
import backImg from "../../../assets/image/ServicePage/purple.svg";
import imgBanner from "../../../assets/image/ServicePage/banner1.png";
import imgBanner2 from "../../../assets/image/ServicePage/banner2.png";
import imgBanner3 from "../../../assets/image/ServicePage/banner3.png";
import CompanySlide from "../../Banner/CompanySlide";
import star from "../../../assets/image/backgroud/stars-background.svg";
import BannerCard1 from "../../../components/BannerCard1/BannerCard1";
import mobile from "../../../assets/image/ServicePage/img3.png";
import BannerCard2 from "../../../components/BannerCard2/BannerCard2";

const ServicePage = () => {
  const [cards, setCards] = useState([]);
  const [adervices, setAdServices] = useState([]);
  useEffect(() => {
    fetch("cards.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  useEffect(() => {
    fetch("addService.json")
      .then((res) => res.json())
      .then((data) => setAdServices(data));
  }, []);
  useEffect;

  return (
    <div>
      {/*First Section Banner Section */}
      <div
        className="h-full bg-cover py-24 "
        style={{ backgroundImage: `url(${backImg})` }}
      >
        <div className="hero bg-transparent px-14 ">
          <div className="hero-content   flex-col lg:flex-row-reverse">
            <div className=" lg:w-1/2 rounded-lg relative ">
              <img className="w-full " src={imgBanner} alt="" />
              <img
                className="absolute -top-12 right-6 hidden lg:block  "
                src={imgBanner2}
                alt=""
              />
            </div>
            <div className="lg:w-1/2">
              <h1 className=" lg:text-7xl  text-white font-bold">
                Ad Creative Services
              </h1>
              <p className="pb-1 pt-6  lg:text-xl text-gray-300">
                AI is changing everything, especially design.
                <span className="text-white font-semibold">
                  Supe is your shortcut to an AI-powered creative team.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: "#0b1926", backgroundImage: `url(${star})` }}
      >
        {/*2nd Section Banner Card Section */}
        <div className="px-4 pt-20">
          <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
            {cards.map((card) => (
              <BannerCard1 key={card.id} prop={card}></BannerCard1>
            ))}
          </div>
        </div>

        {/*3rd Section Company Slide Section */}

        <div>
          <CompanySlide></CompanySlide>
        </div>

        {/*4th Section  */}
        <div>
          <div className="hero bg-transparent px-14 pt-20 pb-32 ">
            <div className="hero-content   flex-col lg:flex-row-reverse">
              <div className=" lg:w-1/2 rounded-lg hover:animate-pulse">
                {/* <ReactPlayer url="https://www.youtube.com/watch?v=F1M5_RlVhGQ"></ReactPlayer> */}
                <img src={mobile} alt="" />
              </div>
              <div className="lg:w-1/2">
                <h1 className=" lg:text-5xl  text-white font-bold">
                  Ad creative for campaigns that perform
                </h1>
                <p className="pb-1 pt-6  lg:text-xl text-gray-300">
                  The need for compelling ad creative has never been greater.
                  But, when your biggest challenge is getting to market, the
                  best solution is plugging into Superside’s flexible ad design
                  services.
                  <span className="text-white font-semibold">
                    Superside is your shortcut to an AI-powered creative team.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5th Section */}
        <div className="px-8">
          <h2 className="text-xl text-center text-gray-300 py-5">
            MULTIFACETED SOLUTIONS
          </h2>
          <h1 className="text-center text-white text-5xl font-bold pb-20">
            Comprehensive <span className="text-purple-400">ad design</span>{" "}
            services
          </h1>
          <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {adervices.map((adervice) => (
              <BannerCard2 key={adervice.id} prop={adervice}></BannerCard2>
            ))}
          </div>
        </div>

        {/* 6th Section */}
        <div className="px-8 py-32">
          <h2 className="text-xl text-center text-gray-300 py-5">
            MULTIFACETED SOLUTIONS
          </h2>
          <h1 className="text-center text-white text-5xl font-bold pb-20">
            Comprehensive <span className="text-purple-400">ad design</span>{" "}
            services
          </h1>
          <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {adervices.map((adervice) => (
              <BannerCard2 key={adervice.id} prop={adervice}></BannerCard2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
