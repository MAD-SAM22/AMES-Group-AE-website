const FirstMonthSteps = () => {
  const steps = [
    {
      title: "Intro call & document checklist",
      description:
        "We review your goals, audit existing paperwork, and create a realistic route with tasks for both you and our team.",
    },
    {
      title: "Coaching & paperwork preparation",
      description:
        "We coordinate translations, notarizations, IELTS prep, or business planning so your file meets embassy standards.",
    },
    {
      title: "Application lodgment & follow up",
      description:
        "Your consultant files the application, manages biometrics, and sends weekly updates until a decision is issued.",
    },
  ];

  return (
    <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-gradient-to-r from-brand-primary to-brand-primaryDark p-8 sm:p-12">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold sm:text-4xl">
              What the first month with AMES looks like
            </h2>
            <p className="mt-4 text-base text-white/80">
              We start by understanding the life you want to build abroad, then
              break the work into clear actions we take together.
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


