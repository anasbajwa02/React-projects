import React from 'react'
import './header.css'
const Header = () => {
  return (
         <div className="header-container">
            <div className="menu">
                <img src="/vscode_icon.svg" alt="vscode icon" id='logo'/>
                <div className="lists">
                <ul>
                    <li>File</li>
                    <li>Edit</li>
                    <li>View</li>
                    <li>Go</li>
                    <li>Run</li>
                    <li>Terminal</li>
                    <li>Help</li>
                </ul>
                </div>
            </div>
            <div className="name">
                <h2>Anas Rehman - Front End Developer</h2>
            </div>
            <div className="circles">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div> 
            </div>
           
         </div>
  )
}

export default Header