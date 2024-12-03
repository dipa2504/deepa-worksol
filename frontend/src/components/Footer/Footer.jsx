import React from 'react'
import './Footer.css'
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />

                    <p>Worksol Services Private Limited has expertise in engineering design, product development, smart manufacturing, and digital operation which touches every aspect of human life.</p>
                    <div className="footer-social-icons">
                        <a href="https://in.linkedin.com/company/worksolspl"><p><FaLinkedinIn /></p></a>
                        <a href="mailto:info@worksol.in"><p><FaEnvelope /></p></a>
                        <a href="tel:079 4600 5738"><p><IoCall /></p></a>
                        <a href="https://www.google.com/maps/dir//worksol/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x395e9b96d2ecd2e7:0x757abb2b7f04ac39?sa=X&ved=1t:3061&ictx=111"><p><FaMapMarkerAlt /></p></a>

                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>

                    <ul>
                        <li><a href="#logo">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#career">Career</a></li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>

                    <ul>
                        <li><IoCall /> <a href="tel:079 4600 5738"> 079 4600 5738</a></li>
                        <li><FaEnvelope /> <a href="mailto:info@worksol.in">info@worksol.in</a></li>
                        <li><FaEnvelope /> <a href="mailto:jaimin@worksol.com">jaimin@worksol.com</a></li>
                        <li><FaMapMarkerAlt /> <a href="https://www.google.com/maps/dir//worksol/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x395e9b96d2ecd2e7:0x757abb2b7f04ac39?sa=X&ved=1t:3061&ictx=111"> 704-705, Jaihind, Besides Newyork Tower Near Thaltej Cross, Road, Sarkhej - Gandhinagar Hwy, opposite Binori Hotel, Ahmedabad, Gujarat 380054</a></li>
                    </ul>

                    {/* <h2>OPENING HOURS</h2>
                    <p>Mon - Fri</p>
                    <p>9am - 6pm</p> */}
                </div>
            </div>

            <hr />

            <p className="footer-copyright">
                Copyright 2024@ Worksol Services Private Limited. All Right Reserved.
            </p>


        </div>
    )
}

export default Footer
