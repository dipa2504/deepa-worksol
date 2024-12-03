import React from 'react';
import './Service.css';
import { industries, services } from '../../assets/assets';
import Pattern from '../Pattern/Pattern';

const Service = () => {
  return (
    <div className='service' id='services'>
      <h1>Our Services</h1>

      <div className="service-container">
        {services.map((service, index) => (
          <div className="services-list-item" key={index}>
            <img src={service.service_image} alt={service.service_name} />
            <h2>{service.service_name}</h2>
          </div>
        ))}
      </div>

      <Pattern />

      <h1>Industries We Serve</h1>
      <p className="title">Partnering with numerous global leaders across various industries.</p>

      <div className="industry-container">
        <div className="industry-container-list">
          {industries.map((industry, index) => (
            <div className="industry-container-list-item" key={index}>
              <img src={industry.industry_image} alt={industry.industry_name} />
              <p>{industry.industry_name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
