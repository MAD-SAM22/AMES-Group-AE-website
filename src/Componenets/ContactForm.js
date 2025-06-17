import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="contact-form">
      <h1>Start Your Australian Journey Today</h1>
      <form>
        <input placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <select className="service-select">
          <option value="">Select Service</option>
          <option value="study">Student Visa</option>
          <option value="work">Work Visa</option>
          <option value="pr">Permanent Residency</option>
          <option value="family">Family Visa</option>
          <option value="business">Business Visa</option>
        </select>
        <textarea placeholder="Tell us about your immigration goals..." rows="4" />
        <button>Request Free Assessment</button>
      </form>
    </div>
  );
}

export default ContactForm;
