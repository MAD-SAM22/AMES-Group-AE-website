import React from 'react';
import './ServicePopup.css';
import { useNavigate } from 'react-router-dom';

const ServicePopup = ({ service, isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen || !service) return null;

  const handleStartJourney = () => {
    navigate('/contact');
    onClose();
  };

  return (
    <div className="service-popup-overlay" onClick={onClose}>
      <div className="service-popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="service-popup-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        
        <div className="service-popup-header">
          <img src={service.image} alt={service.heading} className="service-popup-image" />
          <h2 className="service-popup-title">{service.heading}</h2>
        </div>

        <div className="service-popup-body">
          <div className="service-popup-description">
            <h3>Service Overview</h3>
            <p>{service.text}</p>
          </div>

          <div className="service-popup-details">
            <h3>What We Provide</h3>
            <ul className="service-features">
              {service.features?.map((feature, index) => (
                <li key={index}>
                  <i className="fas fa-check-circle"></i>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="service-popup-process">
            <h3>Our Process</h3>
            <div className="process-steps">
              {service.process?.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="service-popup-requirements">
            <h3>Requirements</h3>
            <ul className="requirements-list">
              {service.requirements?.map((requirement, index) => (
                <li key={index}>
                  <i className="fas fa-arrow-right"></i>
                  {requirement}
                </li>
              ))}
            </ul>
          </div>

          <div className="service-popup-timeline">
            <h3>Processing Time</h3>
            <p className="timeline-text">{service.timeline}</p>
          </div>
        </div>

        <div className="service-popup-footer">
          <button className="start-journey-btn" onClick={handleStartJourney}>
            <i className="fas fa-rocket"></i>
            Start Your Journey for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicePopup;
