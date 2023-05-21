import React from "react";
import AboutSection from "../sections/About/AboutSection";

function About() {
  const title = "About Us";
  const subtitle = "Our Purpose";

  return (
    <div>
      <AboutSection title={title} subtitle={subtitle} />
    </div>
  );
}

export default About;
