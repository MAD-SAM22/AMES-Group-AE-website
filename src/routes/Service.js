import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import night from "../assets/night.jpg";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";
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
