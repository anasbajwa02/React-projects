import React from 'react'
import "./contact.css";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h6> /**</h6>
        <h6 >* Contact Information:</h6>
         <h6> * <IoCall className='contact-icon'/>  Phone: +92 3154297874</h6>
         <h6> * <FaWhatsapp className='contact-icon'/> WhatsApp: +92 3154297874</h6>
         <h6> * <IoLogoGithub className='contact-icon'/> GitHub: https://github.com/anasbajwa02?tab=repositories</h6>
         <h6> * <IoLogoLinkedin className='contact-icon'/> GitHub: https://www.linkedin.com/feed/</h6>
         <h6> * <IoLogoFacebook className='contact-icon'/> https://www.facebook.com/anas.rehman.02/</h6>
         <h6> * <IoLogoInstagram className='contact-icon'/> https://www.instagram.com/anas_bajwa_02/</h6>
         <h6>*/</h6>
      </div>
      <div className="contact-form">
        <form method='post' action="https://api.web3forms.com/submit" >

   				<input type="hidden" name="access_key" value="8b4e2f87-4c8d-44b3-b15c-ffac4ec0b2d6"/>

          <label htmlFor="">const <span>name </span>=</label>
          <input type="text"  name='name' placeholder=' "Your name" ' required/>
          <br />

          <label htmlFor="">const <span>email </span>=</label>
          <input type="text" name='email'  placeholder=' "Youremail@example.com" ' required/>

          <br />

          <label htmlFor="">const <span>subject </span>=</label>
          <input type="text" name='subject'  placeholder=' "Message Subject" ' required/>
  <br />

          <label htmlFor="">const <span>Message </span>=</label>
          <br />
          <br />
          <input type="text" name='message'  placeholder=' "Your message here...." ' required/>
          <br />
          <button className='contact-btn' type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact