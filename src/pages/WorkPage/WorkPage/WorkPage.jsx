import React from "react";
import wrokflowVideo from "../../../assets/video/workflow.mp4";
import WorkPageBanner from "../WorkPageBanner/WorkPageBanner";
import star from "../../../assets/image/backgroud/stars-background.svg";
import ProjectsBanner from "../ProjectsBanner/ProjectsBanner";
import BlogBanner from "../BlogBanner/BlogBanner";
import "@wethegit/react-autoplay-video/style.css";
import { AutoplayVideo } from "@wethegit/react-autoplay-video";
import WorkpageBannerServices from "../WorkpageBannerServices/WorkpageBannerServices";

const WorkPage = () => {
  return (
    <div
      className="lg:pt-10"
      style={{ backgroundColor: "#0b1926", backgroundImage: `url(${star})` }}
    >
      <WorkPageBanner flexDir={"flex-row-reverse"}></WorkPageBanner>

      <WorkpageBannerServices></WorkpageBannerServices>
      <WorkPageBanner flexDir={"flex-row-reverse"}></WorkPageBanner>
      <WorkPageBanner flexDir={"flex-row"}></WorkPageBanner>
      {/* <ProjectsBanner></ProjectsBanner>
      <BlogBanner></BlogBanner> */}
    </div>
  );
};

export default WorkPage;
