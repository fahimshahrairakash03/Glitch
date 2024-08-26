import React from "react";
import ReactPlayer from "react-player";

const BannerTech = () => {
  return (
    <div className="pt-10" style={{ backgroundColor: "#0b1926" }}>
      <div className="hero bg-transparent px-14 ">
        <div className="hero-content   flex-col lg:flex-row-reverse">
          <div className=" rounded-lg shadow-2xl">
            <ReactPlayer url="https://www.youtube.com/watch?v=F1M5_RlVhGQ"></ReactPlayer>
          </div>
          <div className="w-1/2">
            <h1 className="text-5xl text-white font-bold">
              Plug into
              <span style={{ color: "#7d96fb" }}> the future of design</span>
            </h1>
            <p className="pb-1 pt-6 text-xl text-gray-300">
              AI is changing everything, especially design.
              <span className="text-white font-semibold">
                Superside is your shortcut to an AI-powered creative team.
              </span>
            </p>
            <p className="py-1 text-xl text-gray-300">
              Our creative management platform lets you submit projects, provide
              feedback and store assets to ensure a speedy and friendly
              experience throughout. We use hyper-efficient tools and processes
              and offer convenient integrations with your favorite apps like
              Slack, Asana, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTech;
