const testimonials = [
  {
    name: "Michael & Priya Patel",
    title: "Healthcare professionals – Australia skilled visa",
    quote:
      "“Our consultant shared a simple spreadsheet with every document we needed. Weekly calls kept the process moving and we landed in Melbourne on schedule.”",
  },
  {
    name: "Ahmed Al Habsi",
    title: "Senior engineer – UAE Golden Visa",
    quote:
      "“AMES coached my employer through the corporate sponsorship steps and handled the government follow-ups for me. The process was clear from day one.”",
  },
  {
    name: "Grace Ndlovu",
    title: "Student – UK higher education",
    quote:
      "“They helped shortlist universities, review my personal statement, and sort accommodation before I flew out. I still check in with the team during the semester.”",
  },
  {
    name: "The Fernandez Family",
    title: "Family relocation – Portugal residence permit",
    quote:
      "“What made the difference was the honest advice about schools and banking. AMES connected us with families already in Lisbon which made our move less stressful.”",
  },
];

const ClientTestimonials = () => (
  <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-brand-accent sm:text-4xl">
        Real clients. Real visas. Real gratitude.
      </h2>
      <p className="mt-4 text-base text-gray-600 sm:text-lg">
        Hear how AMES Group has helped professionals, families, and investors
        unlock life-changing opportunities across the globe.
      </p>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {testimonials.map((testimonial) => (
        <blockquote
          key={testimonial.name}
          className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 text-left shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-lg"
        >
          <i className="fa-solid fa-quote-left text-2xl text-brand-primary/30" />
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            {testimonial.quote}
          </p>
          <footer className="mt-6">
            <p className="text-lg font-semibold text-brand-accent">
              {testimonial.name}
            </p>
            <p className="text-sm text-gray-500">{testimonial.title}</p>
          </footer>
        </blockquote>
      ))}
    </div>
  </section>
);

export default ClientTestimonials;


