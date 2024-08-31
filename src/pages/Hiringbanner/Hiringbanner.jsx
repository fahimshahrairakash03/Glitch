import React from "react";
import icon1 from "../../assets/image/icon/cardIcon1.png";
import icon2 from "../../assets/image/icon/icon2.png";

const Hiringbanner = () => {
  return (
    <div style={{ backgroundColor: "#0b1926" }} className="px-5 py-10">
      <div>
        <p className="text-gray-300 text-center text-xl font-semibold">
          THE NUMBERS DON'T LIE
        </p>
        <h2 className="text-white text-center text-5xl font-bold">
          See real{" "}
          <span style={{ color: "#7d96fb" }}>quality & real results</span>
        </h2>
      </div>

      <div className="pt-16 gap-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div className="card   bg-gray-800 text-neutral-content w-96">
          <div className="card-body items-center text-center">
            <h2 className=" text-white">COST EFFECTIVE</h2>
            <p className="text-7xl font-bold text-white">$250</p>
            <p className="  text-white">saved on creative production</p>
            <p className="  text-white">
              <span style={{ color: "#6dec93" }}>Imperfect Food</span> Stories{" "}
            </p>
          </div>
        </div>
        <div className="card   bg-gray-800 text-neutral-content w-96">
          <div className="card-body items-center text-center">
            <h2 className=" text-white">COST EFFECTIVE</h2>
            <p className="text-7xl font-bold text-white">$250</p>
            <p className="  text-white">saved on creative production</p>
            <p className="  text-white">
              <span style={{ color: "#6dec93" }}>Imperfect Food</span> Stories{" "}
            </p>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#4f4fc7" }}
          className="card relative brightness-125 hover:border-2 shadow-xl shadow-indigo-500/50	  bg-gray-800 text-neutral-content w-96"
        >
          <img className="absolute w-52 -top-10 " src={icon1} alt="" />
          <div className="card-body items-center text-center">
            <h2 className=" text-white">COST EFFECTIVE</h2>
            <p className="text-7xl font-bold text-white">$250</p>
            <p className="  text-white">saved on creative production</p>
            <p className="  text-white">
              <span style={{ color: "#6dec93" }}>Imperfect Food</span> Stories{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-7 gap-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div
          style={{ backgroundColor: "#4f4fc7" }}
          className="card relative brightness-125 hover:border-2 shadow-xl shadow-indigo-500/50	  bg-gray-800 text-neutral-content w-96"
        >
          <img
            className="absolute w-44 left-0 -bottom-20 "
            src={icon2}
            alt=""
          />
          <div className="card-body items-center text-center">
            <h2 className=" text-white">COST EFFECTIVE</h2>
            <p className="text-7xl font-bold text-white">$250</p>
            <p className="  text-white">saved on creative production</p>
            <p className="  text-white">
              <span style={{ color: "#6dec93" }}>Imperfect Food</span> Stories{" "}
            </p>
          </div>
        </div>
        <div className="card   bg-gray-800 text-neutral-content w-96">
          <div className="card-body items-center text-center">
            <h2 className=" text-white">COST EFFECTIVE</h2>
            <p className="text-7xl font-bold text-white">$250</p>
            <p className="  text-white">saved on creative production</p>
            <p className="  text-white">
              <span style={{ color: "#6dec93" }}>Imperfect Food</span> Stories{" "}
            </p>
          </div>
        </div>
        <div className="card   bg-gray-800 text-neutral-content w-96">
          <div className="card-body items-center text-center">
            <h2 className=" text-white">COST EFFECTIVE</h2>
            <p className="text-7xl font-bold text-white">$250</p>
            <p className="  text-white">saved on creative production</p>
            <p className="  text-white">
              <span style={{ color: "#6dec93" }}>Imperfect Food</span> Stories{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hiringbanner;
