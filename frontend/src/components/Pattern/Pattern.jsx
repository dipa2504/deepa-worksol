import React from 'react';
import './Pattern.css';

const Pattern = () => {
    return (
        <div className="pattern">
            <h3>Maximize Productivity With Our Workflow Solutions</h3>
            <div className="grid-container">
                <ul className="types">
                    <li>bring innovation</li>
                    <li>increased efficiency</li>
                    <li>faster & better service</li>
                    <li>access to skilled resources</li>
                </ul>

                <div className="clock-container">
                    <div className="clock">
                        <div className="hand hour-hand"></div>
                        <div className="hand minute-hand"></div>
                        <div className="hand second-hand"></div>
                        <div className="center"></div>
                    </div>
                </div>

                <ul className="types">
                    <li>lower risk</li>
                    <li>cost effective</li>
                    <li>time zone advantage</li>
                    <li>scalability & flexibility</li>
                </ul>
            </div>
        </div>
    );
}

export default Pattern;
