const phases = [
  {
    title: "1 · Strategy & Readiness",
    points: [
      "Eligibility review by licensed consultants",
      "Document checklist with templates and examples",
      "Financial planning and proof of funds guidance",
    ],
  },
  {
    title: "2 · Application Build",
    points: [
      "Skills assessments, sponsorship, and course admissions",
      "Submission-ready documentation compiled by our Dubai team",
      "Mock interviews and embassy appointment preparation",
    ],
  },
  {
    title: "3 · Approval & Settlement",
    points: [
      "Application lodgment with ongoing follow-ups",
      "Relocation support—housing, schooling, bank introductions",
      "Post-arrival compliance reminders and visa renewals",
    ],
  },
];

const ServiceJourney = () => (
  <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="grid gap-10 rounded-3xl bg-brand-primary p-8 text-white shadow-2xl sm:p-12 md:grid-cols-[1.1fr_1fr] md:items-center">
      <div>
        <h2 className="text-3xl font-bold sm:text-4xl">
          A proven journey from consultation to arrival
        </h2>
        <p className="mt-3 text-sm text-white/80 sm:text-base">
          Each service engagement is mapped against measurable milestones.
          You’ll always know what’s in progress, what’s approved, and which
          tasks still need attention.
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


