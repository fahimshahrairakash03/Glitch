import { AutoplayVideo } from "@wethegit/react-autoplay-video";
import React from "react";
import wrokflowVideo from "../../../assets/video/workflow.mp4";

const WorkPageServiceCard = () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  return (
    <div>
      <div className="lg:flex justify-center items-center">
        <div className="lg:w-1/2  ">
          <AutoplayVideo
            src={wrokflowVideo}
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
        <div className="flex justify-center items-center">
          <p className="text-white text-3xl font-bold  ">asdasdasdasd</p>
        </div>
      </div>
    </div>
  );
};

export default WorkPageServiceCard;
