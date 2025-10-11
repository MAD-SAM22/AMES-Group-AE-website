import "./AssessmentFormStyles.css";
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function AssessmentForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    age: '',
    education: '',
    workExperience: '',
    englishLevel: '',
    preferredDestination: '',
    visaType: '',
    budget: '',
    timeline: '',
    additionalInfo: ''
  });
  const [status, setStatus] = useState('');

  // Initialize EmailJS
  emailjs.init({
    publicKey: "2u6lKp7eM2aUaWEdd"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const templateParams = {
        to_name: 'AMES Group Assessment Team',
        to_email: 'ossfawzy1@gmail.com',
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        nationality: formData.nationality,
        age: formData.age,
        education: formData.education,
        work_experience: formData.workExperience,
        english_level: formData.englishLevel,
        preferred_destination: formData.preferredDestination,
        visa_type: formData.visaType,
        budget: formData.budget,
        timeline: formData.timeline,
        additional_info: formData.additionalInfo,
        reply_to: formData.email
      };

      const response = await emailjs.send(
        'service_i4f1c72',
        'template_xkjoc75',
        templateParams
      );

      setStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        nationality: '',
        age: '',
        education: '',
        workExperience: '',
        englishLevel: '',
        preferredDestination: '',
        visaType: '',
        budget: '',
        timeline: '',
        additionalInfo: ''
      });
    } catch (error) {
      console.error('Failed to send assessment:', error);
      setStatus('error');
    }
  };

  return (
    <div className="assessment-form">
      <div className="assessment-header">
        <h1>Free Immigration Assessment</h1>
        <p>Get a personalized immigration pathway recommendation in 24 hours</p>
        <div className="assessment-benefits">
          <div className="benefit-item">
            <i className="fas fa-check-circle"></i>
            <span>Personalized pathway recommendation</span>
          </div>
          <div className="benefit-item">
            <i className="fas fa-check-circle"></i>
            <span>Detailed eligibility analysis</span>
          </div>
          <div className="benefit-item">
            <i className="fas fa-check-circle"></i>
            <span>Timeline and cost estimation</span>
          </div>
          <div className="benefit-item">
            <i className="fas fa-check-circle"></i>
            <span>Next steps guidance</span>
          </div>
        </div>
      </div>

      {status === 'success' && (
        <div className="success-message">
          <i className="fas fa-check-circle"></i>
          <h3>Assessment Submitted Successfully!</h3>
          <p>Thank you for your assessment request. Our immigration experts will review your information and provide a personalized recommendation within 24 hours.</p>
        </div>
      )}
      
      {status === 'error' && (
        <div className="error-message">
          <i className="fas fa-exclamation-triangle"></i>
          <h3>Submission Failed</h3>
          <p>Sorry, there was an error submitting your assessment. Please try again or contact us directly.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="assessment-form-content">
        <div className="form-section">
          <h3>Personal Information</h3>
          <div className="form-row">
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name *"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address *"
              required
            />
          </div>
          <div className="form-row">
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number *"
              required
            />
            <input
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              placeholder="Nationality *"
              required
            />
          </div>
          <div className="form-row">
            <input
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age *"
              type="number"
              required
            />
            <select
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
            >
              <option value="">Education Level *</option>
              <option value="High School">High School</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Master's Degree">Master's Degree</option>
              <option value="PhD">PhD</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-section">
          <h3>Professional Background</h3>
          <div className="form-row">
            <input
              name="workExperience"
              value={formData.workExperience}
              onChange={handleChange}
              placeholder="Years of Work Experience *"
              type="number"
              required
            />
            <select
              name="englishLevel"
              value={formData.englishLevel}
              onChange={handleChange}
              required
            >
              <option value="">English Proficiency *</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Native">Native Speaker</option>
              <option value="IELTS 6.0">IELTS 6.0</option>
              <option value="IELTS 6.5">IELTS 6.5</option>
              <option value="IELTS 7.0+">IELTS 7.0+</option>
            </select>
          </div>
        </div>

        <div className="form-section">
          <h3>Immigration Goals</h3>
          <div className="form-row">
            <select
              name="preferredDestination"
              value={formData.preferredDestination}
              onChange={handleChange}
              required
            >
              <option value="">Preferred Destination *</option>
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="UAE">UAE</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Germany">Germany</option>
              <option value="Other">Other</option>
            </select>
            <select
              name="visaType"
              value={formData.visaType}
              onChange={handleChange}
              required
            >
              <option value="">Visa Type Interest *</option>
              <option value="Student Visa">Student Visa</option>
              <option value="Work Visa">Work Visa</option>
              <option value="Skilled Migration">Skilled Migration</option>
              <option value="Family Visa">Family Visa</option>
              <option value="Business Visa">Business Visa</option>
              <option value="Permanent Residency">Permanent Residency</option>
              <option value="UAE Golden Visa">UAE Golden Visa</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>
          <div className="form-row">
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            >
              <option value="">Budget Range *</option>
              <option value="Under $5,000">Under $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000 - $20,000">$10,000 - $20,000</option>
              <option value="$20,000 - $50,000">$20,000 - $50,000</option>
              <option value="Over $50,000">Over $50,000</option>
            </select>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              required
            >
              <option value="">Preferred Timeline *</option>
              <option value="ASAP">ASAP</option>
              <option value="Within 3 months">Within 3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6-12 months">6-12 months</option>
              <option value="1-2 years">1-2 years</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>
        </div>

        <div className="form-section">
          <h3>Additional Information</h3>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Tell us more about your immigration goals, any specific concerns, or questions you have..."
            rows="4"
          />
        </div>

        <button 
          type="submit" 
          disabled={status === 'sending'}
          className="submit-btn"
        >
          {status === 'sending' ? 'Submitting Assessment...' : 'Get Free Assessment'}
        </button>
      </form>
    </div>
  );
}

export default AssessmentForm;
