const ServiceOverview = () => {
  const focusAreas = [
    {
      title: "Student Visas",
      description:
        "Admissions, visa paperwork, and arrival support for studying across Australia, Canada, the UK, USA, Europe, and more.",
      icon: "fa-solid fa-graduation-cap",
    },
    {
      title: "Work & Skilled Migration",
      description:
        "Occupation assessments, sponsorship, and permanent residency pathways tailored to your professional goals.",
      icon: "fa-solid fa-briefcase",
    },
    {
      title: "Family & Partner Visas",
      description:
        "Reunite with loved ones through partner, parent, child, and dependent visas with evidence-led coaching.",
      icon: "fa-solid fa-people-roof",
    },
    {
      title: "Investor & UAE Golden Visas",
      description:
        "Investment strategy, company setup, and long-term residency solutions including the UAE Golden Visa.",
      icon: "fa-solid fa-hand-holding-dollar",
    },
  ];

  return (
    <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-white p-8 shadow-card sm:p-12">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">
            Comprehensive services
          </span>
          <h2 className="mt-4 text-3xl font-bold text-brand-primary sm:text-4xl">
            Immigration services built on the AMES Group legacy
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-gray-600 sm:text-base">
            From our Dubai branch we deliver the Australian team’s proven
            methodology—clear advice, accurate documentation, and genuine care
            from consultation to arrival.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="flex h-full flex-col rounded-2xl border border-gray-100 bg-brand-primary/5 p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-white">
                <i className={`${area.icon} text-lg`} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-primary">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;


