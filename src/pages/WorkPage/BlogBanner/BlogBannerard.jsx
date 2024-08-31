import React from "react";

const BlogBannerard = ({ content }) => {
  const { img, title, details } = content;
  return (
    <div>
      <div className="card border-white hover:border-2 p-2 rounded-lg bg-transparent w-96 ">
        <img className="h-[200px]" src={img} />

        <div className="py-5">
          <h2 className="text-gray-300 pb-4 text-lg">{title.toUpperCase()}</h2>
          <p className="text-white text-3xl font-bold pl-0 ">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogBannerard;
