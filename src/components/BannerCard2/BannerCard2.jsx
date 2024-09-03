import React from "react";

const BannerCard2 = (props) => {
  const { id, img, title, details } = props.prop;
  return (
    <div>
      <div className="flex flex-col ">
        <img src={img} alt="" />
        <div>
          <h1 className="text-2xl text-white font-bold py-2">{title}</h1>
          <p className="text-xl text-balance text-gray-400 ">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default BannerCard2;
