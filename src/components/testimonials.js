import React from "react";

import anishaAvatar from "../images/avatar-anisha.png";
import aliAvatar from "../images/avatar-ali.png";
import richardAvatar from "../images/avatar-richard.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anisha Li",
      avatar: anishaAvatar, 
      quote:
        "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    },
    {
      name: "Ali Bravo",
      avatar: aliAvatar,
      quote:
        "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
    },
    {
      name: "Richard Watts",
      avatar: richardAvatar,
      quote:
        "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
    },
  ];

  return (
    <section className="mt-10">
      <div className="container">
        <div className="title text-center mb-24 mt-[-40px] text-2xl sm:text-3xl md:text-4xl">
          What they’ve said
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-14">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-5 rounded text-center bg-gray-100">
              <Avatar src={testimonial.avatar} alt={testimonial.name} />
              <h3 className="my-4">{testimonial.name}</h3>
              <p className="max-w-md mx-auto">{testimonial.quote}</p>
            </div>
          ))}
        </div>
        <div className="btn my-16 mx-auto text-center">
          <button className="bg-primary text-white rounded-3xl py-2 px-6 text-sm font-semibold hover:opacity-85">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

const Avatar = ({ src, alt }) => {
  return <img className="mx-auto mt-[-60px] w-20" src={src} alt={alt} />;
};

export default Testimonials;
