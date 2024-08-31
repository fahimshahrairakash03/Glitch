import React from "react";
import proImg1 from "../../../assets/image/projects/project1.png";
import proImg2 from "../../../assets/image/projects/project2.png";
import proImg3 from "../../../assets/image/projects/project3.png";
import proImg4 from "../../../assets/image/projects/project4.png";
import proImg5 from "../../../assets/image/projects/project5.png";
import proImg6 from "../../../assets/image/projects/project6.png";
import proImg7 from "../../../assets/image/projects/project7.png";
import proImg8 from "../../../assets/image/projects/project8.png";
import { IoIosArrowForward } from "react-icons/io";

const ProjectsBanner = () => {
  const projects = [
    {
      img: proImg2,
      name: "WebFlow",
    },
    {
      img: proImg3,
      name: "WebFlow",
    },
    {
      img: proImg4,
      name: "WebFlow",
    },

    {
      img: proImg6,
      name: "WebFlow",
    },
    {
      img: proImg7,
      name: "WebFlow",
    },
    {
      img: proImg8,
      name: "WebFlow",
    },
  ];
  return (
    <div className="px-4 py-20">
      <h2 className="text-xl text-white pb-1">FEATURED PROJECTS</h2>
      <h2 className="text-3xl text-white font-bold pb-5">PROJECTS</h2>
      <p className="text-lg text-gray-300 pb-4">
        Reddit’s brand creative team, OrangeRed, needed to scale to keep up with
        the company's rapid growth. They required a solution that could quickly
        act as an extension of their team.
      </p>
      <h2 className="text-xl text-white pb-5">PROJECTS</h2>

      <div className="grid lg:grid-cols-3  pb-10 gap-2">
        {projects.map((project) => (
          <img
            className="w-96 h-56 rounded-lg transition ease-in-out delay-150"
            src={project.img}
          ></img>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="px-6 py-3 border-white border-2 bg-transparent bottom-2  text-white cursor-pointer hover:bg-transparent  ">
          {" "}
          <p className="hover:animate-bounce"> Load More</p>
        </button>
      </div>
    </div>
  );
};

export default ProjectsBanner;
