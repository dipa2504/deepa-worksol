import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

    const [about, setAbout] = useState('about')
    const [menuOpen, setMenuOpen] = useState(false);



    return (
        <div className='navbar'>

            <img className='logo' src={assets.logo} alt="logo" id='logo' />

            <button className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
                <GiHamburgerMenu />
            </button>

            <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
                <li><a href="#logo" onClick={() => setAbout('home')} className={about === 'home' ? 'active' : ''}>home</a></li>
                <li><a href="#about" onClick={() => setAbout('about')} className={about === 'about' ? 'active' : ''}>about</a></li>
                <li><a href="#services" onClick={() => setAbout('services')} className={about === 'services' ? 'active' : ''}>services</a></li>
                <li><a href="#career" onClick={() => setAbout('career')} className={about === 'career' ? 'active' : ''}>career</a></li>
            </ul>
        </div>
    )
}

export default Navbar
