import React from "react";
import FeatureCard from "./FeatureCard";
import img from "../../assets/image/service/gray.svg";
import Banner4 from "../Banner4/Banner4";

const Banner3 = () => {
  const featuresCard = [
    {
      id: "1",
      title: "Top 1% of global creative talent",
      details:
        "We're not restricted by borders. Top-tier talent, experts in AI Creative, equals consistently high-quality work for your brand.",
      img: "https://cdn.sanity.io/images/k0dlbavy/production/de128aec1b4d60ebbd349b911062096d4e8d2082-262x149.svg?w=600",
    },
    {
      id: "2",
      title: "Ultra-fast turnaround times",
      details:
        "With dedicated project managers, collaborative online tools and the expert use of AI, projects can be completed in as little as 12 hours.",
      img: "https://cdn.sanity.io/images/k0dlbavy/production/7c6469a57a7e50fbb197f69138917a12fa0c52b4-262x146.svg?w=600",
    },
    {
      id: "3",
      title: "Flexible subscription model",
      details:
        "Access a broad range of services, pivot as needed and work more efficiently with AI-enhanced creative, so that you never waste a dollar.",
      img: "https://cdn.sanity.io/images/k0dlbavy/production/8135299493876c33d94152a35b4f7fc6d8cb7fb0-1696x944.svg?w=600&auto=format",
    },
  ];
  return (
    <div className="h-full bg-cover" style={{ backgroundColor: "#1E1E1E" }}>
      {/* style={{ backgroundImage: `url(${img})` }} */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4  py-20">
        {featuresCard.map((feature) => (
          <FeatureCard key={feature.id} feature={feature}></FeatureCard>
        ))}
      </div>
      <Banner4></Banner4>
    </div>
  );
};

export default Banner3;
