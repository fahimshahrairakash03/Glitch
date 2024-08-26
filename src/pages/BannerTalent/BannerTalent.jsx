import React from "react";
import ReactPlayer from "react-player";
import world from "../../assets/image/lottie/world.json";
import Lottie from "lottie-react";

const BannerTalent = () => {
  return (
    <div className="pt-10" style={{ backgroundColor: "#0b1926" }}>
      <div className="hero bg-transparent px-14 ">
        <div className="hero-content   flex-col lg:flex-row">
          <div className=" w-1/2  rounded-lg shadow-2xl">
            {/* <ReactPlayer url="https://www.youtube.com/watch?v=F1M5_RlVhGQ"></ReactPlayer> */}
            <Lottie animationData={world} loop={true} />
          </div>
          <div className="w-1/2 mx-5">
            <h1 className="text-xl text-white font-semibold">OUR PEOPLE</h1>
            <h1 className="text-4xl text-white font-bold">
              World-class talent
              <span style={{ color: "#7d96fb" }}> with no borders</span>
            </h1>
            <p className="pb-1 pt-6 text-xl text-gray-300">
              Work with the top 1% of global creative talent, elite designers,
              illustrators, animators, AI technologists and more, recruited from
              the best brands and agencies.
            </p>
            <p className="py-1 text-justify text-xl text-gray-300">
              With support from a dedicated creative project manager who’ll
              handle your projects from start to finish and a customer success
              manager who’ll ensure you make the most of your subscription.
            </p>
            <button
              style={{ background: "#5bff87" }}
              className="btn border-none btn-wide text-lg hover:shadow-xl  hover:shadow-green-400/25 btn-primary mt-5 text-black"
            >
              Meet our people
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTalent;
