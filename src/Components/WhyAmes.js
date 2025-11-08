const WhyAmes = () => {
  const highlights = [
    {
      title: "One-stop visa experts",
      description:
        "Replicating our Australian HQ, the Dubai office delivers end-to-end support for student, skilled, family, and investor visas.",
      icon: "fa-solid fa-globe",
    },
    {
      title: "Global partner network",
      description:
        "Access offers from universities, colleges, and employers across 15+ countries through longstanding AMES partnerships.",
      icon: "fa-solid fa-school",
    },
    {
      title: "Local consultants in Dubai",
      description:
        "Meet in person or online with multilingual advisers who understand GCC requirements and keep you updated in real time.",
      icon: "fa-solid fa-handshake",
    },
    {
      title: "Licensed & compliant",
      description:
        "Our counsellors follow the same MARA, ICCRC, and OISC standards as the Australian team to ensure every submission is accurate.",
      icon: "fa-solid fa-shield-check",
    },
    {
      title: "Practical relocation insights",
      description:
        "From accommodation to cultural orientation, we prepare you to thrive abroad, not just obtain the visa stamp.",
      icon: "fa-solid fa-route",
    },
    {
      title: "Transparent planning",
      description:
        "Straightforward budgets, timelines, and document trackers keep you in control at every stage of the journey.",
      icon: "fa-solid fa-clipboard-check",
    },
  ];

  return (
    <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">
          Why AMES Group
        </span>
        <h2 className="mt-6 text-3xl font-bold text-brand-accent sm:text-4xl">
          Global expertise with a Dubai-based team
        </h2>
        <p className="mt-4 text-base text-gray-600 sm:text-lg">
          As the GCC extension of AMES Group Australia, we combine international
          reach with local knowledge to manage every step of your migration plan.
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


