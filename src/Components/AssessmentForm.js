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

  // Initialize EmailJS with hardcoded values
  emailjs.init({
    publicKey: '2u6lKp7eM2aUaWEdd',
    privateKey: 'ibFsE4GDoirj7sSn4kutz'
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
      // Create a formatted message for the email
      const formattedMessage = `
NEW IMMIGRATION ASSESSMENT REQUEST

PERSONAL INFORMATION:
• Name: ${formData.fullName}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Nationality: ${formData.nationality}
• Age: ${formData.age}

EDUCATION & PROFESSIONAL BACKGROUND:
• Education Level: ${formData.education}
• Work Experience: ${formData.workExperience} years
• English Proficiency: ${formData.englishLevel}

IMMIGRATION GOALS:
• Preferred Destination: ${formData.preferredDestination}
• Visa Type Interest: ${formData.visaType}
• Budget Range: ${formData.budget}
• Preferred Timeline: ${formData.timeline}

ADDITIONAL INFORMATION:
${formData.additionalInfo || 'No additional information provided.'}

---
This assessment was submitted through the AMES Group Dubai website.
Please respond within 24 hours as promised to the client.
      `;

      const templateParams = {
        to_name: 'AMES Group Assessment Team',
        to_email: process.env.REACT_APP_EMAILJS_RECIPIENT_EMAIL,
        from_name: formData.fullName,
        from_email: formData.email,
        message: formattedMessage,
        reply_to: formData.email,
        subject: `New Immigration Assessment - ${formData.fullName} (${formData.preferredDestination})`
      };

      console.log('Attempting to send assessment with EmailJS...');
      console.log('Template params:', templateParams);

              const response = await emailjs.send(
                'service_xqhk3fw',
                'template_xkjoc75',
                templateParams
              );

      console.log('Assessment sent successfully:', response);
      setStatus('success');
      
      // Reset form after successful submission
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
      console.error('Error details:', {
        message: error.message,
        status: error.status,
        text: error.text
      });
      
      // Check if it's a Gmail API scope issue
      if (error.text && error.text.includes('insufficient authentication scopes')) {
        console.error('Gmail API scope issue detected. This requires EmailJS service reconfiguration.');
        alert('EmailJS Gmail API configuration issue. Please contact the website administrator to fix the Gmail API scopes in EmailJS dashboard.');
        setStatus('error');
        return;
      }
      
      // Fallback to mailto if EmailJS fails for other reasons
      const mailtoSubject = `New Immigration Assessment - ${formData.fullName} (${formData.preferredDestination})`;
      const mailtoBody = `NEW IMMIGRATION ASSESSMENT REQUEST

PERSONAL INFORMATION:
• Name: ${formData.fullName}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Nationality: ${formData.nationality}
• Age: ${formData.age}

EDUCATION & PROFESSIONAL BACKGROUND:
• Education Level: ${formData.education}
• Work Experience: ${formData.workExperience} years
• English Proficiency: ${formData.englishLevel}

IMMIGRATION GOALS:
• Preferred Destination: ${formData.preferredDestination}
• Visa Type Interest: ${formData.visaType}
• Budget Range: ${formData.budget}
• Preferred Timeline: ${formData.timeline}

ADDITIONAL INFORMATION:
${formData.additionalInfo || 'No additional information provided.'}

---
This assessment was submitted through the AMES Group Dubai website.
Please respond within 24 hours as promised to the client.`;
      
      const mailtoLink = `mailto:${process.env.REACT_APP_EMAILJS_RECIPIENT_EMAIL}?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;
      
      if (window.confirm('EmailJS failed. Would you like to open your email client to send the assessment manually?')) {
        window.open(mailtoLink);
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
      } else {
        setStatus('error');
      }
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
          <p>Sorry, there was an error submitting your assessment. Please try again or contact us directly at <a href={`mailto:${process.env.REACT_APP_EMAILJS_RECIPIENT_EMAIL}`}>{process.env.REACT_APP_EMAILJS_RECIPIENT_EMAIL}</a>.</p>
        </div>
      )}

      {status === 'sending' && (
        <div className="loading-message">
          <i className="fas fa-spinner fa-spin"></i>
          <h3>Submitting Your Assessment...</h3>
          <p>Please wait while we process your information.</p>
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
