const HomeCTA = () => (
  <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="overflow-hidden rounded-3xl border border-brand-primary/20 bg-white p-8 shadow-card sm:p-12">
      <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center">
        <div>
        <h2 className="text-2xl font-bold text-brand-primary sm:text-3xl">
          Book an appointment with our Dubai consultants
          </h2>
          <p className="mt-4 text-sm text-gray-600 sm:text-base">
            Share your study, work, or residency ambitions and we’ll mirror the
            Australian branch’s proven methodology to map the best visa plan for
            you.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/assessment"
              className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white transition duration-200 hover:-translate-y-0.5 hover:bg-brand-primaryDark"
            >
              Book Appointment
              <i className="fa-solid fa-calendar-check" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-brand-primary px-6 py-3 text-xs font-semibold uppercase tracking-wide text-brand-primary transition duration-200 hover:-translate-y-0.5 hover:bg-brand-primary/10"
            >
              Talk to an Expert
              <i className="fa-solid fa-phone" />
            </a>
          </div>
        </div>
        <div className="rounded-2xl bg-brand-primary/5 p-6 text-sm text-gray-700 shadow-inner">
          <h3 className="text-base font-semibold text-brand-primary">
            During your consultation
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Eligibility assessment for study, work, and residency visas",
              "Recommendations rooted in AMES Group’s global partnerships",
              "Step-by-step document and budgeting checklist",
              "Orientation tips for thriving in your new destination",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <i className="fa-solid fa-circle-check mt-1 text-brand-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default HomeCTA;


