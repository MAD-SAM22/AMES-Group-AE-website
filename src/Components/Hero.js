function Hero({
  cName = "hero",
  heroImg,
  title,
  text,
  btnText,
  url,
  btnClass,
}) {
  const containerClasses =
    cName === "hero-mid"
      ? "relative flex h-[70vh] w-full items-center justify-center"
      : "relative flex h-screen w-full items-center justify-center";

  const headingOffset =
    cName === "hero-mid" ? "mt-16 sm:mt-20 md:mt-24" : "mt-0";

  const shouldShowButton = btnClass !== "hide" && btnText && url;

  return (
    <div className={containerClasses}>
      <img
        alt="Hero"
        src={heroImg}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1
          className={`text-4xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl ${headingOffset}`}
        >
          {title}
        </h1>
        {text && (
          <p className="mt-4 max-w-3xl text-lg font-semibold text-white sm:text-xl">
            {text}
          </p>
        )}
        {shouldShowButton && (
          <a
            href={url}
            className="mt-10 inline-block rounded-md bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.35em] text-gray-800 transition duration-200 hover:-translate-y-1 hover:bg-brand-primary hover:text-white sm:px-8 sm:py-3 sm:text-base"
          >
            {btnText}
          </a>
        )}
      </div>
    </div>
  );
}

export default Hero;

