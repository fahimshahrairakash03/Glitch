import React from "react";
import world from "../../assets/image/lottie/world.json";
import Lottie from "lottie-react";

const AnimatedBanner = () => {
  return (
    <div style={{ backgroundColor: "#0b1926" }} className="px-5 py-10">
      <Lottie animationData={world} loop={true}></Lottie>
    </div>
  );
};

export default AnimatedBanner;
