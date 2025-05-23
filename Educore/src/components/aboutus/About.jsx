import React from 'react'
import "./about.css"
import about from "../../assets/about.png"
import play from "../../assets/play-icon.png"
const About = (prop) => {
  return (
   <div classNameName="about">
    <div classNameName="image-section">
        <img src={about} alt="" classNameName='main-img' />
        <img src={play} alt="" classNameName='play' onClick={()=>{
          return prop.setPlayState(true);
        }}/>
    </div>
    <div classNameName="title-section">
        <p classNameName="about-uni">ABOUT UNIVERSITY</p>
        <h3>Nurturing Tomorrow's Leaders Today</h3>
        <div classNameName="description">
        Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
        </div>
        <div classNameName="description">With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classNamerooms, schools, and communities.</div>
        <div classNameName="description">
        Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
        </div>

    </div>
   </div>
  )
}

export default About