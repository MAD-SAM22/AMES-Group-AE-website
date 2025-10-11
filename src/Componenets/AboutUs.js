import "./AboutUsStyles.css";

import React from "react";
import about_img from "../assets/about.png";
import play_icon from "../assets/play-icon.png";

const AboutUs = ({setPlayState}) => {
  const handlePlayClick = () => {
    if (setPlayState) {
      setPlayState(true);
    }
  };

  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={handlePlayClick} />
      </div>      <div className="about-right">
        <div className="about-us-header">
        <p className="about-us-title">ABOUT AMES GROUP DUBAI</p>
        <h2 className="about-us-text">Your Gateway to Global Opportunities</h2>
        </div>
        <p>
          AMES Group Dubai is your trusted partner in international immigration and education services. 
          Based in the heart of Dubai, we specialize in helping individuals and families achieve their 
          dreams of studying, working, and living abroad through comprehensive support and expert guidance.
        </p>
        <p>
          With years of experience and a deep understanding of global immigration systems, 
          we provide personalized solutions for visa applications, university admissions, 
          and settlement services across Australia, Canada, USA, UK, UAE, and more. Our Dubai 
          location gives us unique insights into the Middle East market and regional opportunities.
        </p>
        <p>
          Our dedicated team of immigration specialists and education consultants ensures a smooth transition 
          to your chosen destination, handling everything from visa processing to settlement support. 
          We understand the unique challenges faced by Dubai residents seeking international opportunities 
          and provide tailored solutions for your success.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;