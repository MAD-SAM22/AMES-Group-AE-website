function TripData({ image, heading, text, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full flex-col rounded-xl bg-white p-5 text-left shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
    >
      <div className="relative h-52 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={heading}
          className="h-full w-full rounded-lg object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <h4 className="mt-4 text-xl font-semibold text-brand-accent">
        {heading}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p>
    </button>
  );
}

export default TripData;

