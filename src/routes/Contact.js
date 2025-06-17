import Navbar from "../Componenets/Navbar";
import Hero from "../Componenets/Hero";
import img from "../assets/2.jpg";
import ContactForm from "../Componenets/ContactForm";
import Footer from "../Componenets/Footer";
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
