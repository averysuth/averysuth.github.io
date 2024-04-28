import React from 'react'
import {Link } from 'react-router-dom';

function NavBar({ scrollToSection }) {
    const handleClick = () => {
        scrollToSection("bemyfriend");
    };
  return (
    <>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap')
        </style>
        <nav className="navbar">
            <div className="navbar-container">
               <Link to="/" className="navbar-logo">
                Avery Sutherland
               </Link>
               <ul className="nav-menu">
                <li className="nav-item">
                    <Link to="/" className="nav-links">Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-links">
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-links">
                        Contact
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" onClick = {handleClick} className="nav-links">
                        BeMyFriend?
                    </Link>
                </li>
               </ul>
            </div>
        </nav>
    </>
  )
}

export default NavBar
