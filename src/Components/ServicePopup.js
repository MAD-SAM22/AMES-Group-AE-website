import React from "react";
import { useNavigate } from "react-router-dom";

const ServicePopup = ({ service, isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen || !service) return null;

  const handleStartJourney = () => {
    navigate("/contact");
    onClose();
  };

  const processingText = service.processingTime || service.timeline;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 px-4 py-10 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-gray-600 shadow-md transition duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          onClick={onClose}
          aria-label="Close service details"
        >
          <i className="fas fa-times" />
        </button>

        <div className="overflow-hidden rounded-t-3xl">
          <img
            src={service.image}
            alt={service.heading}
            className="h-64 w-full object-cover"
          />
        </div>

        <div className="space-y-10 px-6 pb-10 pt-8 sm:px-10">
          <header className="text-center">
            <h2 className="text-3xl font-bold text-brand-accent sm:text-4xl">
              {service.heading}
            </h2>
            <p className="mt-3 text-base text-gray-600">{service.text}</p>
          </header>

          {service.features?.length > 0 && (
            <section>
              <h3 className="text-xl font-semibold text-brand-accent">
                What We Provide
              </h3>
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {service.features.map((feature, index) => (
                  <li
                    key={feature + index}
                    className="flex items-start gap-3 rounded-xl bg-brand-primary/5 p-4 text-sm text-gray-700"
                  >
                    <i className="fas fa-check-circle mt-0.5 text-brand-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {service.process?.length > 0 && (
            <section>
              <h3 className="text-xl font-semibold text-brand-accent">
                Our Process
              </h3>
              <div className="mt-4 space-y-4">
                {service.process.map((step, index) => (
                  <div
                    key={step.title + index}
                    className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary text-lg font-semibold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-brand-accent">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-sm text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {service.requirements?.length > 0 && (
            <section>
              <h3 className="text-xl font-semibold text-brand-accent">
                Requirements
              </h3>
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {service.requirements.map((requirement, index) => (
                  <li
                    key={requirement + index}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm text-gray-700 shadow-sm"
                  >
                    <i className="fas fa-arrow-right mt-0.5 text-brand-primary" />
                    {requirement}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {processingText && (
            <section className="rounded-2xl border border-brand-primary/30 bg-brand-primary/10 p-6 text-center">
              <h3 className="text-lg font-semibold text-brand-accent">
                Processing Time
              </h3>
              <p className="mt-2 text-sm font-medium text-gray-700">
                {processingText}
              </p>
            </section>
          )}
        </div>

        <div className="sticky bottom-0 flex items-center justify-center rounded-b-3xl bg-gradient-to-r from-brand-primary to-brand-primaryDark px-6 py-6 sm:px-10">
          <button
            type="button"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-brand-primary shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-gray-100"
            onClick={handleStartJourney}
          >
            <i className="fas fa-rocket" />
            Start Your Journey for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicePopup;

