import Destination from "../Componenets/Destination";
import Navbar from "../Componenets/Navbar";
import Hero from "../Componenets/Hero";
import img1 from "../assets/img1.jpg";
import Trip from "../Componenets/Trip";
import Footer from "../Componenets/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={img1}        title="Your Australian Dream Starts Here"
        text="Expert Immigration Services for Study, Work, and Permanent Residency"
        btnText="Free Assessment"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
