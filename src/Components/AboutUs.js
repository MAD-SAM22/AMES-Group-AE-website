import React from "react";
import about_img from "../assets/about.png";
import play_icon from "../assets/play-icon.png";

const values = [
  {
    title: "Comprehensive services",
    description:
      "Student visas, skilled migration, family sponsorship, permanent residency, and UAE Golden Visa programs delivered under one roof.",
    icon: "fa-solid fa-layer-group",
  },
  {
    title: "Personalised support",
    description:
      "Experienced counsellors tailor each step to your goals, ensuring you understand requirements, costs, and timelines.",
    icon: "fa-solid fa-user-check",
  },
  {
    title: "Proven success",
    description:
      "Since 2007, AMES Group has helped thousands achieve their study and migration ambitions across 15+ destinations.",
    icon: "fa-solid fa-chart-line",
  },
  {
    title: "Transparent & affordable",
    description:
      "Competitive pricing with clear documentation checklists keeps you in control of every milestone.",
    icon: "fa-solid fa-scale-balanced",
  },
  {
    title: "Free initial consultation",
    description:
      "Start with a no-cost assessment to explore your options and receive tailored recommendations from licensed consultants.",
    icon: "fa-solid fa-comments",
  },
  {
    title: "Client-first approach",
    description:
      "We prioritise your experience with seamless, stress-free support from your first question to your arrival abroad.",
    icon: "fa-solid fa-hands-holding-circle",
  },
];

const languages = [
  "English",
  "Arabic",
  "Hindi",
  "Urdu",
  "Spanish",
  "French",
  "Chinese",
  "Russian",
  "Thai",
  "Portuguese",
  "Tamil",
  "Sinhala",
];

const businessHighlights = [
  "Strong client focus with dedicated guidance at every stage.",
  "Extensive network of partner universities, colleges, and employers worldwide.",
  "Comprehensive services covering education counselling, visa assistance, and post-arrival support.",
  "Experienced consultants with in-depth knowledge of global immigration systems.",
];

const leadership = [
  {
    name: "Ossama Abdellatif",
    role: "AMES Group Founder",
    summary:
      "Launched AMES Group in 2007 to make global education and migration accessible for students, professionals, and families. The Dubai branch continues this vision for the Middle East.",
  },
];

const accreditations = [
  "Registered MARA Agents",
  "ICCRC Regulated Consultants",
  "OISC Accredited Advisers",
  "Certified Education Agents",
];

const AboutUs = ({ setPlayState }) => {
  const handlePlayClick = () => {
    if (setPlayState) {
      setPlayState(true);
    }
  };

  return (
    <div className="space-y-20 pb-20">
      <section className="mx-auto mt-20 flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-4 md:flex-row md:justify-between md:px-6 lg:px-8">
        <div className="w-full text-center md:w-1/2 md:text-left">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-accent">
              About AMES Group Dubai
            </p>
            <h1 className="mt-3 text-3xl font-bold text-brand-primary sm:text-4xl">
              Extending Australia’s trusted expertise to the UAE
            </h1>
          </div>
          <div className="mt-6 space-y-5 text-left text-base leading-relaxed text-gray-600">
            <p>
              Founded in 2007, AMES Group has become a leading provider of
              education and immigration services. Our Dubai branch mirrors the
              Australian headquarters—delivering personalised counselling,
              accurate visa preparation, and relocation assistance to clients
              throughout the Middle East.
            </p>
            <p>
              Whether you are pursuing studies, skilled migration, family
              sponsorship, or long-term residency, we provide end-to-end support
              that keeps you confident and informed at every step.
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
            Why clients choose AMES Group
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
        <div className="rounded-3xl bg-brand-primary/5 p-8 shadow-inner sm:p-10">
          <h3 className="text-center text-xl font-semibold text-brand-primary sm:text-2xl">
            Speak your language, feel at home
          </h3>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-gray-600 sm:text-base">
            Discussing visas is easier when you can communicate comfortably. Our
            multilingual advisers bridge the language gap so you can focus on
            your plans, not translation.
          </p>
          <div className="mt-8 grid gap-3 text-center text-sm font-medium text-brand-primary sm:grid-cols-3 md:text-base">
            {languages.map((language) => (
              <span
                key={language}
                className="rounded-full bg-white px-4 py-2 shadow-sm"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-card sm:p-12">
          <h2 className="text-center text-2xl font-bold text-brand-primary sm:text-3xl">
            Business overview
          </h2>
          <ul className="mx-auto mt-6 max-w-4xl list-disc space-y-3 text-sm text-gray-600 sm:text-base md:pl-8">
            {businessHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div className="rounded-3xl bg-white p-8 shadow-card sm:p-12">
            <h2 className="text-2xl font-bold text-brand-primary sm:text-3xl">
              Leadership
            </h2>
            <p className="mt-3 text-sm text-gray-600 sm:text-base">
              Guided by founder Ossama Abdellatif, AMES Group continues to expand
              globally while upholding the service standards that began in
              Australia.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-1">
              {leadership.map((person) => (
                <div
                  key={person.name}
                  className="flex h-full flex-col rounded-2xl border border-gray-100 bg-brand-primary/5 p-6 shadow-sm"
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

          <div className="rounded-3xl bg-brand-primary/5 p-8 shadow-inner">
            <h3 className="text-xl font-semibold text-brand-primary">
              Accreditations & memberships
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Compliance remains central to our work. Each case is managed by
              consultants who hold active registrations with leading global
              bodies.
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
        <div className="grid gap-8 rounded-3xl bg-brand-primary p-8 text-white shadow-2xl sm:p-12 md:grid-cols-[2fr_1fr] md:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Cross the bridge to your dreams
            </h2>
            <p className="mt-3 text-sm text-white/80">
              Contact us for a free consultation. We’ll review your profile,
              discuss destinations, and map the steps to study, work, or settle
              abroad with confidence.
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
                "Personalised visa roadmap and document checklist",
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