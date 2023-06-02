import React from "react";
import Hero from "../app/components/Hero";
import Contact from "../app/components/Contact";


const contact = () => {
  return (
    <div>
      <Hero
        heading="Contact"
        message="Submit the form below for more work and quotes."
      />
      <Contact />
    </div>
  );
};

export default contact;
