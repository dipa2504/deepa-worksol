import React, { useState } from 'react';
import './Career.css';
import axios from 'axios';
import { url } from '../../assets/assets';

const Career = () => {
    const [result, setResult] = useState("");
    
    const [user, setUser] = useState({
        email: '',
        mobile: '',
        name: '',
        message: ''
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        try {
            // const response = await axios.post("http://localhost:3000/api/career", user);
            const response = await axios.post(`${url}/api/career`, user)
            const data = response.data;

            if (data.success) {
                setResult("Form Submitted Successfully");
                setUser({ email: '', mobile: '', name: '', message: '' });  // Clear the form
            } else {
                setResult(data.message);
            }
        } catch (error) {
            setResult("An error occurred. Please try again later.");
        }
        console.log("Form Sumbitted", user);
    };

    const ValueHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <div className='career' id='career'>
            <div className="career-content">
                <div className="career-container">
                    <h1>We Are Hiring!</h1>
                    <form className="form" onSubmit={onSubmit}>
                        <input type="text" name='name' value={user.name} placeholder='Full Name' onChange={ValueHandler} required />
                        <input type="email" name='email' value={user.email} placeholder='Email' onChange={ValueHandler} required />
                        <input type="tel" name='mobile' value={user.mobile} placeholder='Mobile No.' onChange={ValueHandler} required />
                        <textarea name='message' value={user.message} placeholder='Your Message' onChange={ValueHandler} required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                    <span>{result}</span>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4239.770244892833!2d72.51972819807162!3d23.052916891587955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b96d2ecd2e7%3A0x757abb2b7f04ac39!2sWorksol%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1716660758927!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ width: '100%', height: '100%' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Career;
