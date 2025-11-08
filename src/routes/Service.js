import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import night from "../assets/night.jpg";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";
import ServiceOverview from "../Components/ServiceOverview";
import ServiceJourney from "../Components/ServiceJourney";
import ServiceCTA from "../Components/ServiceCTA";
function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={night} title="Service" btnClass="hide" />
      <ServiceOverview />
      <ServiceJourney />
      <Trip />
      <ServiceCTA />
      <Footer />
    </>
  );
}
export default Service;
