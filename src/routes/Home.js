import Destination from "../Components/Destination";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import img1 from "../assets/img1.jpg";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";
import KeyStats from "../Components/KeyStats";
import WhyAmes from "../Components/WhyAmes";
import FirstMonthSteps from "../Components/FirstMonthSteps";
import ClientTestimonials from "../Components/ClientTestimonials";
import HomeCTA from "../Components/HomeCTA";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={img1}
        title="Your Global Dream Starts in Dubai"
        text="Expert immigration guidance from Dubai-based consultants for Australia, Canada, USA, UK, UAE Golden Visa & beyond."
        btnText="Start Free Assessment"
        url="/assessment"
        btnClass="show"
      />
      <KeyStats />
      <WhyAmes />
      <FirstMonthSteps />
      <ClientTestimonials />
      <HomeCTA />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;

