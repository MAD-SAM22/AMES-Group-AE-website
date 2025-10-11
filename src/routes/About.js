import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import night from "../assets/night.jpg";
import Footer from "../Components/Footer";
import AboutUS from "../Components/AboutUs";

function About({ setPlayState }) {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={night} title="About" btnClass="hide" />
      <AboutUS setPlayState={setPlayState} />
      <Footer />
    </>
  );
}
export default About;
