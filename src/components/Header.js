import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { IconContext } from "react-icons";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Header = () => {

    const navLinks = document.querySelector('.nav-links-container');

    const navLinksToggle = () => {
        const navLinks = document.querySelector('.nav-links-container');
        navLinks.classList.toggle('active');
    }

    return (
        <nav className='Header'>
            <IconContext.Provider value={{ className: 'Header-Icon' }}>
                <div onClick={navLinksToggle}>
                    <FaInstagram />
                </div>
            </IconContext.Provider>
            <div className='Header-Title'>
                Photos
            </div>
            <div className='nav-links-container active'>
                <div className='date'>
                    2020
                </div>
                <ul className='nav-links nav-links1'>
                    <li><Link to='/December2020'>December</Link></li>
                </ul>
                <div className='date'>
                    2021
                </div>
                <ul className='nav-links'>
                    <li><Link to='/January2021'>January</Link></li>
                    <li><Link to='/February2021'>February</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
