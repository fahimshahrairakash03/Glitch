import React from "react";

const FeatureCard = ({ feature }) => {
  const { title, details, img } = feature;
  return (
    <div>
      <div className="card card-compact bg-transparent w-96 ">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
          <p className="text-lg text-gray-400">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
