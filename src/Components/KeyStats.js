const KeyStats = () => {
  const stats = [
    { value: "15+", label: "study & migration destinations supported" },
    { value: "300+", label: "partner universities and employers" },
    { value: "10K+", label: "students, professionals & families assisted" },
    { value: "12", label: "languages spoken across our advisor network" },
  ];

  return (
    <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-4 overflow-hidden rounded-3xl bg-white p-6 shadow-2xl sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl bg-brand-primary/5 p-5 text-center transition duration-200 hover:-translate-y-1 hover:bg-brand-primary/10"
          >
            <p className="text-3xl font-extrabold text-brand-accent sm:text-4xl">
              {item.value}
            </p>
            <p className="mt-2 text-sm font-medium text-gray-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyStats;


