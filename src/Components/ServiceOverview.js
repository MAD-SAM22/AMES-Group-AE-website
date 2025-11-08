const ServiceOverview = () => {
  const focusAreas = [
    {
      title: "Professionals & Skilled Workers",
      description:
        "Strategic guidance on skilled migration, employer sponsorship, and points-boosting pathways tailored to your career trajectory.",
      icon: "fa-solid fa-briefcase",
    },
    {
      title: "Students & Graduates",
      description:
        "University placement, visa preparation, and post-study work planning designed for ambitious students leaving the UAE.",
      icon: "fa-solid fa-graduation-cap",
    },
    {
      title: "Investors & Entrepreneurs",
      description:
        "Business migration, startup visas, and Golden Visa programs supported by dedicated legal and corporate services teams.",
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
            Tailored immigration support for every pathway
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-gray-600 sm:text-base">
            We combine licensed immigration expertise with Dubai-based service
            teams to deliver transparent advice, meticulously prepared
            applications, and relocation support that doesn’t stop at visa
            approval.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
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


