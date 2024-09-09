import React from "react";
import Button1 from "../../components/Buttons/Button1";
import Button2 from "../../components/Buttons/Button2";
import FormModal from "../../components/FormModal/FormModal";

const Hero = () => {
  return (
    <div className="pt-36 flex flex-col justify-center items-center">
      <h2 className="text-center text-white text-5xl font-bold">
        The better way to
      </h2>
      <h2 className="text-center text-white text-5xl font-bold">
        get design done
      </h2>
      <p className="text-center mt-10 text-white text-lg text-gray-300">
        Get creative that performs. Plug into world-class design talent powered
      </p>
      <p className="text-center  text-white text-lg text-gray-300">
        by AI to make your team faster, more efficient, and scalable.
      </p>

      <div className="lg:flex mt-6">
        <Button1>
          <FormModal btnName={"Get In Touch"}></FormModal>
        </Button1>
        <Button2>
          <FormModal btnName={"Join Us"}></FormModal>
        </Button2>
      </div>
    </div>
  );
};

export default Hero;
