import React from "react";
import headshot from "../../assets/images/emily.JPG";

function About() {
  return(
    <section className="my-5">
      <h3 id="about">About Me</h3>
      <div className="bio">
        <img src={headshot} className="headshot" alt='headshot' />
        <p>Web developer working to build thoughtful user experiences. Recently earned a certificate in full stack web development from Butler University Executive Education Coding Boot Camp gaining skills in JavaScript, CSS, React.js, responsive web design and more. Known as a creative thinker passionate about continuing education and developing innovative apps. In a recent project, I worked on a team of five to develop a single-page MERN app that helps user plan their perfect night by helping select a movie, local eatery and drink. I am looking forward to building positive user experiences as part of a team in this industry.</p>
      </div>
    </section>
  );
}

export default About;