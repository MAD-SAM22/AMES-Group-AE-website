import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  // Initialize EmailJS with hardcoded values
  emailjs.init({
    publicKey: "2u6lKp7eM2aUaWEdd",
    privateKey: "ibFsE4GDoirj7sSn4kutz",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

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
        to_name: "AMES Group Dubai",
        to_email: process.env.REACT_APP_EMAILJS_RECIPIENT_EMAIL,
        from_name: formData.fullName,
        from_email: formData.email,
        message: formattedMessage,
        reply_to: formData.email,
        subject: `New Contact Form - ${formData.service} Inquiry from ${formData.fullName}`,
      };

      console.log("Attempting to send contact form with EmailJS...");
      console.log("Template params:", templateParams);

      const response = await emailjs.send(
        "service_xqhk3fw",
        "template_xkjoc75",
        templateParams
      );

      console.log("Contact form sent successfully:", response);
      setStatus("success");

      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send contact form:", error);
      console.error("Error details:", {
        message: error.message,
        status: error.status,
        text: error.text,
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

      if (
        window.confirm(
          "EmailJS failed. Would you like to open your email client to send the message manually?"
        )
      ) {
        window.open(mailtoLink);
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    }
  };

  return (
    <div className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-0">
      <h1 className="text-center text-3xl font-bold text-brand-accent sm:text-4xl">
        Start Your Global Journey Today
      </h1>

      {status === "success" && (
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-5 text-center text-green-700 shadow-sm">
          <div className="flex items-center justify-center gap-2 text-lg font-semibold">
            <i className="fas fa-check-circle" />
            Message Sent Successfully!
          </div>
          <p className="mt-2 text-sm text-green-800">
            Thank you for your message! We will get back to you soon.
          </p>
        </div>
      )}
      {status === "error" && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-5 text-center text-red-700 shadow-sm">
          Sorry, there was an error sending your message. Please try again or
          contact us directly at{" "}
          <a
            href={`mailto:${process.env.REACT_APP_EMAILJS_RECIPIENT_EMAIL}`}
            className="font-semibold underline"
          >
            {process.env.REACT_APP_EMAILJS_RECIPIENT_EMAIL}
          </a>
          .
        </div>
      )}
      {status === "sending" && (
        <div className="mt-6 rounded-xl border border-brand-primary/30 bg-brand-primary/10 p-5 text-center text-brand-primary shadow-sm">
          <i className="fas fa-spinner fa-spin mr-2" />
          Sending your message...
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-card sm:p-8"
      >
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="rounded-lg border border-gray-200 px-4 py-3 text-gray-700 shadow-sm transition duration-200 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="rounded-lg border border-gray-200 px-4 py-3 text-gray-700 shadow-sm transition duration-200 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="rounded-lg border border-gray-200 px-4 py-3 text-gray-700 shadow-sm transition duration-200 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
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
          className="min-h-[150px] rounded-lg border border-gray-200 px-4 py-3 text-gray-700 shadow-sm transition duration-200 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-2 inline-flex items-center justify-center rounded-lg bg-brand-primary px-6 py-3 text-base font-semibold text-white transition duration-200 hover:bg-brand-primaryDark disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          {status === "sending" ? "Sending..." : "Request Free Assessment"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

