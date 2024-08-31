import React from "react";
import blogImg1 from "../../../assets/image/Blogs/blog1.png";
import blogImg2 from "../../../assets/image/Blogs/blog2.png";
import blogImg3 from "../../../assets/image/Blogs/blog3.png";
import BlogBannerard from "./BlogBannerard";

const BlogBanner = () => {
  const contents = [
    {
      id: "1",
      img: blogImg1,
      title: "Case Study",
      details: "How PointCard Increased CTR 3.5X...",
    },
    {
      id: "2",
      img: blogImg2,
      title: "Case Study",
      details: "How Shopify Built a Growth Workshop to...",
    },
    {
      id: "3",
      img: blogImg3,
      title: "Case Study",
      details: "Turning Fluctuating Design Needs into a...",
    },
  ];
  return (
    <div className="px-4 py-20">
      <h2 className="text-xl text-white px-2 pb-1 pb-8">FEATURED PROJECTS</h2>
      <div className="grid lg:grid-cols-3  pb-10 gap-2">
        {contents.map((content) => (
          <BlogBannerard key={content.id} content={content}></BlogBannerard>
        ))}
      </div>
    </div>
  );
};

export default BlogBanner;
