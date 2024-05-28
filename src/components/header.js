import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <>
      <header className="bg-transparent">
        <div className="container bg-transparent mx-auto flex justify-between items-center">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="links flex justify-between flex-1">
            <ul className="links-ul flex justify-center items-center flex-1 gap-7 text-slate-600 text-sm">
              <li>
                <button className="hover:text-primary">Pricing</button>
              </li>
              <li>
                <button className="hover:text-primary">Product</button>
              </li>
              <li>
                <button className="hover:text-primary">About Us</button>
              </li>
              <li>
                <button className="hover:text-primary">Careers</button>
              </li>
              <li>
                <button className="hover:text-primary">Community</button>
              </li>
            </ul>
            <ul className="btn">
              <li>
                <button className="bg-primary text-white rounded-3xl py-1 px-6 text-sm font-semibold hover:opacity-85">
                  Get Started
                </button>
              </li>
            </ul>
          </div>
          <div className="bars"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
