import React from 'react';
import './About.css';
import { assets } from '../../assets/assets';

const About = () => {
  return (
    <div className='about' id='about'>

      <div className="about-logo">
        <img src={assets.logo} alt="logo" />
      </div>

      <div className="about-content">
        <h1>About Us</h1>
        <br />
        <p>Worksol Services Private Limited has expertise in engineering design, product development, smart manufacturing, and digital operation which touches every aspect of human life. We strive to provide top-notch solutions in a constantly evolving and competitive market. Our primary goal is to provide the best services to our clients at an affordable rate with rapid turnaround, in order to accomplish their objectives.</p>
      </div>

    </div>
  );
}

export default About;
