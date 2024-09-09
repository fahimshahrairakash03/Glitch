import React from "react";

const Button1 = ({ children }) => {
  return (
    <div>
      <button
        style={{ background: "#E12167" }}
        className="btn hidden lg:block mr-2 border-none text-white text-lg hover:shadow-xl  hover:shadow-pink-400/25"
      >
        {children}
      </button>
    </div>
  );
};

export default Button1;
