import React from 'react';
import './nav.css';
import { IoBag } from 'react-icons/io5';
import { Link } from 'react-router';


const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/"><h2>BLACK<span>FRIDAY</span></h2></Link>
      </div>

      <ul className="nav-bar">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="../shop/shop.html">SHOP</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>

      <div className="icon bag">
        <IoBag />
      </div>

      <details className="m-nav">
        <summary>MENU</summary>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="../shop/shop.html">SHOP</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>

        </ul>
      </details>
    </nav>
  );
};

export default Nav;
