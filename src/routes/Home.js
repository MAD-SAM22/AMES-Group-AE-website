import Destination from "../Components/Destination";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import img1 from "../assets/img1.jpg";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={img1}        title="Your Global Dream Starts in Dubai"
        text="Expert Immigration Services for Australia, Canada, USA, UK, UAE Golden Visa & More"
        btnText="Free Assessment"
        url="/assessment"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
