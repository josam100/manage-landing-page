import React from "react";

const Simplify = () => {
  return (
    <div className="simplify bg-primary">
      <div className="container py-12 flex items-center text-center justify-between flex-col gap-8 sm:gap-0 sm:flex-row">
        <h1 className="text-white text-3xl">
          Simplify how your team <br /> works today.
        </h1>
        <button className="bg-white text-slate-800 rounded-3xl max-h-7 py-1 px-6 text-sm font-semibold hover:opacity-85">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Simplify;
