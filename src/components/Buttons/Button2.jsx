import React from "react";

const Button2 = ({ children }) => {
  return (
    <div>
      <button className="btn hidden lg:block bg-transparent  border-cyan-500 border-2 text-lg hover:border-cyan-500  hover:shadow-cyan-500/25 hover:bg-cyan-500  text-white">
        {children}
      </button>
    </div>
  );
};

export default Button2;
