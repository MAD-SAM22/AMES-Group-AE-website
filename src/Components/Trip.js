import { useMemo, useState } from "react";

import Business from "../assets/Business-Visa.jpg";
import family from "../assets/family-visa.png";
import golden from "../assets/golden-visa.png";
import perminant from "../assets/AU-perminant.jpg";
import student from "../assets/student-visa.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";
import work from "../assets/work-permit-uae.jpg";
import ServiceFilter from "./ServiceFilter";
import ServicePopup from "./ServicePopup";
import TripData from "./TripData";

const Trip = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [filters, setFilters] = useState({});

  const services = useMemo(
    () => [
      {
        image: student,
        heading: "Student Visas",
        text: "Secure offers and visas for leading universities across Australia, Canada, the UK, USA, Europe, and more with counsellors who mirror our Australian HQ.",
        destination: "Multi-country",
        visaType: "Student Visa",
        timeline: "medium",
        budget: "medium",
        education: "high-school",
        experience: "none",
        englishLevel: "intermediate",
        age: "18-25",
        family: "single",
        features: [
          "Course & institution matching",
          "Admissions and visa paperwork",
          "Financial & health requirement guidance",
          "Pre-departure orientation",
        ],
        process: [
          { title: "Course Planning", description: "Choose the right study destination, program, and intake." },
          { title: "Admissions & Compliance", description: "Compile documents, statements, and Genuine Temporary Entrant evidence." },
          { title: "Visa Lodgment", description: "Submit and track your visa while arranging accommodation and travel." },
        ],
        requirements: [
          "Valid passport and photos",
          "Academic transcripts & CV",
          "Proof of funds & insurance",
          "English proficiency evidence",
        ],
        processingTime: "8-16 weeks depending on destination",
      },
      {
        image: Trip2,
        heading: "Skilled & Work Visas",
        text: "Pursue international career pathways with skilled migration, employer sponsorship, and post-study work support managed by licensed advisers.",
        destination: "Multi-country",
        visaType: "Work Visa",
        timeline: "long",
        budget: "medium",
        education: "bachelor",
        experience: "3-5",
        englishLevel: "advanced",
        age: "26-35",
        family: "single",
        features: [
          "Skills assessments & points strategy",
          "Employer introductions & sponsorship",
          "EOI, nomination & visa filing",
          "Professional licensing & settlement",
        ],
        process: [
          { title: "Profile Assessment", description: "Analyse occupation lists, points scores, and destination options." },
          { title: "Skills & Sponsorship", description: "Coordinate assessments, job offers, and supporting documents." },
          { title: "Visa Submission", description: "Lodge work visas and monitor case progress until decision." },
        ],
        requirements: [
          "Recognised qualifications",
          "Relevant work experience",
          "English test results",
          "Health & character clearance",
        ],
        processingTime: "4-12 months depending on pathway",
      },
      {
        image: family,
        heading: "Family & Partner Visas",
        text: "Reunite with loved ones through partner, parent, child, and dependent visas with compassionate, evidence-focused support.",
        destination: "Multi-country",
        visaType: "Family Visa",
        timeline: "long",
        budget: "medium",
        education: "high-school",
        experience: "none",
        englishLevel: "beginner",
        age: "26-45",
        family: "married",
        features: [
          "Sponsor eligibility checks",
          "Relationship evidence preparation",
          "Application compilation & lodgment",
          "Relocation & settlement planning",
        ],
        process: [
          { title: "Eligibility Review", description: "Confirm sponsor status, visa subclass, and indicative timelines." },
          { title: "Evidence Preparation", description: "Compile relationship, financial, and dependency documents." },
          { title: "Lodgment & Follow-up", description: "Submit the visa and respond to immigration requests." },
        ],
        requirements: [
          "Proof of relationship or dependency",
          "Sponsor financial & legal standing",
          "Medical & police clearances",
        ],
        processingTime: "6-18 months depending on visa type",
      },
      {
        image: Business,
        heading: "Investor & Entrepreneur Visas",
        text: "Expand your business footprint abroad with tailored investment and entrepreneur visa strategies for Australia, Canada, Europe, and the UAE.",
        destination: "Multi-country",
        visaType: "Business Visa",
        timeline: "long",
        budget: "high",
        education: "bachelor",
        experience: "5+",
        englishLevel: "advanced",
        age: "36-55",
        family: "married",
        features: [
          "Business & investment planning",
          "Company incorporation support",
          "Financial compliance guidance",
          "Family sponsorship assistance",
        ],
        process: [
          { title: "Business Strategy", description: "Define investment amount, business model, and target country." },
          { title: "Documentation Build", description: "Prepare business plans, financials, and source-of-funds evidence." },
          { title: "Visa & Licensing", description: "Lodge visa and manage approvals until residency is granted." },
        ],
        requirements: [
          "Evidence of business ownership or senior management",
          "Minimum net assets or investment capital",
          "Clean financial and criminal record",
        ],
        processingTime: "6-18 months depending on jurisdiction",
      },
      {
        image: perminant,
        heading: "Permanent Residency Programs",
        text: "Plan long-term settlement through skilled, family, or investment PR streams with strategies customised to your background.",
        destination: "Multi-country",
        visaType: "Permanent Residency",
        timeline: "long",
        budget: "medium",
        education: "bachelor",
        experience: "3-5",
        englishLevel: "advanced",
        age: "26-45",
        family: "married",
        features: [
          "PR eligibility audits",
          "Points maximisation",
          "Bridging visa guidance",
          "Citizenship preparation",
        ],
        process: [
          { title: "Pathway Selection", description: "Identify the fastest PR routes based on your profile." },
          { title: "Document Readiness", description: "Compile employment, education, and financial evidence." },
          { title: "Application Management", description: "Submit, follow up, and prepare for landing formalities." },
        ],
        requirements: [
          "Relevant qualifications & experience",
          "Settlement funds or sponsorship",
          "English language proficiency",
        ],
        processingTime: "8-24 months depending on country",
      },
      {
        image: golden,
        heading: "UAE Golden & Long-Term Visas",
        text: "Leverage Dubai’s position to secure Golden Visas and long-term residency for investors, professionals, and exceptional students.",
        destination: "UAE",
        visaType: "Golden Visa",
        timeline: "fast",
        budget: "high",
        education: "bachelor",
        experience: "5+",
        englishLevel: "advanced",
        age: "26-45",
        family: "married",
        features: [
          "Eligibility evaluation",
          "Investment & property advisory",
          "Government liaison & biometrics",
          "Renewal & family sponsorship support",
        ],
        process: [
          { title: "Golden Visa Assessment", description: "Match your achievements or investments to UAE categories." },
          { title: "Document Preparation", description: "Arrange attestations, property valuations, or employer letters." },
          { title: "Application & Issuance", description: "Submit, track, and finalise residency and Emirates ID." },
        ],
        requirements: [
          "Qualifying investment or professional credentials",
          "Valid health insurance",
          "Passport & background checks",
        ],
        processingTime: "4-8 weeks after submission",
      },
      {
        image: work,
        heading: "Visitor & Short-Term Visas",
        text: "Arrange tourist, business, and short-term visas with accurate paperwork for fast approvals across multiple destinations.",
        destination: "Multi-country",
        visaType: "Visitor Visa",
        timeline: "fast",
        budget: "low",
        education: "high-school",
        experience: "none",
        englishLevel: "beginner",
        age: "18-60",
        family: "single",
        features: [
          "Itinerary & financial proof guidance",
          "Invitation & sponsorship letters",
          "Application submission & tracking",
          "Extension and re-entry planning",
        ],
        process: [
          { title: "Travel Planning", description: "Confirm travel purpose, visa subclass, and documentation." },
          { title: "Document Compilation", description: "Prepare bank statements, insurance, and supporting letters." },
          { title: "Visa Filing", description: "Submit applications and manage embassy communication." },
        ],
        requirements: [
          "Valid passport",
          "Proof of funds & accommodation",
          "Return travel evidence",
        ],
        processingTime: "2-6 weeks depending on destination",
      },
    ],
    []
  );

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
  }, [filters, services]);

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
      <section className="mx-auto mt-20 max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-brand-accent sm:text-4xl">
          Our Immigration Services
        </h1>
        <p className="mt-3 text-base text-gray-600 sm:text-lg">
          Comprehensive immigration solutions tailored to your needs
        </p>

        <ServiceFilter
          onFilterChange={handleFilterChange}
          totalServices={services.length}
          filteredCount={filteredServices.length}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredServices.map((service) => (
            <TripData
              key={service.heading}
              image={service.image}
              heading={service.heading}
              text={service.text}
              onClick={() => handleServiceClick(service)}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="mt-12 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
            <h3 className="text-xl font-semibold text-gray-700">
              No services match your current filters
            </h3>
            <p className="mt-3 text-gray-500">
              Try adjusting your filter criteria or clearing all filters to see
              all available services.
            </p>
          </div>
        )}
      </section>

      <ServicePopup
        service={selectedService}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </>
  );
};

export default Trip;