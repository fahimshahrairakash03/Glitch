import React from "react";
import booking from "../../assets/image/brands/booking.com.svg";
import reddit from "../../assets/image/brands/reddit.svg";
import coinbase from "../../assets/image/brands/coiinbase.svg";
import Marquee from "react-fast-marquee";

const CompanySlide = () => {
  return (
    <div className="py-24">
      <div>
        <Marquee className="mb-10">
          <img className="mx-5  opacity-15" src={reddit} alt="" />

          <img className="mx-5 mt-1 opacity-15" src={booking} alt="" />

          <img className="mx-5 opacity-15" src={coinbase} alt="" />
        </Marquee>
        <Marquee direction="right">
          <img className="mx-5  opacity-15" src={reddit} alt="" />

          <img className="mx-5 mt-1 opacity-15" src={booking} alt="" />

          <img className="mx-5 opacity-15" src={coinbase} alt="" />
        </Marquee>
      </div>
    </div>
  );
};

export default CompanySlide;
