import React, { useEffect, useState } from 'react'
import {Link} from "react-scroll";
import logo from "../../assets/logo.png"
import './navbar.css'
const Navbar = () => {

  const [stickey,setStickey] = useState(false);
  useEffect(()=>{
window.addEventListener("scroll",()=>{
  window.scrollY > 50 ? setStickey(true) :setStickey(false)
})
  },[])
  
  return (
    <nav className={`container ${stickey  ?"dark-nav" : " "}`} >
        <img src={logo} alt="" className='logo' />
        <ul>
            <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to="program" smooth={true} offset={-230} duration={500}>Program</Link></li>
            <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to="testimonial" smooth={true} offset={-290} duration={500}>Testimonials</Link></li>
            <li><Link to="contact" smooth={true} offset={-210} duration={500}><button>Contact Us</button></Link></li>
        </ul>
    </nav>
  )
}

export default Navbar