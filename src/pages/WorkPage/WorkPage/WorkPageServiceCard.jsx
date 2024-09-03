import { AutoplayVideo } from "@wethegit/react-autoplay-video";
import React from "react";
import wrokflowVideo from "../../../assets/video/workflow.mp4";

const WorkPageServiceCard = ({ service }) => {
  const { id, video, title, details } = service;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  return (
    <div className="">
      <div className="lg:flex justify-evenly items-center px-2">
        <div className="lg:w-3/4 ">
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
        <div className=" lg:w-1/2  px-4 ">
          <p className="text-white text-3xl font-bold py-4  ">{title}</p>
          <p className="text-gray-300">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkPageServiceCard;
