import Navbar from "../Componenets/Navbar";
import Hero from "../Componenets/Hero";
import night from "../assets/night.jpg";
import Footer from "../Componenets/Footer";
import Trip from "../Componenets/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={night} title="Service" btnClass="hide" />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
