import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import img from "../assets/2.jpg";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={img} title="Contact" btnClass="hide" />

      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
