const testimonials = [
  {
    name: "Amie Baybayon",
    title: "Student visa – Australia",
    quote:
      "“AMES made every requirement straightforward. The Dubai counsellors were as supportive as the Australian team and handled my student visa quickly.”",
  },
  {
    name: "Rovir Revelo",
    title: "Postgraduate enrolment – Sydney",
    quote:
      "“Daily updates and friendly advisers meant no surprises. I always knew what document was next and when I would hear back.”",
  },
  {
    name: "Denise Galindo",
    title: "Work & study relocation – Canada",
    quote:
      "“The process was smooth from consultation to arrival. AMES took care of the paperwork while I focused on preparing for my new life.”",
  },
  {
    name: "Michelle Jancilan",
    title: "Family migration – New Zealand",
    quote:
      "“Even during a difficult year, AMES kept the momentum going. Their guidance helped our family secure visas and start fresh abroad.”",
  },
];

const ClientTestimonials = () => (
  <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-brand-accent sm:text-4xl">
        Trusted by thousands of AMES Group clients worldwide
      </h2>
      <p className="mt-4 text-base text-gray-600 sm:text-lg">
        The Dubai branch delivers the same attentive service and positive
        outcomes that students and migrants praise across the AMES network.
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


