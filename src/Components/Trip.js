import TripData from "./TripData";
import ServicePopup from "./ServicePopup";
import ServiceFilter from "./ServiceFilter";
import "./TripStyle.css";
import student from "../assets/student-visa.jpg";
import Business from "../assets/Business-Visa.jpg";
import family from "../assets/family-visa.png";
import golden from "../assets/golden-visa.png";
import perminant from "../assets/AU-perminant.jpg";
import work from "../assets/work-permit-uae.jpg";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";
import { useState, useMemo } from "react";

const Trip = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [filters, setFilters] = useState({});

  const services = [
    {
      image: student,
      heading: "Student Visas",
      text: "Pursue world-class education at Australia's top universities. We assist with student visa applications, course selection, and university admissions. Our expert guidance ensures a smooth transition to student life in Australia.",
      // Filter metadata
      destination: "Australia",
      visaType: "Student Visa",
      timeline: "medium",
      budget: "medium",
      education: "high-school",
      experience: "none",
      englishLevel: "intermediate",
      age: "18-25",
      family: "single",
      features: [
        "University application assistance",
        "Course selection guidance",
        "Student visa application support",
        "Pre-departure orientation",
        "Accommodation assistance",
        "Ongoing support during studies"
      ],
      process: [
        { title: "Initial Consultation", description: "We assess your academic background and career goals to recommend the best courses and universities." },
        { title: "University Application", description: "We help you apply to multiple universities and prepare all required documents." },
        { title: "Visa Application", description: "We guide you through the student visa application process and ensure all requirements are met." },
        { title: "Pre-departure Support", description: "We provide orientation sessions and help with accommodation and travel arrangements." }
      ],
      requirements: [
        "Valid passport",
        "Academic transcripts",
        "English language proficiency (IELTS/TOEFL)",
        "Financial proof",
        "Health insurance",
        "Statement of purpose"
      ],
      processingTime: "3-6 months for complete process"
    },
    {
      image: Trip2,
      heading: "Skilled Migration",
      text: "Launch your career in Australia's dynamic job market. We help with skilled migration visas, employment sponsorship, and professional licensing. Get expert guidance on skill assessments and occupation lists.",
      // Filter metadata
      destination: "Australia",
      visaType: "Skilled Migration",
      timeline: "long",
      budget: "high",
      education: "bachelor",
      experience: "3-5",
      englishLevel: "advanced",
      age: "26-35",
      family: "single",
      features: [
        "Skills assessment guidance",
        "Expression of Interest (EOI) preparation",
        "Visa application support",
        "Job search assistance",
        "Professional licensing help",
        "Settlement support"
      ],
      process: [
        { title: "Skills Assessment", description: "We help you get your qualifications assessed by the relevant authority." },
        { title: "EOI Submission", description: "We prepare and submit your Expression of Interest to the Department of Home Affairs." },
        { title: "Invitation to Apply", description: "We help you respond to invitations and prepare your visa application." },
        { title: "Visa Processing", description: "We guide you through the visa processing and provide ongoing support." }
      ],
      requirements: [
        "Skills assessment",
        "English language proficiency",
        "Work experience in nominated occupation",
        "Health and character checks",
        "Financial capacity",
        "Age requirements (under 45)"
      ],
      processingTime: "6-12 months depending on occupation and points"
    },
    {
      image: Trip3,
      heading: "Work Visas",
      text: "Get assistance with temporary and permanent work visas. We help with employer sponsorship, working holiday visas, and skilled occupation requirements. Our team ensures your work rights are properly secured.",
      // Filter metadata
      destination: "Australia",
      visaType: "Work Visa",
      timeline: "fast",
      budget: "low",
      education: "diploma",
      experience: "1-2",
      englishLevel: "intermediate",
      age: "18-25",
      family: "single",
      features: [
        "Employer sponsorship assistance",
        "Working holiday visa support",
        "Temporary work visa applications",
        "Work rights guidance",
        "Visa renewal support",
        "Pathway to permanent residency"
      ],
      process: [
        { title: "Visa Type Assessment", description: "We determine the most suitable work visa based on your situation and goals." },
        { title: "Employer Sponsorship", description: "We help find sponsoring employers or assist with existing sponsorship applications." },
        { title: "Application Preparation", description: "We prepare all required documents and ensure compliance with regulations." },
        { title: "Visa Processing", description: "We monitor your application and provide updates throughout the process." }
      ],
      requirements: [
        "Job offer from Australian employer",
        "Relevant qualifications and experience",
        "English language proficiency",
        "Health and character checks",
        "Labour market testing (if required)",
        "Skills assessment (if required)"
      ],
      processingTime: "2-6 months depending on visa type"
    },
    {
      image: family,
      heading: "Family Visas",
      text: "Reunite with your loved ones in Australia. We handle partner visas, parent visas, and child visas. Our experienced team helps you navigate the family stream migration process with confidence.",
      // Filter metadata
      destination: "Australia",
      visaType: "Family Visa",
      timeline: "long",
      budget: "medium",
      education: "high-school",
      experience: "none",
      englishLevel: "beginner",
      age: "26-35",
      family: "married",
      features: [
        "Partner visa applications",
        "Parent visa support",
        "Child visa assistance",
        "Relationship evidence preparation",
        "Sponsorship guidance",
        "Family reunion support"
      ],
      process: [
        { title: "Relationship Assessment", description: "We assess your relationship and determine the most appropriate visa pathway." },
        { title: "Document Preparation", description: "We help gather and prepare all required relationship evidence and supporting documents." },
        { title: "Application Submission", description: "We prepare and submit your family visa application with all necessary documentation." },
        { title: "Processing Support", description: "We provide ongoing support throughout the visa processing period." }
      ],
      requirements: [
        "Genuine relationship evidence",
        "Sponsor eligibility",
        "Health and character checks",
        "Financial capacity",
        "English language requirements (if applicable)",
        "Age requirements (for some visas)"
      ],
      processingTime: "12-24 months depending on visa type and circumstances"
    },
    {
      image: Business,
      heading: "Business Migration",
      text: "Establish or expand your business in Australia. We assist with business innovation visas, investor visas, and entrepreneur pathways. Get expert advice on business migration requirements and opportunities.",
      // Filter metadata
      destination: "Australia",
      visaType: "Business Visa",
      timeline: "long",
      budget: "high",
      education: "bachelor",
      experience: "5+",
      englishLevel: "advanced",
      age: "36-45",
      family: "married",
      features: [
        "Business plan development",
        "Investment visa assistance",
        "Entrepreneur visa support",
        "Business registration help",
        "Investment guidance",
        "Ongoing business support"
      ],
      process: [
        { title: "Business Assessment", description: "We assess your business idea and determine the most suitable visa pathway." },
        { title: "Business Plan Development", description: "We help develop a comprehensive business plan that meets immigration requirements." },
        { title: "Investment Planning", description: "We guide you through investment requirements and help structure your investment." },
        { title: "Visa Application", description: "We prepare and submit your business migration visa application." }
      ],
      requirements: [
        "Significant business experience",
        "Investment capital",
        "Business plan",
        "English language proficiency",
        "Health and character checks",
        "Age requirements (under 55)"
      ],
      processingTime: "12-18 months for complete process"
    },
    {
      image: perminant,
      heading: "Permanent Residency",
      text: "Secure your permanent future in Australia. We guide you through the pathway to permanent residency, including skilled migration, family reunification, and humanitarian programs. Get expert assistance for your PR journey.",
      // Filter metadata
      destination: "Australia",
      visaType: "Permanent Residency",
      timeline: "long",
      budget: "high",
      education: "bachelor",
      experience: "3-5",
      englishLevel: "advanced",
      age: "26-35",
      family: "single",
      features: [
        "PR pathway assessment",
        "Points test optimization",
        "Skills assessment support",
        "EOI preparation",
        "Visa application assistance",
        "Settlement support"
      ],
      process: [
        { title: "Eligibility Assessment", description: "We assess your eligibility for permanent residency and identify the best pathway." },
        { title: "Points Optimization", description: "We help maximize your points score through various strategies." },
        { title: "Application Preparation", description: "We prepare all required documents and ensure compliance with requirements." },
        { title: "Processing Support", description: "We provide ongoing support throughout the PR application process." }
      ],
      requirements: [
        "Skills assessment",
        "English language proficiency",
        "Work experience",
        "Health and character checks",
        "Financial capacity",
        "Age requirements (under 45)"
      ],
      processingTime: "12-24 months depending on pathway and circumstances"
    },
    {
      image: golden,
      heading: "UAE Golden Visa",
      text: "Secure long-term residency in the UAE with our Golden Visa assistance. We help investors, entrepreneurs, and skilled professionals obtain 5-10 year renewable visas. Perfect for those seeking stability in the Middle East's business hub.",
      // Filter metadata
      destination: "UAE",
      visaType: "Golden Visa",
      timeline: "fast",
      budget: "high",
      education: "bachelor",
      experience: "5+",
      englishLevel: "advanced",
      age: "26-35",
      family: "married",
      features: [
        "Golden Visa application support",
        "Investment guidance",
        "Property investment assistance",
        "Business setup support",
        "Renewal assistance",
        "Family inclusion"
      ],
      process: [
        { title: "Eligibility Assessment", description: "We assess your eligibility for UAE Golden Visa based on investment or professional criteria." },
        { title: "Investment Planning", description: "We help plan your investment strategy to meet Golden Visa requirements." },
        { title: "Application Preparation", description: "We prepare and submit your Golden Visa application with all required documentation." },
        { title: "Ongoing Support", description: "We provide ongoing support for visa renewal and compliance." }
      ],
      requirements: [
        "Investment in UAE property (AED 2M+)",
        "Business investment (AED 500K+)",
        "Professional qualifications",
        "Health insurance",
        "Valid passport",
        "Clean criminal record"
      ],
      processingTime: "2-4 months for application processing"
    },
    {
      image: work,
      heading: "Dubai Work Permits",
      text: "Navigate Dubai's employment visa system with confidence. We assist with work permit applications, labor contracts, and employment visa renewals. Our team ensures compliance with UAE labor laws and regulations.",
      // Filter metadata
      destination: "UAE",
      visaType: "Work Permit",
      timeline: "fast",
      budget: "low",
      education: "diploma",
      experience: "1-2",
      englishLevel: "intermediate",
      age: "18-25",
      family: "single",
      features: [
        "Work permit applications",
        "Labor contract assistance",
        "Visa renewal support",
        "Employer liaison",
        "Compliance guidance",
        "Family visa support"
      ],
      process: [
        { title: "Job Offer Assessment", description: "We review your job offer and ensure it meets UAE work permit requirements." },
        { title: "Document Preparation", description: "We help prepare all required documents for work permit application." },
        { title: "Application Submission", description: "We submit your work permit application and liaise with authorities." },
        { title: "Visa Processing", description: "We monitor your application and assist with any additional requirements." }
      ],
      requirements: [
        "Valid job offer from UAE employer",
        "Educational qualifications",
        "Health insurance",
        "Valid passport",
        "Medical fitness certificate",
        "Labor contract"
      ],
      processingTime: "2-6 weeks for work permit processing"
    }
  ];

  // Filter services based on active filters
  const filteredServices = useMemo(() => {
    return services.filter(service => {
      // Search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const searchableText = `${service.heading} ${service.text}`.toLowerCase();
        if (!searchableText.includes(searchTerm)) return false;
      }

      // Destination filter
      if (filters.destination && service.destination !== filters.destination) {
        return false;
      }

      // Visa type filter
      if (filters.visaType && service.visaType !== filters.visaType) {
        return false;
      }

      // Timeline filter
      if (filters.timeline && service.timeline !== filters.timeline) {
        return false;
      }

      // Budget filter
      if (filters.budget && service.budget !== filters.budget) {
        return false;
      }

      // Education filter
      if (filters.education && service.education !== filters.education) {
        return false;
      }

      // Experience filter
      if (filters.experience && service.experience !== filters.experience) {
        return false;
      }

      // English level filter
      if (filters.englishLevel && service.englishLevel !== filters.englishLevel) {
        return false;
      }

      // Age filter
      if (filters.age && service.age !== filters.age) {
        return false;
      }

      // Family filter
      if (filters.family && service.family !== filters.family) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedService(null);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <div className="trip">
        <h1>Our Immigration Services</h1>
        <p>Comprehensive immigration solutions tailored to your needs</p>
        
        <ServiceFilter 
          onFilterChange={handleFilterChange}
          totalServices={services.length}
          filteredCount={filteredServices.length}
        />
        
        <div className="trip-card">
          {filteredServices.map((service, index) => (
            <div key={index} onClick={() => handleServiceClick(service)}>
              <TripData
                image={service.image}
                heading={service.heading}
                text={service.text}
              />
            </div>
          ))}
        </div>
        
        {filteredServices.length === 0 && (
          <div className="no-results">
            <h3>No services match your current filters</h3>
            <p>Try adjusting your filter criteria or clearing all filters to see all available services.</p>
          </div>
        )}
      </div>
      
      <ServicePopup
        service={selectedService}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </>
  );
};

export default Trip;