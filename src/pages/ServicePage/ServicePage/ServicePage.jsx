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
import background1 from "../../../assets/image/ServicePage/background1.png";
import Button1 from "../../../components/buttons/Button1/Button1";
import cardicon1 from "../../../assets/image/ServicePage/pngImg1.png";

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
                  Superside is your shortcut to an AI-powered creative team.
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

        {/* 8th section */}
        <div className="px-4 rounded-lg">
          <div
            className="py-5 h-screen   lg:bg-contain bg-no-repeat pl-10"
            style={{ backgroundImage: `url(${background1})` }}
          >
            <h2 className="text-xl text-white pt-20 ">
              FUTURE-READY EFFICIENCY
            </h2>
            <h1 className="text-4xl pt-2 text-white font-bold ">
              AI-Enhanced Ad Design
            </h1>
            <p className="text-lg lg:w-1/2 text-gray-300 pt-2 pb-10">
              Leverage the power of AI to improve efficiency and cost savings in
              our design services. Superside’s AI-enhanced workflows streamline
              the creation of ad designs and creative, delivering results up to
              60% faster. Leverage the power of AI to improve efficiency and
              cost savings in our design services. Superside’s AI-enhanced
              workflows streamline the creation of ad designs and creative,
              delivering results up to 60% faster.
            </p>
            <Button1>
              <p className="px-8 text-lg">Book a Call</p>
            </Button1>
          </div>
        </div>

        {/* 9th Section */}
        <div>
          <h2 className="text-xl text-center text-gray-300 py-5">
            PROVEN EXPERTISE
          </h2>
          <h1 className="text-center lg:px-32 text-white text-5xl font-bold pb-20">
            An extension of your team,{" "}
            <span className="text-purple-400">
              an accelerator for your ad design pipeline
            </span>
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 px-4">
            <div className="card   bg-gray-800 text-neutral-content w-96">
              <div className="card-body items-center text-center">
                <h2 className=" text-white">COST EFFECTIVE</h2>
                <p className="text-7xl font-bold text-white">$250</p>
                <p className="  text-white">saved on creative production</p>
                <p className="  text-white">
                  <span style={{ color: "#6dec93" }}>Imperfect Food</span>{" "}
                  Stories{" "}
                </p>
              </div>
            </div>

            <div className="card   bg-gray-800 text-neutral-content w-96">
              <div className="card-body items-center text-center">
                <h2 className=" text-white">COST EFFECTIVE</h2>
                <p className="text-7xl font-bold text-white">$250</p>
                <p className="  text-white">saved on creative production</p>
                <p className="  text-white">
                  <span style={{ color: "#6dec93" }}>Imperfect Food</span>{" "}
                  Stories{" "}
                </p>
              </div>
            </div>
            <div className="card   bg-gray-800 text-neutral-content w-96">
              <div className="card-body items-center text-center">
                <h2 className=" text-white">COST EFFECTIVE</h2>
                <p className="text-7xl font-bold text-white">$250</p>
                <p className="  text-white">saved on creative production</p>
                <p className="  text-white">
                  <span style={{ color: "#6dec93" }}>Imperfect Food</span>{" "}
                  Stories{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 10th Section */}
        <div>
          <div className="hero  min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-gray-300  text-xl font-semibold">
                  AD DESIGN FAQS
                </h2>
                <h1 className="text-5xl font-bold text-white">
                  Answers to frequently asked questions
                </h1>
                <div
                  className="bg-cover px-5  py-6 mt-7 rounded-md"
                  style={{ backgroundImage: `url(${backImg})` }}
                >
                  <p className="py-6 text-white text-2xl font-semibold">
                    Find the right solution for you now
                  </p>
                  <Button1>
                    <p className="text-lg">Book a quick call</p>
                  </Button1>
                </div>
              </div>
              <div className="card   w-full max-w-sm shrink-0 shadow-2xl">
                <div>
                  <div className="collapse collapse-arrow ">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl text-white font-medium">
                      Click to open this one and close others
                    </div>
                    <div className="collapse-content text-gray-300">
                      <p>hello</p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow ">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl text-white font-medium">
                      Click to open this one and close others
                    </div>
                    <div className="collapse-content text-gray-300">
                      <p>hello</p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow ">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl text-white font-medium">
                      Click to open this one and close others
                    </div>
                    <div className="collapse-content text-gray-300">
                      <p>hello</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 11th Section */}
        <div className="py-32">
          <div className="grid lg:grid-cols-2  gap-7 px-4">
            <div
              style={{ backgroundImage: `url(${backImg})` }}
              className="relative lg:row-span-2 bg-cover h-full lg:h-screen rounded-sm h-64 w-full px-5 py-6 bg-gray-900"
            >
              <img
                className="lg:absolute animate-pulse lg:animate-none hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 lg:-top-20"
                src={cardicon1}
                alt=""
              />
              <h2 className="lg:mt-72 text-lg text-white ">PRICING</h2>
              <h2 className="text-2xl pb-7 text-white font-bold ">
                One Subscription for All of Your Creative Needs
              </h2>
              <div className="">
                <Button1>
                  <p className=" text-lg ">Get Started</p>
                </Button1>
              </div>
            </div>
            <div className=" h-64 rounded-sm w-full px-5 py-6 bg-gray-800">
              <h2 className="text-lg text-white ">PRICING</h2>
              <h2 className="text-2xl text-white font-bold ">
                One Subscription for All of Your Creative Needs
              </h2>
            </div>
            <div className=" h-64 rounded-sm w-full px-5 py-6 bg-gray-800">
              <h2 className="text-lg text-white ">PRICING</h2>
              <h2 className="text-2xl text-white font-bold ">
                One Subscription for All of Your Creative Needs
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
