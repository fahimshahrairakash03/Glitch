import React from "react";
import world from "../../assets/image/lottie/world.json";
import Lottie from "lottie-react";
import video2 from "../../assets/video/video2.mp4";
import { AutoplayVideo } from "@wethegit/react-autoplay-video";

const AnimatedBanner = () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  return (
    <div style={{ backgroundColor: "#1E1E1E" }} className="px-5 py-10">
      {/* <Lottie animationData={world} loop={true}></Lottie> */}
      <AutoplayVideo
        src={video2}
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
  );
};

export default AnimatedBanner;
