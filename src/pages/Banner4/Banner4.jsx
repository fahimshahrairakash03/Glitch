import React from "react";
import ServiceBannerCard from "./ServiceBannerCard";
import Marquee from "react-fast-marquee";

const Banner4 = () => {
  const services = [
    {
      id: "1",
      img: "https://cdn.sanity.io/images/k0dlbavy/production/1c45dcca2661929cef49d269691257b54e483274-592x448.png?w=592",
      background:
        "https://cdn.sanity.io/images/k0dlbavy/production/60d6577d55258e07829cfacadb5decda0027d197-983x494.svg?w=64",
      title: "Concept Creation",
      details:
        "Elevate your brand with Superside's concept creation services. We deliver 360 campaigns and captivating creative concepts that resonate with your audience and drive success.",
    },
    {
      id: "2",
      img: "https://cdn.sanity.io/images/k0dlbavy/production/17b395b4efa2b24a342930d2746e43ab7707b39c-1632x1962.png?w=886&auto=format",
      background:
        "https://cdn.sanity.io/images/k0dlbavy/production/cd66188553994afd3eef92bb948b20e820c8c11a-983x494.svg?w=983&auto=format",
      title: "Motion Design",
      details:
        "motion graphics designed to enhance you website, digital campaigns, presentation and ads.",
    },
    {
      id: "3",
      img: "https://cdn.sanity.io/images/k0dlbavy/production/3a3bb71a7bf45884df3cdba954815b97656eadef-592x448.png?w=592",
      background:
        "https://cdn.sanity.io/images/k0dlbavy/production/a0f6932bea57857390ff53d6bf82a7cebaa758ba-983x494.svg?w=983&auto=format",
      title: "Social Media Creation",
      details:
        "original design for your social media channels. Static, animated or video, from instagram to facebook or youtube",
    },
    {
      id: "4",
      img: "https://cdn.sanity.io/images/k0dlbavy/production/2c2f3a478dc9d458ab4fd678a54ab25854b6ea69-592x524.png?w=592",
      background:
        "https://cdn.sanity.io/images/k0dlbavy/production/60d6577d55258e07829cfacadb5decda0027d197-983x494.svg?w=64",
      title: "Ebooks & Reports Design",
      details: "ebboks and reports will design that demands attention",
    },
  ];
  return (
    <div className="py-20">
      <div className="mb-10">
        <p className="text-center text-white text-xl">
          FULL STACK CREATIVE SERVICE
        </p>
        <p className="text-center  text-white py-1 text-4xl font-bold">
          With any subscription, you gain access to{" "}
          <span style={{ color: "#5CC5C6" }}>all our</span>
        </p>
        <p
          style={{ color: "#5CC5C6" }}
          className="text-center  text-white text-3xl font-bold"
        >
          creative services
        </p>
      </div>
      <div className="">
        <Marquee pauseOnHover>
          {services.map((service) => (
            <ServiceBannerCard
              key={service.id}
              service={service}
            ></ServiceBannerCard>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Banner4;
