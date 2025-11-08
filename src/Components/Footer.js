const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-brand-accent">
              AMES GROUP DUBAI
            </h1>
            <p className="mt-2 text-sm text-gray-300">
              Your Gateway to Global Opportunities
            </p>
          </div>
          <div className="flex gap-4 text-2xl text-white">
            <a
              href="/"
              className="transition hover:text-brand-primary"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-square" />
            </a>
            <a
              href="/"
              className="transition hover:text-brand-primary"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram-square" />
            </a>
            <a
              href="/"
              className="transition hover:text-brand-primary"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp-square" />
            </a>
            <a
              href="/"
              className="transition hover:text-brand-primary"
              aria-label="Twitter"
            >
              <i className="fa-brands fa-twitter-square" />
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-8 text-left sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-lg font-semibold text-white">Immigration Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>
                <a href="/service" className="transition hover:text-brand-primary">
                  Student Visas
                </a>
              </li>
              <li>
                <a href="/service" className="transition hover:text-brand-primary">
                  Work Visas
                </a>
              </li>
              <li>
                <a href="/service" className="transition hover:text-brand-primary">
                  Permanent Residency
                </a>
              </li>
              <li>
                <a href="/service" className="transition hover:text-brand-primary">
                  Family Visas
                </a>
              </li>
              <li>
                <a href="/service" className="transition hover:text-brand-primary">
                  Business Visas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Destinations</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>
                <a href="/" className="transition hover:text-brand-primary">
                  Australia
                </a>
              </li>
              <li>
                <a href="/" className="transition hover:text-brand-primary">
                  Canada
                </a>
              </li>
              <li>
                <a href="/" className="transition hover:text-brand-primary">
                  USA
                </a>
              </li>
              <li>
                <a href="/" className="transition hover:text-brand-primary">
                  UK
                </a>
              </li>
              <li>
                <a href="/" className="transition hover:text-brand-primary">
                  UAE Golden Visa
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>
                <a href="/contact" className="transition hover:text-brand-primary">
                  Free Assessment
                </a>
              </li>
              <li>
                <a href="/contact" className="transition hover:text-brand-primary">
                  Consultation
                </a>
              </li>
              <li>
                <a href="/contact" className="transition hover:text-brand-primary">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/about" className="transition hover:text-brand-primary">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>
                <a href="/" className="transition hover:text-brand-primary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/" className="transition hover:text-brand-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" className="transition hover:text-brand-primary">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="/" className="transition hover:text-brand-primary">
                  Complaints
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} AMES Group Dubai. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

