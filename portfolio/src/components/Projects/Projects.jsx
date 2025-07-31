import React from "react";
import "./projects.css";
const Projects = () => {
  return (
    <div className="projects-container">
      <div className="project">
        <img src="/Gemini.png" alt="" />
        <div className="project-details">
          <h2>Gemini Clone</h2>
          <p>Working model of Gemini Clone using API.</p>
          <div className="tags">
            <h4>React</h4>
            <h4>CSS</h4>
            <h4>JAVA SCRIPT</h4>
            <h4>Genrative AI</h4>
            <h4>API</h4>
            <h4>Responsive</h4>
          </div>
          <div className="preview-btns">
            <a href="https://github.com/anasbajwa02/React-projects/tree/main/Gemini-Clone" target="blank">Source</a>
            {/* <a href="">Demo</a> */}
          </div>
        </div>
      </div>

      {/* 2 */}

       <div className="project">
        <img src="/black-friday.png" alt="" />
        <div className="project-details">
          <h2>Black Friday</h2>
          <p>An Front End of E-commerce App for electronic devices.</p>
          <div className="tags">
            <h4>React</h4>
            <h4>JAVA SCRIPT</h4>
            <h4>bootstrap</h4>
            <h4>React icons</h4>
            <h4>responsive</h4>

          </div>
          <div className="preview-btns">
            <a href="https://github.com/anasbajwa02/React-projects/tree/main/black-friday" target="blank">Source</a>
            {/* <a href="">Demo</a> */}
          </div>
        </div>
      </div>
      
      {/* 3 */}

       <div className="project">
        <img src="/portfolio.png" alt="" />
        <div className="project-details">
          <h2>VSCode Themed Portfolio</h2>
          <p>My personal portfolio with the Visual Studio Code IDE theme.</p>
          <div className="tags">
            <h4>React</h4>
            <h4>CSS</h4>
            <h4>JAVA SCRIPT</h4>
            <h4>React Routes</h4>
            <h4>React icons</h4>
          </div>
          <div className="preview-btns">
            <a href="https://github.com/anasbajwa02/React-projects/tree/main/portfolio" target="blank">Source</a>
            {/* <a href="">Demo</a> */}
          </div>
        </div>
      </div>

      {/* 4 */}

       <div className="project">
        <img src="/Educore.png" alt="" />
        <div className="project-details">
          <h2>Educore</h2>
          <p>An Educational website fully responsive.</p>
          <div className="tags">
            <h4>React</h4>
            <h4>tailwind</h4>
            <h4>JAVA SCRIPT</h4>
            <h4>Responsive</h4>
          </div>
          <div className="preview-btns">
            <a href="https://github.com/anasbajwa02/React-projects/tree/main/Educore" target="blank">Source</a>
            {/* <a href="">Demo</a> */}
          </div>
        </div>
      </div>

      {/* 5 */}

       <div className="project">
        <img src="/weather-app.png" alt="" />
        <div className="project-details">
          <h2>Weather App</h2>
          <p>An working model of weather app using fetch weather API. </p>
          <div className="tags">
            <h4>React</h4>
            <h4>CSS</h4>
            <h4>React icons</h4>
          </div>
          <div className="preview-btns">
            <a href="https://github.com/anasbajwa02/React-projects/tree/main/Weather-App" target="blank">Source</a>
            {/* <a href="">Demo</a> */}
          </div>
        </div>
      </div>

      {/* 6 */}

       <div className="project">
        <img src="/password-genrater.png" alt="" />
        <div className="project-details">
          <h2>Password Genrater</h2>
          <p>A simple random password genrater.</p>
          <div className="tags">
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>JAVA SCRIPT</h4>
          </div>
          <div className="preview-btns">
            <a href="https://github.com/anasbajwa02/Password-Genrater" target="blank">Source</a>
            {/* <a href="https://anasbajwa02.github.io/Password-Genrater/" target="blank">Demo</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
