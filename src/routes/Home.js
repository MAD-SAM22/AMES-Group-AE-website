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
        heroImg={img1}
        title="Your Journey Your Story"
        text="Choose your Favourite Destination"
        btnText="Travel Plan"
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
