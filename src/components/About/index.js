import React from "react";
import headshot from "../../assets/images/emily.JPG";

function About() {
  return(
    <section className="my-5">
      <h3 id="about">About Me</h3>
      <div className="bio">
        <img src={headshot} className="headshot" alt='headshot' />
        <p>Located in Indianapolis, IN currently enrolled in the Butler University Executive Education Coding Boot Camp. Graduated from the University of Indianapolis in 2015 with a BA in Business Administration and Communication with a focus in Public Relations. Work experience includes copywriting and editing, graphic design, media relations, social media management and more in multiple industries such as film, nonprofit, B2B tech and healthcare.</p>
      </div>
    </section>
  );
}

export default About;