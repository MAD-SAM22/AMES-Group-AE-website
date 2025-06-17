import Navbar from "../Componenets/Navbar";
import Hero from "../Componenets/Hero";
import night from "../assets/night.jpg";
import Footer from "../Componenets/Footer";
import AboutUS from "../Componenets/AboutUs";
function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={night} title="About" btnClass="hide" />
      <AboutUS />
      <Footer />
    </>
  );
}
export default About;
