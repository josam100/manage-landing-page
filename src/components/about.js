import React from "react";

const CardContent = ({ num, title, description }) => {
  return (
    <div className="card flex gap-3 mb-10">
      <span className="num-box bg-primary pt-1 px-4 text-white text-sm rounded-3xl max-h-7">
        {num}
      </span>
      <div className="info">
        <h3 className="text-md mb-3">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const AboutContent = () => {
  return (
    <article className="mt-12 about-section">
      <div className="container about flex flex-col gap-20 md:flex-row md:gap-0 pb-14">
        <div className="info flex-1">
          <h1 className="text-2xl mb-3 text-center md:text-left">What’s different about Manage?</h1>
          <p className="max-w-max md:max-w-96 mx-5 md:mx-0 text-center md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="cards flex-1">
          <CardContent
            num="01"
            title="Track company-wide progress"
            description="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
          />
          <CardContent
            num="02"
            title="Advanced built-in reports"
            description="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
          />
          <CardContent
            num="03"
            title="Everything you need in one place"
            description="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
          />
        </div>
      </div>
    </article>
  );
};

const About = () => {
  return <AboutContent />;
};

export default About;
