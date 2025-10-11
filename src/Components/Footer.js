import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1 className="footer-text">AMES GROUP DUBAI</h1>
          <p>Your Gateway to Global Opportunities</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-whatsapp-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Immigration Services</h4>
          <a href="/service">Student Visas</a>
          <a href="/service">Work Visas</a>
          <a href="/service">Permanent Residency</a>
          <a href="/service">Family Visas</a>
          <a href="/service">Business Visas</a>
        </div>
        <div>
          <h4>Destinations</h4>
          <a href="/">Australia</a>
          <a href="/">Canada</a>
          <a href="/">USA</a>
          <a href="/">UK</a>
          <a href="/">UAE Golden Visa</a>
        </div>

        <div>
          <h4>Support</h4>
          <a href="/contact">Free Assessment</a>
          <a href="/contact">Consultation</a>
          <a href="/contact">Contact Us</a>
          <a href="/about">About Us</a>
        </div>
        <div>
          <h4>Legal</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Disclaimer</a>
          <a href="/">Complaints</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
