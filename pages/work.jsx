import React from "react";
import Hero from "../app/components/Hero";
import Portfoilio from "../app/components/Portfolio";

const work = () => {
  return (
    <div>
      <Hero
        heading="My Work"
        message="This is some of my recent work traveling the world."
      />
      <Portfoilio />
    </div>
  );
};

export default work;
