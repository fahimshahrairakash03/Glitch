import React from "react";
import world from "../../../assets/image/lottie/world.json";
import Lottie from "lottie-react";
import star from "../../../assets/image/backgroud/stars-background.svg";

const WorkPageBanner = () => {
  return (
    <div>
      <div className="hero bg-transparent px-14 py-10  ">
        <div className="hero-content   flex-col lg:flex-row-reverse">
          <div className="sm:w-full lg:w-1/2">
            <Lottie animationData={world} loop={true}></Lottie>
          </div>
          <div className="w-1/2 ">
            <h1 className="text-4xl sm:text-center lg:text-left text-white font-bold">
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

export default WorkPageBanner;
