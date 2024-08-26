import React from "react";
import bannerImg from "../../assets/image/banner.png";

const Navbar = () => {
  const menuItem = (
    <>
      <li>
        <a className="text-white">Home</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar sticky bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menuItem}
            </ul>
          </div>
          <a className="btn btn-ghost text-white text-xl">GLITCH</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>
        <div className="navbar-end">
          <a
            style={{ background: "#5bff87" }}
            className="btn mr-2 border-none hover:shadow-xl  hover:shadow-green-400/25"
          >
            Book a Demo
          </a>
          <button className="btn bg-transparent  border-white text-white">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
