import React from 'react'
import "./footer.css"
import { FaCircleNodes } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
import { IoWarningOutline } from "react-icons/io5";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { TiTick } from "react-icons/ti";
import { IoMdNotifications } from "react-icons/io";

const Footer = () => {
  return (
   <div className="footer-container">
    <div className="left-footer-icons">
        <FaCircleNodes className='node-img' /> main
        <RxCrossCircled className='cross-img' /> 0
        <IoWarningOutline  className='warning-img'/> 1


    </div>
    <div className="right-footer-icons">
        <PiBracketsCurlyBold className='js-brackets-img'/> Java Scrript JSX
        <TiTick className='tick-img'/> Prettier
        <IoMdNotifications className='bell-img' />


    </div>
   </div>
  )
}

export default Footer