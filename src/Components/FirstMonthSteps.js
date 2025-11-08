const FirstMonthSteps = () => {
  const steps = [
    {
      title: "Discover your best-fit pathway",
      description:
        "We explore destinations, visa categories, budgets, and timelines so you can select the route that matches your goals.",
    },
    {
      title: "Plan with personalised guidance",
      description:
        "Together we build your course or migration plan, gather documents, and prepare for financial, English, and compliance requirements.",
    },
    {
      title: "Take action with confidence",
      description:
        "Our team submits, tracks, and follows up on your visa while you prepare for departure with cultural and settlement support.",
    },
  ];

  return (
    <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-gradient-to-r from-brand-primary to-brand-primaryDark p-8 sm:p-12">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Three simple phases to move you abroad
            </h2>
            <p className="mt-4 text-base text-white/80">
              The Dubai team mirrors AMES Group Australia’s proven playbook:
              discover where you fit, plan the detail, then act with a fully
              prepared application.
            </p>
            <a
              href="/assessment"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-primary transition duration-200 hover:-translate-y-0.5 hover:bg-gray-100"
            >
              Book your free strategy call
              <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
          <ol className="space-y-6">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="flex items-start gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-sm"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-lg font-bold text-brand-primary">
                  {index + 1}
                </span>
                <div className="text-white">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/80">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default FirstMonthSteps;


