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

                <div className="experties">

                  <div className='exp-single'>
                    <h2>Programing Languages</h2>
                    <ul>
                      <li>JavaScript</li>
                      <li>C++</li>
                    </ul>
                  </div>

                   <div className='exp-single'>
                    <h2>Frontend Development</h2>
                    <ul>
                      <li>React</li>
                      <li>Tailwind</li>
                      <li>BootStrap</li>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>Redux</li>
                      <li>Redux ToolKit</li>



                    </ul>
                  </div>

                   <div className='exp-single'>
                    <h2>UI/UX Design</h2>
                    <ul>
                      <li>Figma</li>
                      <li>Adobe Illustrator</li>
                      <li>Adobe PhotoShop</li>

                    </ul>
                  </div>

                   <div className='exp-single'>
                    <h2>Tools & Technologies</h2>
                    <ul>
                      <li>Git</li>
                      <li>Git Hub</li>
                      <li>Agile (Scrum,  Kanban)</li>

                    </ul>
                  </div>

                   <div className='exp-single'>
                    <h2>Soft Skills</h2>
                    <ul>
                      <li>Presentation</li>
                      <li>Communication</li>
                      <li>Professional Demeanor</li>
                      <li>Leadership</li>
                      <li>Mentorship</li>

                    </ul>
                  </div>

                  
                   <div className='exp-single'>
                    <h2>Extra Skills</h2>
                    <ul>
                      <li>Hard work</li>
                      <li>Punctual</li>
                      <li>Consistant</li>

                    </ul>
                  </div>

                </div>
    </div>
  </div>
  )
}

export default About