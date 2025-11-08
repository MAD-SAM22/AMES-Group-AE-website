const HomeCTA = () => (
  <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="overflow-hidden rounded-3xl border border-brand-primary/20 bg-white p-8 shadow-card sm:p-12">
      <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-brand-primary sm:text-3xl">
            Let’s shape your international move together
          </h2>
          <p className="mt-4 text-sm text-gray-600 sm:text-base">
            Take three minutes to tell us about your goals and we’ll share a
            tailored immigration roadmap with timelines, budget guidance, and the
            documents to prioritise.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/assessment"
              className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white transition duration-200 hover:-translate-y-0.5 hover:bg-brand-primaryDark"
            >
              Start Free Assessment
              <i className="fa-solid fa-arrow-right" />
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
            What you’ll receive
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Eligibility review by licensed consultants",
              "Visa options ranked for your profile",
              "Document checklist and templates",
              "Budget and timeline guidance",
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


