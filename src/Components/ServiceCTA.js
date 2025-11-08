const ServiceCTA = () => (
  <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="grid gap-8 rounded-3xl bg-white p-8 shadow-card sm:p-12 md:grid-cols-[1.3fr_1fr] md:items-center">
      <div>
        <h2 className="text-2xl font-bold text-brand-primary sm:text-3xl">
          Need clarity on your visa options?
        </h2>
        <p className="mt-3 text-sm text-gray-600 sm:text-base">
          Send us your details and one of our consultants will review your
          profile, identify the strongest routes, and outline timelines and
          costs—at no obligation.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="/assessment"
            className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white transition duration-200 hover:-translate-y-0.5 hover:bg-brand-primaryDark"
          >
            Start Free Assessment
            <i className="fa-solid fa-arrow-right" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-brand-primary px-5 py-3 text-xs font-semibold uppercase tracking-wide text-brand-primary transition duration-200 hover:-translate-y-0.5 hover:bg-brand-primary/10"
          >
            Book a Call
            <i className="fa-solid fa-phone" />
          </a>
        </div>
      </div>
      <div className="rounded-2xl bg-brand-primary/5 p-6 text-sm text-gray-700 shadow-inner">
        <h3 className="text-base font-semibold text-brand-primary">
          What you can expect
        </h3>
        <ul className="mt-4 space-y-2">
          {[
            "Personalized visa recommendations",
            "Document checklist with templates",
            "Tips on increasing approval chances",
            "Support timeline tailored to your goals",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <i className="fa-solid fa-circle-check mt-1 text-brand-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ServiceCTA;


