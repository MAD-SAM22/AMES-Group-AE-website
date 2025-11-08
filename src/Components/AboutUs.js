import React from "react";
import about_img from "../assets/about.png";
import play_icon from "../assets/play-icon.png";

const AboutUs = ({ setPlayState }) => {
  const handlePlayClick = () => {
    if (setPlayState) {
      setPlayState(true);
    }
  };

  const values = [
    {
      title: "Straightforward advice",
      description:
        "You receive clear answers on eligibility, costs, and timelines before we move a single document.",
      icon: "fa-solid fa-comments",
    },
    {
      title: "Compliance first",
      description:
        "Every file is prepared with licensed practitioners who work directly with MARA, ICCRC, and OISC standards.",
      icon: "fa-solid fa-shield-check",
    },
    {
      title: "Dubai to destination",
      description:
        "Local insights, embassy relationships, and relocation partners ensure support from visa lodgment to arrival.",
      icon: "fa-solid fa-earth-asia",
    },
  ];

  const timeline = [
    {
      year: "2011",
      heading: "Founded on Sheikh Zayed Road",
      copy: "AMES Group opened in Dubai with a focus on Australian student and skilled migration programs.",
    },
    {
      year: "2015",
      heading: "Expanded to full-service immigration",
      copy: "We added Canada, UK, and USA pathways while building an in-house documentation team.",
    },
    {
      year: "2019",
      heading: "Relocation & settlement desk",
      copy: "Families and investors gained access to housing, schooling, and business setup support in destination countries.",
    },
    {
      year: "2023",
      heading: "Regional leadership in UAE Golden Visa",
      copy: "Our consultants helped corporate clients secure long-term residency and talent mobility across the GCC.",
    },
  ];

  const leadership = [
    {
      name: "Shazia Malik",
      role: "Managing Partner & Principal Consultant",
      summary:
        "Licensed MARA adviser with 12+ years guiding GCC professionals through skilled migration, employer sponsorship, and PR pathways.",
    },
    {
      name: "Omar Al Saeed",
      role: "Head of Corporate & Golden Visa Services",
      summary:
        "Oversees investor, entrepreneur, and VIP applications while coordinating our UAE corporate sponsorship desk.",
    },
    {
      name: "Dr. Nina Patel",
      role: "Director of Education & Settlement",
      summary:
        "Former university admissions lead who supports student visa strategy, schooling, and settlement planning for families.",
    },
  ];

  const accreditations = [
    "Registered MARA Agents",
    "ICCRC Regulated Consultants",
    "OISC Accredited Advisers",
    "Certified Education Agents",
  ];

  return (
    <div className="space-y-20 pb-20">
      <section className="mx-auto mt-20 flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-4 md:flex-row md:justify-between md:px-6 lg:px-8">
        <div className="w-full text-center md:w-1/2 md:text-left">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-accent">
              About AMES Group Dubai
            </p>
            <h1 className="mt-3 text-3xl font-bold text-brand-primary sm:text-4xl">
              Immigration specialists rooted in the UAE
            </h1>
          </div>
          <div className="mt-6 space-y-5 text-left text-base leading-relaxed text-gray-600">
            <p>
              AMES Group is a Dubai-born consultancy dedicated to helping
              professionals, families, and investors build futures in Australia,
              Canada, the United Kingdom, the United States, and the UAE.
            </p>
            <p>
              Our consultants operate under international licensing bodies and
              combine legal diligence with local insight. We manage every step—
              from assessing eligibility to preparing for interviews and settling
              in your new country.
            </p>
            <p>
              The result is a transparent partnership where you always know the
              documents submitted, the status of your file, and the milestones
              ahead.
            </p>
          </div>
        </div>

        <div className="relative flex w-full items-center justify-center md:w-2/5">
          <img
            src={about_img}
            alt="About AMES Group Dubai"
            className="w-full rounded-3xl shadow-2xl"
          />
          <button
            type="button"
            onClick={handlePlayClick}
            className="absolute flex h-20 w-20 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-white text-brand-primary shadow-2xl transition duration-200 hover:scale-105 md:h-24 md:w-24"
            aria-label="Play introduction video"
          >
            <img
              src={play_icon}
              alt="Play"
              className="h-12 w-12 object-contain md:h-14 md:w-14"
            />
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-card sm:p-12">
          <h2 className="text-center text-2xl font-bold text-brand-primary sm:text-3xl">
            What guides our work
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-gray-100 bg-brand-primary/5 p-6 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-lg"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/10 text-brand-primary">
                  <i className={`${value.icon} text-xl`} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-primary">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div>
            <h2 className="text-2xl font-bold text-brand-primary sm:text-3xl">
              Our journey so far
            </h2>
            <p className="mt-4 text-base text-gray-600">
              From a boutique advisory to a multi-country immigration firm, our
              growth has been shaped by client referrals, licensed expertise, and
              a relentless focus on outcomes.
            </p>
            <div className="mt-8 space-y-6">
              {timeline.map((item) => (
                <div
                  key={item.year}
                  className="relative rounded-2xl border border-gray-100 bg-white/80 p-6 shadow-sm"
                >
                  <span className="inline-flex items-center rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-accent">
                    {item.year}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-brand-primary">
                    {item.heading}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-brand-primary/5 p-8 shadow-inner">
            <h3 className="text-xl font-semibold text-brand-primary">
              Accreditations & memberships
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Compliance is at the heart of each file we submit. Our consultants
              maintain active registration with these governing bodies.
            </p>
            <ul className="mt-6 space-y-3 text-sm font-medium text-brand-primary">
              {accreditations.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm"
                >
                  <i className="fa-solid fa-check text-brand-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-card sm:p-12">
          <h2 className="text-center text-2xl font-bold text-brand-primary sm:text-3xl">
            Leadership team
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-gray-600">
            A multidisciplinary group of immigration lawyers, former admissions
            officers, and relocation specialists who have lived abroad and guided
            thousands of applications.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="flex h-full flex-col rounded-2xl border border-gray-100 bg-brand-primary/5 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-white text-lg font-semibold">
                    {person.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-brand-primary">
                      {person.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wide text-brand-accent">
                      {person.role}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">{person.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl bg-brand-primary p-8 text-white shadow-2xl sm:p-12 md:grid-cols-[2fr_1fr] md:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Ready to explore your pathway abroad?
            </h2>
            <p className="mt-3 text-sm text-white/80">
              Share your goals and we will map out a tailored immigration plan,
              including timelines, costs, and documents, within one business day.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/assessment"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-wide text-brand-primary transition duration-200 hover:-translate-y-0.5 hover:bg-gray-100"
              >
                Start Free Assessment
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Book a Consultation
                <i className="fa-solid fa-phone" />
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 text-sm text-white/80 shadow-inner">
            <h3 className="text-base font-semibold text-white">
              What you receive
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                "Eligibility review by licensed consultants",
                "Personalized visa roadmap and document checklist",
                "Guidance on proof of funds and compliance",
                "Timeline and cost estimate tailored to your case",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-check mt-1 text-brand-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;