import React from "react";
import WorkPageServiceCard from "../WorkPage/WorkPageServiceCard";
import video1 from "../../../assets/video/Workvideo1.mp4";
import video2 from "../../../assets/video/Workvideo2.mp4";
import video3 from "../../../assets/video/Workvideo3.mp4";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

const WorkpageBannerServices = () => {
  const allServices = [
    {
      id: "item1",
      video: video1,
      title: "Reddit",
      details:
        "Reddit’s brand creative team, OrangeRed, needed to scale to keep up with the company's rapid growth. They required a solution that could quickly act as an extension of their team.",
    },
    {
      id: "item2",
      video: video2,
      title: "Reddit",
      details:
        "Reddit’s brand creative team, OrangeRed, needed to scale to keep up with the company's rapid growth. They required a solution that could quickly act as an extension of their team.",
    },
    {
      id: "item3",
      video: video3,
      title: "Reddit",
      details:
        "Reddit’s brand creative team, OrangeRed, needed to scale to keep up with the company's rapid growth. They required a solution that could quickly act as an extension of their team.",
    },
  ];

  return (
    <div className="py-10">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {allServices.map((service) => (
          <SwiperSlide>
            {" "}
            <WorkPageServiceCard
              key={service.id}
              service={service}
            ></WorkPageServiceCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkpageBannerServices;
