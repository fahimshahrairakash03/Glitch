import React from "react";

const Button1 = ({ children }) => {
  return (
    <div>
      <button
        style={{ background: "#5bff87" }}
        className="btn mr-2 border-none hover:shadow-xl  hover:shadow-green-400/25"
      >
        {children}
      </button>
    </div>
  );
};

export default Button1;
