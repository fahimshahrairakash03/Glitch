import React from "react";
import FooterCard from "../../pages/FooterCard/FooterCard";

const FooterContainer = ({ children }) => {
  return (
    <div
      style={{ backgroundColor: "#0b1926" }}
      className="px-2 pb-6 pt-72 h-full relative"
    >
      <div className="absolute top-32 right-1 w-full ">
        <FooterCard></FooterCard>
      </div>

      {children}
    </div>
  );
};

export default FooterContainer;
