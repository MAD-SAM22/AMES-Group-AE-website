const phases = [
  {
    title: "1 · Discover",
    points: [
      "Understand destinations, visa subclasses, and eligibility",
      "Compare study, work, and residency options side by side",
      "Receive an outline of costs, documents, and timelines",
    ],
  },
  {
    title: "2 · Plan",
    points: [
      "Prepare applications, financials, and supporting evidence",
      "Complete skills assessments, admissions, and sponsorship tasks",
      "Practise interviews and biometrics appointments with our team",
    ],
  },
  {
    title: "3 · Act",
    points: [
      "Lodge visas, respond to immigration requests, and track updates",
      "Arrange travel, accommodation, insurance, and settlement essentials",
      "Stay connected for renewals, PR upgrades, or family sponsorships",
    ],
  },
];

const ServiceJourney = () => (
  <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="grid gap-10 rounded-3xl bg-brand-primary p-8 text-white shadow-2xl sm:p-12 md:grid-cols-[1.1fr_1fr] md:items-center">
      <div>
        <h2 className="text-3xl font-bold sm:text-4xl">
          Mirror the Australian branch’s proven journey
        </h2>
        <p className="mt-3 text-sm text-white/80 sm:text-base">
          The Dubai office follows the same three-step approach that has helped
          thousands succeed through AMES Group Australia—discover, plan, and act
          with confidence.
        </p>
        <a
          href="/assessment"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-wide text-brand-primary transition duration-200 hover:-translate-y-0.5 hover:bg-gray-100"
        >
          Request your roadmap
          <i className="fa-solid fa-arrow-right" />
        </a>
      </div>
      <div className="space-y-6">
        {phases.map((phase) => (
          <div
            key={phase.title}
            className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm shadow-inner transition duration-200 hover:bg-white/15"
          >
            <h3 className="text-lg font-semibold text-white">{phase.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {phase.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-check mt-1 text-brand-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceJourney;


