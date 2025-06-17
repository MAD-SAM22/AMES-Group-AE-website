import "./ContactFormStyles.css";
function ContactForm() {
  return (
    <div className="contact-form">
      <h1>Send a message to us!</h1>
      <form>
        <input placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="message.." row="4" />
        <button>Send Message</button>
      </form>
    </div>
  );
}
export default ContactForm;
