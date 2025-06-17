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
        <h3>ABOUT AMES GROUP</h3>
        <h2>Your Gateway to Global Education</h2>
        <p>
          AMES Group is your trusted partner in international education and immigration services. 
          We specialize in helping students achieve their dreams of studying abroad through 
          comprehensive support and expert guidance.
        </p>
        <p>
          With years of experience and a deep understanding of international education systems, 
          we provide personalized solutions for visa applications, university admissions, 
          and settlement services across Australia, Canada, USA, UK, and more.
        </p>
        <p>
          Our dedicated team of education and immigration specialists ensures a smooth transition 
          to your chosen destination, handling everything from course selection to visa processing, 
          making your international education journey seamless and successful.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;