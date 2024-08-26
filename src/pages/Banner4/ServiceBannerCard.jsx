import React from "react";

const ServiceBannerCard = ({ service }) => {
  const { img, background, title, details } = service;
  return (
    <div className="mx-2">
      <div className="card bg-base-100 image-full w-96 h-[580px]  shadow-xl">
        <figure>
          <img src={background} alt="Shoes" />
        </figure>

        <div className="card-body">
          <img className="h-72" src={img} alt="" />
          <h2 className="text-4xl text-center font-bold text-white">{title}</h2>
          <p className="text-center text-xl">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBannerCard;
