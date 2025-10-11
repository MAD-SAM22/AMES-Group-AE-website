import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import night from "../assets/night.jpg";
import Footer from "../Components/Footer";
import AssessmentForm from "../Components/AssessmentForm";

function Assessment() {
  return (
    <>
      <Navbar />
      <Hero 
        cName="hero-mid" 
        heroImg={night} 
        title="Free Immigration Assessment" 
        btnClass="hide" 
      />
      <AssessmentForm />
      <Footer />
    </>
  );
}

export default Assessment;
