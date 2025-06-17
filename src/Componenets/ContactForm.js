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
  
  // Initialize EmailJS
  emailjs.init({
    publicKey: "2u6lKp7eM2aUaWEdd",
    blockHeadless: false, // This is important for authentication
    limitRate: true
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
        to_email: 'ossfawzy1@gmail.com',
        from_name: formData.fullName,
        from_email: formData.email,
        service: formData.service,
        message: formData.message
      };      await emailjs.send(
        'service_i4f1c72', // Replace with your EmailJS service ID
        'template_xkjoc75', // Replace with your EmailJS template ID
        templateParams
      );

      setStatus('success');
      setFormData({
        fullName: '',
        email: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
    }
  };

  return (
    <div className="contact-form">
      <h1>Start Your Australian Journey Today</h1>
      {status === 'success' && (
        <div className="success-message">
          Thank you for your message! We will get back to you soon.
        </div>
      )}
      {status === 'error' && (
        <div className="error-message">
          Sorry, there was an error sending your message. Please try again later.
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
