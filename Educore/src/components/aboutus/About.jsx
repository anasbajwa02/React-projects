import React from 'react'
import "./about.css"
import about from "../../assets/about.png"
import play from "../../assets/play-icon.png"
const About = (prop) => {
  return (
   <div className="about">
    <div className="image-section">
        <img src={about} alt="" className='main-img' />
        <img src={play} alt="" className='play' onClick={()=>{
          return prop.setPlayState(true);
        }}/>
    </div>
    <div className="title-section">
        <p className="about-uni">ABOUT UNIVERSITY</p>
        <h3>Nurturing Tomorrow's Leaders Today</h3>
        <div className="description">
        Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
        </div>
        <div className="description">With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classNamerooms, schools, and communities.</div>
        <div className="description">
        Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
        </div>

    </div>
   </div>
  )
}

export default About