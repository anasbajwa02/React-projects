import React from 'react'
import "./navlist.css"
import { Link } from 'react-router';
import ThemeContext from '../../context/themeContext';
import { useContext } from 'react'

const NavList = () => {
    const {theme} =useContext(ThemeContext)
  return (
   
    <div className={`navlist-container ${theme ? "vscode-theme-navList" : "night-owl-theme-navList"}`}>

       
        <div>
            <img src="/javascript.webp" alt=""/>
                <Link to='/'>home.js</Link >
            
        </div>
        <div>
            <img src="/html.webp" alt=""/>
                <Link to='/about'>about.html</Link >
           
        </div>
        <div>
            <img src="/json.webp" alt=""/>
                <Link to='/projects'>projects.json</Link >
           
        </div>
        <div>
            <img src="/react.png" alt=""/>
                <Link to='/contact'>contact.jsx</Link >
            
        </div>
         <div>
            <img src="/css.webp" alt=""/>
                <Link to="/theme">theme.css</Link>
          
        </div>
    </div>
  )
}

export default NavList