import React from 'react'
import "./navbar.css"
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className="navbar-container">
        <h2>EXPLORER</h2>
        <div className="nav-icons">
            <details>
  <summary >PORTFOLIO</summary>
  <div className='portfolio' >
  <div><img src="/javascript.webp" alt="" /><Link to="/">home.js</Link></div>
  <div><img src="/html.webp" alt="" /><Link to="/about">about.html</Link></div>
  <div><img src="/json.webp" alt="" /><Link to="/projects">projects.json</Link></div>
  <div><img src="/react.png" alt="" /><Link to="/contact">contact.jsx</Link></div>
  <div><img src="/css.webp" alt="" /><Link to="/theme">theme.css</Link></div>
  </div>
</details>
        </div>
    </div>
  )
}

export default Navbar