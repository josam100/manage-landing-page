import React, { useState } from "react";
import logo from "../images/logo.svg";
import img from "../images/illustration-intro.svg";
import barsIcon from "../images/icon-hamburger.svg";

const HeroSection = () => {
  const [linksActive, setLinksActive] = useState(false);

  const handleBarsClick = () => {
    setLinksActive(!linksActive);
  };

  return (
    <div className="hero-section">
      <div
        className={`black-box ${
          linksActive ? "block" : "hidden"
        } w-full min-h-svh fixed top-0 left-0`}
      ></div>
      <header className="bg-white fixed top-0 w-full border-b-2 border-red-100">
        <div className="container bg-transparent mx-auto flex justify-between items-center py-6">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div
            className={`links links-container ${
              linksActive ? "links-active" : "hidden"
            } justify-between flex-1 md:flex`}
          >
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
          <div className="bars md:hidden" onClick={handleBarsClick}>
            <img src={barsIcon} alt="bars" />
          </div>
        </div>
      </header>
      <main>
        <div className="container flex flex-col-reverse gap-10 md:gap-0 md:flex-row items-center py-10">
          <div className="flex-1 flex flex-col gap-7 items-center md:items-start ">
            <h1
              className="text-4xl font-semibold text-center p-4 md:p-0 md:text-left xl:text-5xl"
              style={{ lineHeight: 1.1 }}
            >
              Bring everyone together to build better products.
            </h1>
            <p className="max-w-max md:max-w-96 mx-5 md:mx-0 text-center md:text-left">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button className="bg-primary text-white rounded-3xl py-2 px-5 text-sm font-semibold m-auto md:m-0 hover:opacity-85">
              Get Started
            </button>
          </div>
          <div className="flex-1">
            <img src={img} alt="img" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
