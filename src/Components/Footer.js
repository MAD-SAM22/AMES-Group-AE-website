const quickLinks = {
  services: [
    { label: "Student Visas", url: "/service" },
    { label: "Work Visas", url: "/service" },
    { label: "Permanent Residency", url: "/service" },
    { label: "Family Visas", url: "/service" },
    { label: "Business Visas", url: "/service" },
  ],
  destinations: [
    { label: "Australia", url: "/" },
    { label: "Canada", url: "/" },
    { label: "USA", url: "/" },
    { label: "UK", url: "/" },
    { label: "UAE Golden Visa", url: "/" },
  ],
  support: [
    { label: "Free Assessment", url: "/contact" },
    { label: "Consultation", url: "/contact" },
    { label: "Contact Us", url: "/contact" },
    { label: "About Us", url: "/about" },
  ],
  legal: [
    { label: "Terms of Service", url: "/" },
    { label: "Privacy Policy", url: "/" },
    { label: "Disclaimer", url: "/" },
    { label: "Complaints", url: "/" },
  ],
};

const socials = [
  { icon: "fa-brands fa-facebook-f", label: "Facebook" },
  { icon: "fa-brands fa-instagram", label: "Instagram" },
  { icon: "fa-brands fa-whatsapp", label: "WhatsApp" },
  { icon: "fa-brands fa-twitter", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer className="mt-20 bg-brand-primary text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-3xl bg-white/5 p-8 shadow-xl backdrop-blur-sm sm:p-12">
          <div className="flex flex-col gap-8 border-b border-white/10 pb-10 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-white">
                AMES GROUP DUBAI
              </h1>
              <p className="mt-3 max-w-md text-sm text-white/80">
                Licensed immigration advisers based on Sheikh Zayed Road,
                supporting professionals, families, and investors with
                transparent end-to-end visa strategies.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/assessment"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-wide text-brand-primary transition duration-200 hover:-translate-y-0.5 hover:bg-gray-100"
              >
                Start Free Assessment
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Speak to a Consultant
                <i className="fa-solid fa-phone" />
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-10 text-left lg:grid-cols-5">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Visit us</h4>
              <p className="text-sm text-white/70">
                Office 402, Tower A<br />
                Sheikh Zayed Road, Dubai UAE
              </p>
              <p className="text-sm text-white/70">
                <a href="tel:+97145138670" className="hover:text-brand-accent">
                  +971 4 513 8670
                </a>
                <br />
                <a
                  href="mailto:hello@amesgroup.ae"
                  className="hover:text-brand-accent"
                >
                  hello@amesgroup.ae
                </a>
              </p>
              <div className="mt-4 text-xs text-white/60">
                Sunday – Thursday: 9am – 6pm
                <br />
                Saturday consultations by appointment
              </div>
              <div className="mt-4 flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href="/"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg transition duration-200 hover:bg-brand-accent hover:text-white"
                  >
                    <i className={social.icon} />
                  </a>
                ))}
              </div>
            </div>

            <FooterColumn title="Immigration Services" items={quickLinks.services} />
            <FooterColumn title="Destinations" items={quickLinks.destinations} />
            <FooterColumn title="Support" items={quickLinks.support} />
            <FooterColumn title="Legal" items={quickLinks.legal} />
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center text-xs text-white/60 sm:flex-row sm:justify-between sm:text-left">
            <p>
              © {new Date().getFullYear()} AMES Group Dubai. All rights reserved.
            </p>
            <p>
              Licensed immigration consultants • Member of MARA, ICCRC & OISC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, items }) => (
  <div>
    <h4 className="text-lg font-semibold text-white">{title}</h4>
    <ul className="mt-4 space-y-2 text-sm text-white/70">
      {items.map((item) => (
        <li key={item.label}>
          <a
            href={item.url}
            className="transition duration-200 hover:text-brand-accent"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;

