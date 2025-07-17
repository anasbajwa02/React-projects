import React from 'react'
import "./about.css"
const About = () => {
  return (
  <div className="about-container">
    <div className="about-details">
      <h2>About Me</h2>
      <br />
      <h4>A Front End Developer with a Degree of Computer Science from University Of Punjab and 6 months certification in Web and UI/UX Development</h4>
      <br />
      <h4>Having good leadership and communication skills. Skilled in front-end , as well as UI/UX design, and can deliver results under pressure. Passionate about building scalable web applications and contributing to innovative projects.</h4>
    </div>
    <div className="about-experties">
         <button class="cv-down">
                    <a href="cv.pdf" download="cv.pdf" target="_blank">Download-CV </a>
                </button>
                <h3>Technical Expertise</h3>
    </div>
  </div>
  )
}

export default About