import React from "react";
import bannerImg from "../../assets/image/banner.png";
import { Link } from "react-router-dom";
import Button1 from "../Buttons/Button1";
import Button2 from "../Buttons/Button2";
import FormModal from "../FormModal/FormModal";

const Navbar = () => {
  const menuItem = (
    <>
      <Link to="/">
        <li>
          <a className="text-white">Home</a>
        </li>
      </Link>
      <Link to="/work">
        <li>
          <a className="text-white">Our Work</a>
        </li>
      </Link>
      <Link to="/service">
        <li>
          <a className="text-white">Service</a>
        </li>
      </Link>
      <Link to="/service">
        <li>
          <a className="text-white">Service</a>
        </li>
      </Link>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10   bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
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
              className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menuItem}
              <button
                style={{ background: "#E12167" }}
                className="btn my-2 mr-2 border-none text-white text-lg hover:shadow-xl  hover:shadow-pink-400/25"
              >
                Book a Demo
              </button>
              <button className="btn bg-transparent  border-cyan-500 border-2 text-lg hover:border-cyan-500  hover:shadow-cyan-500/25 hover:bg-cyan-500  text-white">
                Sign In
              </button>
            </ul>
          </div>
          <a className="btn btn-ghost text-white text-xl">GLITCH</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
          <Button1>
            <FormModal btnName={"Get In Touch"}></FormModal>
          </Button1>
          <Button2>
            <FormModal btnName={"Join Us"}></FormModal>
          </Button2>
        </div>
        {/* <div className="navbar-end">
          <button
            style={{ background: "#E12167" }}
            className="btn hidden lg:block mr-2 border-none text-white text-lg hover:shadow-xl  hover:shadow-pink-400/25"
          >
            Book a Demo
          </button>

          <button className="btn hidden lg:block bg-transparent  border-cyan-500 border-2 text-lg hover:border-cyan-500  hover:shadow-cyan-500/25 hover:bg-cyan-500  text-white">
            Sign In
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
