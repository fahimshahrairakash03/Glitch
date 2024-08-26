import React from "react";
import image from "../../assets/image/footer/homeFooter.png";

const FooterCard = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="px-3 py-10 bg-cover w-4/5 mx-auto rounded-md "
      >
        <div>
          <p className="py-2 text-white text-lg">20X FASTER THAN HIRING</p>
          <h1 className="text-4xl text-white font-bold">
            Efficient. Scalable. Reliable.
          </h1>
          <div className="pt-10 pb-4">
            <button
              style={{ background: "#5bff87" }}
              className="btn btn-primary text-black "
            >
              Team up with us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
