function DestinationData({
  heading,
  text,
  img1,
  img2,
  layout = "standard",
  className,
}) {
  const resolvedLayout =
    layout === "reverse" || className === "second-desc" ? "reverse" : "standard";

  return (
    <div
      className={`mt-16 flex flex-col-reverse items-center gap-10 md:mt-20 md:gap-14 ${
        resolvedLayout === "reverse" ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="w-full text-left text-[1.05rem] text-gray-700 md:w-1/2">
        <h2 className="pb-4 text-2xl font-semibold text-brand-accent">
          {heading}
        </h2>
        <p className="leading-relaxed">{text}</p>
      </div>

      <div className="relative flex w-full justify-between md:w-1/2">
        <img
          src={img1}
          alt={`${heading} primary`}
          className="h-[240px] w-[48%] rounded-lg object-cover shadow-image transition-transform duration-300 hover:scale-105 md:h-[350px]"
        />
        <img
          src={img2}
          alt={`${heading} secondary`}
          className="absolute right-0 top-[10%] h-[240px] w-[48%] rounded-lg object-cover shadow-image transition-transform duration-300 hover:scale-105 md:h-[350px]"
        />
      </div>
    </div>
  );
}

export default DestinationData;

