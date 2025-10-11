import "./ContactFormStyles.css";
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: '',
    message: ''
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
NEW CONTACT FORM SUBMISSION

CLIENT INFORMATION:
• Name: ${formData.fullName}
• Email: ${formData.email}
• Service Interest: ${formData.service}

MESSAGE:
${formData.message}

---
This inquiry was submitted through the AMES Group Dubai website.
Please respond promptly to maintain client engagement.
      `;

      const templateParams = {
        to_name: 'AMES Group Dubai',
        to_email: process.env.REACT_APP_EMAILJS_RECIPIENT_EMAIL,
        from_name: formData.fullName,
        from_email: formData.email,
        message: formattedMessage,
        reply_to: formData.email,
        subject: `New Contact Form - ${formData.service} Inquiry from ${formData.fullName}`
      };

      console.log('Attempting to send contact form with EmailJS...');
      console.log('Template params:', templateParams);

      const response = await emailjs.send(
        'service_xqhk3fw',
        'template_xkjoc75',
        templateParams
      );

      console.log('Contact form sent successfully:', response);
      setStatus('success');
      
      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send contact form:', error);
      console.error('Error details:', {
        message: error.message,
        status: error.status,
        text: error.text
      });
      
      // Fallback to mailto if EmailJS fails
      const mailtoSubject = `New Contact Form - ${formData.service} Inquiry from ${formData.fullName}`;
      const mailtoBody = `NEW CONTACT FORM SUBMISSION

CLIENT INFORMATION:
• Name: ${formData.fullName}
• Email: ${formData.email}
• Service Interest: ${formData.service}

MESSAGE:
${formData.message}

---
This inquiry was submitted through the AMES Group Dubai website.
Please respond promptly to maintain client engagement.`;
      
      const mailtoLink = `mailto:${process.env.REACT_APP_EMAILJS_RECIPIENT_EMAIL}?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;
      
      if (window.confirm('EmailJS failed. Would you like to open your email client to send the message manually?')) {
        window.open(mailtoLink);
        setStatus('success');
        setFormData({
          fullName: '',
          email: '',
          service: '',
          message: ''
        });
      } else {
        setStatus('error');
      }
    }
  };

  return (
    <div className="contact-form">
      <h1>Start Your Global Journey Today</h1>
      {status === 'success' && (
        <div className="success-message">
          <i className="fas fa-check-circle"></i>
          <h3>Message Sent Successfully!</h3>
          <p>Thank you for your message! We will get back to you soon.</p>
        </div>
      )}
      {status === 'error' && (
        <div className="error-message">
          Sorry, there was an error sending your message. Please try again or contact us directly at <a href={`mailto:${process.env.REACT_APP_EMAILJS_RECIPIENT_EMAIL}`}>{process.env.REACT_APP_EMAILJS_RECIPIENT_EMAIL}</a>.
        </div>
      )}
      {status === 'sending' && (
        <div className="loading-message">
          <i className="fas fa-spinner fa-spin"></i>
          Sending your message...
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="service-select"
          required
        >
          <option value="">Select Service</option>
          <option value="Student Visa">Student Visa</option>
          <option value="Work Visa">Work Visa</option>
          <option value="Permanent Residency">Permanent Residency</option>
          <option value="Family Visa">Family Visa</option>
          <option value="Business Visa">Business Visa</option>
          <option value="UAE Golden Visa">UAE Golden Visa</option>
          <option value="Dubai Work Permit">Dubai Work Permit</option>
          <option value="Skilled Migration">Skilled Migration</option>
          <option value="Free Assessment">Free Assessment</option>
        </select>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your immigration goals..."
          rows="4"
          required
        />
        <button 
          type="submit" 
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Request Free Assessment'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
