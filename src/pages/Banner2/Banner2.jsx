import React from "react";
import ReactPlayer from "react-player";
import world from "../../assets/image/lottie/world.json";
import Lottie from "lottie-react";
import { AutoplayVideo } from "@wethegit/react-autoplay-video";
import video from "../../assets/video/workflow.mp4";

const Banner2 = () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  return (
    <div className="">
      <div className="hero bg-transparent px-14 ">
        <div className="hero-content   flex-col lg:flex-row-reverse">
          <div className="sm:w-full lg:w-1/2">
            {/* <ReactPlayer url="https://www.youtube.com/watch?v=F1M5_RlVhGQ"></ReactPlayer> */}
            <div className="lg:hidden">
              {" "}
              <Lottie animationData={world} loop={true}></Lottie>
            </div>
            <AutoplayVideo
              src={video}
              posterImg="your-poster-image.jpg"
              description="This is a description of the video."
              prefersReducedMotion={prefersReducedMotion}
              style={{ "--aspect-ratio": "calc((9 / 16) * 100%)" }}
              renderReducedMotionFallback={() => (
                <img
                  src="your-fallback-image.jpg"
                  alt="Description of the fallback image."
                />
              )}
            />
          </div>
          <div className="w-1/2">
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

export default Banner2;
