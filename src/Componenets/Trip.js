import TripData from "./TripData";
import "./TripStyle.css";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";
const Trip = () => {
  return (
    <>
      <div className="trip">
        <h1>Our Immigration Services</h1>
        <p>Comprehensive immigration solutions tailored to your needs</p>        <div className="trip-card">
          <TripData
            image={Trip1}
            heading="Student Visas"
            text="Pursue world-class education at Australia's top universities. We assist with student visa applications, course selection, and university admissions. Our expert guidance ensures a smooth transition to student life in Australia."
          />
          <TripData
            image={Trip2}
            heading="Skilled Migration"
            text="Launch your career in Australia's dynamic job market. We help with skilled migration visas, employment sponsorship, and professional licensing. Get expert guidance on skill assessments and occupation lists."
          />
          <TripData
            image={Trip3}
            heading="Work Visas"
            text="Get assistance with temporary and permanent work visas. We help with employer sponsorship, working holiday visas, and skilled occupation requirements. Our team ensures your work rights are properly secured."
          />
          <TripData
            image={Trip2}
            heading="Family Visas"
            text="Reunite with your loved ones in Australia. We handle partner visas, parent visas, and child visas. Our experienced team helps you navigate the family stream migration process with confidence."
          />
          <TripData
            image={Trip1}
            heading="Business Migration"
            text="Establish or expand your business in Australia. We assist with business innovation visas, investor visas, and entrepreneur pathways. Get expert advice on business migration requirements and opportunities."
          />
          <TripData
            image={Trip3}
            heading="Permanent Residency"
            text="Make Australia your permanent home. Our immigration experts guide you through various PR pathways including skilled migration, family sponsorship, and business visas. Get comprehensive support for your settlement journey."
          />
        </div>
      </div>
    </>
  );
};
export default Trip;
