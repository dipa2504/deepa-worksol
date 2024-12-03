import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets';

const Header = () => {
  return (
    <div className='header'>
      
      <video autoPlay loop muted className="background-video">
        <source src={assets.header2_bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="header-container">
        <h1>Delivering Excellence</h1>
        <h2>#Bringing Ideas & Innovation to life</h2>
      </div>
      
    </div>
  );
}

export default Header;
