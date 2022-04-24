import React from "react";

// class DownloadLink extends React.Component {
//   render() {
//       return (
//           <a href={this.props.src} download>{this.props.children}</a>
//       )
//   }
// }


// class Resume extends React.Component {
//   render() {
//       return (
//           <DownloadLink src="../../assets/resume/emily-darr-resume.pdf">Click Here</DownloadLink>
//       )
//   }
// }

function Resume() {
  return(
    <section className="my-5">
      <h3>Resume</h3>
      <div className="resume">
        <a href='https://github.com/emilyadarr/portfolio-react/raw/main/src/assets/resume/emily-darr-resume.pdf' download>Download my resume</a>
        <h4>Front-end</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Handlebars.js</li>
        </ul>
        <h4>Back-end</h4>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST APIs</li>
          <li>GraphQL</li>
          <li>Cookies, Local storage</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;