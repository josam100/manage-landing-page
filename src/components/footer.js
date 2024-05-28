import React from "react";
import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="footer bg-slate-950 py-12">
      <div className="container flex flex-col items-center justify-between gap-12 sm:gap-12 md:flex-row">
        <div className="flex flex-col mr-5">
          <img src={logo} alt="logo" />
          <ul className="gap-3 flex mt-10">
            <img src={facebook} alt="logo" />
            <img src={youtube} alt="logo" />
            <img src={twitter} alt="logo" />
            <img src={pinterest} alt="logo" />
            <img src={instagram} alt="logo" />
          </ul>
        </div>
        <ul className="grid grid-cols-3 gap-x-5 gap-y-3 place-items-center">
          <li>
            <button className="text-white">Home</button>
          </li>
          <li>
            <button className="text-white">Pricing</button>
          </li>
          <li>
            <button className="text-white">Products</button>
          </li>
          <li>
            <button className="text-white">About Us</button>
          </li>
          <li>
            <button className="text-white">Careers</button>
          </li>
          <li>
            <button className="text-white">Community</button>
          </li>
          <li>
            <button className="text-white">Privacy-Policy</button>
          </li>
        </ul>
        <div>
          <input
            type="text"
            className="bg-white text-primary text-sm p-2 rounded-2xl ml-2"
          />
          <button className="bg-primary text-white text-sm p-2 rounded-2xl ml-2">
            Go
          </button>
          <p className="mt-8 text-center">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
