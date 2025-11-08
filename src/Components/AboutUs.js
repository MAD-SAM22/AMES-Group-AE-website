import React from "react";
import about_img from "../assets/about.png";
import play_icon from "../assets/play-icon.png";

const AboutUs = ({ setPlayState }) => {
  const handlePlayClick = () => {
    if (setPlayState) {
      setPlayState(true);
    }
  };

  return (
    <section className="mx-auto my-20 flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-4 md:flex-row md:justify-between md:px-6 lg:px-8">
      <div className="w-full text-center md:w-1/2 md:text-left">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-primary">
            About AMES Group Dubai
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand-accent sm:text-4xl">
            Your Gateway to Global Opportunities
          </h2>
        </div>
        <div className="mt-6 space-y-5 text-left text-base leading-relaxed text-gray-600">
          <p>
            AMES Group Dubai is your trusted partner in international immigration
            and education services. Based in the heart of Dubai, we specialize in
            helping individuals and families achieve their dreams of studying,
            working, and living abroad through comprehensive support and expert
            guidance.
          </p>
          <p>
            With years of experience and a deep understanding of global
            immigration systems, we provide personalized solutions for visa
            applications, university admissions, and settlement services across
            Australia, Canada, USA, UK, UAE, and more. Our Dubai location gives us
            unique insights into the Middle East market and regional opportunities.
          </p>
          <p>
            Our dedicated team of immigration specialists and education
            consultants ensures a smooth transition to your chosen destination,
            handling everything from visa processing to settlement support. We
            understand the unique challenges faced by Dubai residents seeking
            international opportunities and provide tailored solutions for your
            success.
          </p>
        </div>
      </div>

      <div className="relative flex w-full items-center justify-center md:w-2/5">
        <img
          src={about_img}
          alt="About AMES Group Dubai"
          className="w-full rounded-3xl shadow-xl"
        />
        <button
          type="button"
          onClick={handlePlayClick}
          className="absolute flex h-20 w-20 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-white text-brand-primary shadow-xl transition duration-200 hover:scale-105 md:h-24 md:w-24"
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
  );
};

export default AboutUs;