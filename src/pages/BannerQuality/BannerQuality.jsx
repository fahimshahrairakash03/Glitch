import React from "react";
import cardBanner from "../../assets/image/backgroud/cardBanner.png";
import Lottie from "lottie-react";
import world from "../../assets/image/lottie/world.json";

const BannerQuality = () => {
  return (
    <div style={{ backgroundColor: "#1E1E1E" }} className="px-5 py-10">
      <div>
        <p className="text-gray-300 text-center text-xl font-semibold">
          THE NUMBERS DON'T LIE
        </p>
        <h2 className="text-white text-center text-5xl font-bold">
          See real{" "}
          <span style={{ color: "#5CC5C6" }}>quality & real results</span>
        </h2>
      </div>

      <div className="pt-16 grid gap-5  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div className="card brightness-200 shadow-lg  shadow-indigo-500/50 bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img className="z-0" src={cardBanner} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-5xl font-bold text-white">Need Speed?</h2>
            <p>
              Boost capacity and production like who achieved a 600% increase in
              output They accessed out end-to-end animation process, producing a
              stellar brand video{" "}
              <span style={{ color: "#E12167" }}>in record time</span>.
            </p>
          </div>
        </div>

        <div
          style={{ backgroundColor: "#303030" }}
          className="card    text-neutral-content w-96"
        >
          <div className="card-body items-center text-center">
            <h2 className=" text-white">COST EFFECTIVE</h2>
            <p className="text-7xl font-bold text-white">$250</p>
            <p className="  text-white">saved on creative production</p>
            <p className="  text-white">
              <span style={{ color: "#E12167" }}>Imperfect Food</span> Stories{" "}
            </p>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#303030" }}
          className="card   bg-gray-800 text-neutral-content w-96"
        >
          <div className="card-body items-center text-center">
            <h2 className=" text-white">COST EFFECTIVE</h2>
            <p className="text-7xl font-bold text-white">$250</p>
            <p className="  text-white">saved on creative production</p>
            <p className="  text-white">
              <span style={{ color: "#E12167" }}>Imperfect Food</span> Stories{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-7 grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div
          style={{ backgroundColor: "#303030" }}
          className="card   bg-gray-800 text-neutral-content w-96"
        >
          <div className="card-body items-center text-center">
            <h2 className=" text-white">COST EFFECTIVE</h2>
            <p className="text-7xl font-bold text-white">$250</p>
            <p className="  text-white">saved on creative production</p>
            <p className="  text-white">
              <span style={{ color: "#E12167" }}>Imperfect Food</span> Stories{" "}
            </p>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#303030" }}
          className="card   bg-gray-800 text-neutral-content w-96"
        >
          <div className="card-body items-center text-center">
            <h2 className=" text-white">COST EFFECTIVE</h2>
            <p className="text-7xl font-bold text-white">$250</p>
            <p className="  text-white">saved on creative production</p>
            <p className="  text-white">
              <span style={{ color: "#E12167" }}>Imperfect Food</span> Stories{" "}
            </p>
          </div>
        </div>
        <div className="">
          <div className="card bg-base-100 image-full w-96 shadow-xl">
            <figure>
              <img className="z-0" src={cardBanner} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="text-5xl font-bold text-white">Need Speed?</h2>
              <p>
                Boost capacity and production like who achieved a 600% increase
                in output They accessed out end-to-end animation process,
                producing a stellar brand video{" "}
                <span style={{ color: "#E12167" }}>in record time</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerQuality;
