import React from 'react'
import "./home.css"
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaUniversity } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
const Home = () => {
  return (
   <div className="home-container">
    <div className="designation">
        <h2 className='desi-name'>ANAS REHMAN</h2>
        <h2 className='desi'>Front End Developer | REACT</h2>
    </div>
    <div className="introduction">
        <div className="details">
            <div className="contact-details">
                <div>
                    <IoMdMail  className='intro-icon'/> 
                    <h2>anasrehman0111@gmail.com</h2>
                </div>
                
                <div>
                    <IoLocation className='intro-icon' />
                    <h2>Lahore,Pakistan</h2>
                </div>

                <div>
                    <IoCall className='intro-icon'/> 
                    <h2>+92 3154297874</h2>
                </div>

            </div>
            <div className="education-details">
                <div>
                    <FaUniversity   className='intro-icon'/> 
                    <h2>University Of Punjab</h2>
                </div>
                
                <div>
                    <IoSchoolSharp className='intro-icon' />
                    <h2>Bachelor's Degree in Computer Science  </h2>

                   
                </div>
            </div>
            <div className="social-media">
                 <div>
                    <FaGithub  className='intro-icon'/>
                    <a href="https://github.com/anasbajwa02?tab=repositories" target='blank'>Github</a> 
                </div>
                
                <div>
                    <IoLogoLinkedin className='intro-icon' />
                    <a href="https://www.linkedin.com/feed/" target='blank'>Linkedin</a>
                </div>

                <div>
                    <IoLogoFacebook className='intro-icon'/>
                    <a href="https://www.facebook.com/anas.rehman.02/">Facebook</a> 
                </div>
                 <div>
                    <IoLogoInstagram className='intro-icon'/>
                    <a href="https://www.instagram.com/anas_bajwa_02/">Instagram</a> 
                </div>
            </div>
        </div>
        <div className="profile-img">
            <img src="/anas.png" alt="" />
        </div>
    </div>
   </div>
  )
}

export default Home