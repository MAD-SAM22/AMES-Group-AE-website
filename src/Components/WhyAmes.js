const WhyAmes = () => {
  const highlights = [
    {
      title: "Local advisers who reply quickly",
      description:
        "You work with a named consultant in our Dubai office—no call centres or ticket systems. WhatsApp updates are standard, not extra.",
      icon: "fa-solid fa-headset",
    },
    {
      title: "Document prep that holds up",
      description:
        "We align CVs, bank letters, and employment histories with embassy checklists so you are not asked for the same document twice.",
      icon: "fa-solid fa-file-pen",
    },
    {
      title: "Clear numbers before you commit",
      description:
        "Proof-of-funds, tuition, business investment—we walk through the maths together so you know what is realistic for your family.",
      icon: "fa-solid fa-scale-balanced",
    },
    {
      title: "Weekly status briefings",
      description:
        "Quotas shift and biometrics slots close. We let you know as it happens and adjust the plan instead of waiting for surprises.",
      icon: "fa-solid fa-calendar-check",
    },
    {
      title: "Relocation aftercare",
      description:
        "Housing introductions, schooling, bank accounts—our network stays with you once the visa is stamped.",
      icon: "fa-solid fa-people-roof",
    },
    {
      title: "Transparent fees and paperwork",
      description:
        "Milestone-based invoices and shared document trackers mean you always see what has been sent and paid.",
      icon: "fa-solid fa-receipt",
    },
  ];

  return (
    <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">
          Why AMES Group
        </span>
        <h2 className="mt-6 text-3xl font-bold text-brand-accent sm:text-4xl">
          Practical guidance from people who handle visas every day
        </h2>
        <p className="mt-4 text-base text-gray-600 sm:text-lg">
          We are a Dubai-based advisory that knows the reality of embassy queues,
          sponsorship rules, and relocation logistics. Here is how that
          experience shows up when you work with us.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {highlights.map((card) => (
          <div
            key={card.title}
            className="group flex flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
              <i className={`${card.icon} text-xl`} />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-brand-accent">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyAmes;


