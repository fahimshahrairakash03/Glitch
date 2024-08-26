import React from "react";
import ReactPlayer from "react-player";

const Banner2 = () => {
  return (
    <div>
      <div className="hero bg-transparent px-14 ">
        <div className="hero-content   flex-col lg:flex-row-reverse">
          <ReactPlayer url="https://www.youtube.com/watch?v=F1M5_RlVhGQ"></ReactPlayer>
          <div className="w-1/2">
            <h1 className="text-4xl text-white font-bold">
              <span style={{ color: "#7d96fb" }}>
                The best creative partner{" "}
              </span>
              you will ever have
            </h1>
            <p className="pb-1 pt-6 text-lg text-gray-300">
              Superside is a{" "}
              <span className="text-white font-semibold">
                creative subscription service
              </span>
              , trusted by the world's top brands to get exceptional design
              faster, more reliably and at scale.
            </p>
            <p className="py-1 text-lg text-gray-300">
              Work with a global team of strategists and designers, trained on
              the latest AI tools, without the cost and hassle of working with
              traditional agencies and freelancers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
