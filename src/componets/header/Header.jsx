import React, { useState } from "react";
import ChatWithMe from "../ChatWithMe/ChatWithMe";
// import "./Header.css"; // For styling

const Header = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <>
    <header>
        <a href="#home" className="logo"><span>Rahul </span>Vankar</a>
        <ul className={`navlist ${isMenuVisible ? 'active' : ''}`} style={{ display: isMenuVisible ? 'block' : 'none' }}>
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="right-header" onClick={toggleMenu}>
            {/* <a href="#home" className="btn">Let's chat <i className='bx bx-message-dots' ></i></a> */}
            <div className="menu-icon">
                <div className="bar"></div>
            </div>
        </div>
    </header>
    <ChatWithMe/>

    </>
  );
};

export default Header;
