import React from "react";

const Hero = () => {
  return (
    <div className="pt-36 flex flex-col justify-center items-center">
      <h2 className="text-center text-white text-5xl font-bold">
        The better way to
      </h2>
      <h2 className="text-center text-white text-5xl font-bold">
        get design done
      </h2>
      <p className="text-center mt-10 text-white text-lg text-gray-300">
        Get creative that performs. Plug into world-class design talent powered
      </p>
      <p className="text-center  text-white text-lg text-gray-300">
        by AI to make your team faster, more efficient, and scalable.
      </p>

      <div>
        <button
          style={{ background: "#E12167" }}
          className="btn border-none btn-wide text-lg hover:shadow-xl  hover:shadow-pink-400/25 text-white text-lg btn-primary mt-5 text-black"
        >
          Start Here
        </button>
      </div>
    </div>
  );
};

export default Hero;
