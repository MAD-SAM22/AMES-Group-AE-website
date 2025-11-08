import React, { useState } from "react";

const ServiceFilter = ({ onFilterChange, totalServices, filteredCount }) => {
  const [filters, setFilters] = useState({
    destination: "",
    visaType: "",
    timeline: "",
    budget: "",
    education: "",
    experience: "",
    englishLevel: "",
    age: "",
    family: "",
    search: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      destination: "",
      visaType: "",
      timeline: "",
      budget: "",
      education: "",
      experience: "",
      englishLevel: "",
      age: "",
      family: "",
      search: "",
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const hasActiveFilters = Object.values(filters).some((value) => value !== "");

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  const getQuickFilterClasses = (isActive) =>
    [
      "rounded-full border-2 px-4 py-2 text-sm font-medium transition duration-200",
      isActive
        ? "border-brand-primary bg-brand-primary text-white shadow-sm"
        : "border-gray-200 bg-gray-100 text-gray-600 hover:border-brand-primary hover:bg-white hover:text-brand-primary",
    ].join(" ");

  const selectClasses =
    "rounded-lg border-2 border-gray-200 bg-white px-3 py-3 text-sm text-gray-700 transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20";

  return (
    <div className="mt-12 text-left">
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition duration-200 hover:border-brand-primary/40 hover:shadow-lg">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <i className="fas fa-search pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-brand-primary" />
            <input
              type="text"
              placeholder="Search immigration services..."
              value={filters.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
              className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 py-3 pl-12 pr-32 text-base text-gray-700 transition duration-200 focus:border-brand-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
            />
            {hasActiveFilters && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-brand-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                {
                  Object.values(filters).filter(
                    (value) => value !== ""
                  ).length
                }{" "}
                filters
              </span>
            )}
          </div>

          <button
            type="button"
            className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg text-white transition duration-200 ${
              isExpanded
                ? "bg-red-500 hover:bg-red-600"
                : "bg-brand-primary hover:bg-brand-primaryDark"
            }`}
            onClick={toggleExpanded}
            title={isExpanded ? "Minimize filters" : "Show all filters"}
          >
            <i
              className={`fas ${
                isExpanded ? "fa-chevron-up" : "fa-chevron-down"
              }`}
            />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <button
            type="button"
            className={getQuickFilterClasses(filters.destination === "Australia")}
            onClick={() =>
              handleFilterChange(
                "destination",
                filters.destination === "Australia" ? "" : "Australia"
              )
            }
          >
            Australia
          </button>
          <button
            type="button"
            className={getQuickFilterClasses(filters.destination === "UAE")}
            onClick={() =>
              handleFilterChange(
                "destination",
                filters.destination === "UAE" ? "" : "UAE"
              )
            }
          >
            UAE
          </button>
          <button
            type="button"
            className={getQuickFilterClasses(filters.visaType === "Student Visa")}
            onClick={() =>
              handleFilterChange(
                "visaType",
                filters.visaType === "Student Visa" ? "" : "Student Visa"
              )
            }
          >
            Student Visa
          </button>
          <button
            type="button"
            className={getQuickFilterClasses(filters.visaType === "Work Visa")}
            onClick={() =>
              handleFilterChange(
                "visaType",
                filters.visaType === "Work Visa" ? "" : "Work Visa"
              )
            }
          >
            Work Visa
          </button>
          <button
            type="button"
            className={getQuickFilterClasses(filters.timeline === "fast")}
            onClick={() =>
              handleFilterChange(
                "timeline",
                filters.timeline === "fast" ? "" : "fast"
              )
            }
          >
            Fast Processing
          </button>

          {hasActiveFilters && (
            <button
              type="button"
              className="ml-auto inline-flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-red-600"
              onClick={clearFilters}
            >
              <i className="fas fa-times" />
              Clear All
            </button>
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-inner">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl font-semibold text-brand-accent">
              Advanced Filters
            </h3>
            <span className="text-sm font-medium text-gray-600">
              Showing {filteredCount} of {totalServices} services
            </span>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                Destination Country
              </label>
              <select
                value={filters.destination}
                onChange={(e) =>
                  handleFilterChange("destination", e.target.value)
                }
                className={selectClasses}
              >
                <option value="">All Destinations</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="UAE">UAE</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Germany">Germany</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                Visa Type
              </label>
              <select
                value={filters.visaType}
                onChange={(e) =>
                  handleFilterChange("visaType", e.target.value)
                }
                className={selectClasses}
              >
                <option value="">All Visa Types</option>
                <option value="Student Visa">Student Visa</option>
                <option value="Work Visa">Work Visa</option>
                <option value="Skilled Migration">Skilled Migration</option>
                <option value="Family Visa">Family Visa</option>
                <option value="Business Visa">Business Visa</option>
                <option value="Permanent Residency">Permanent Residency</option>
                <option value="Golden Visa">Golden Visa</option>
                <option value="Work Permit">Work Permit</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                Processing Timeline
              </label>
              <select
                value={filters.timeline}
                onChange={(e) =>
                  handleFilterChange("timeline", e.target.value)
                }
                className={selectClasses}
              >
                <option value="">Any Timeline</option>
                <option value="fast">Fast (1-3 months)</option>
                <option value="medium">Medium (3-6 months)</option>
                <option value="long">Long (6+ months)</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                Budget Range
              </label>
              <select
                value={filters.budget}
                onChange={(e) =>
                  handleFilterChange("budget", e.target.value)
                }
                className={selectClasses}
              >
                <option value="">Any Budget</option>
                <option value="low">Low ($0 - $5,000)</option>
                <option value="medium">Medium ($5,000 - $20,000)</option>
                <option value="high">High ($20,000+)</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                Education Level
              </label>
              <select
                value={filters.education}
                onChange={(e) =>
                  handleFilterChange("education", e.target.value)
                }
                className={selectClasses}
              >
                <option value="">Any Education</option>
                <option value="high-school">High School</option>
                <option value="diploma">Diploma</option>
                <option value="bachelor">Bachelor&apos;s Degree</option>
                <option value="master">Master&apos;s Degree</option>
                <option value="phd">PhD</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                Work Experience
              </label>
              <select
                value={filters.experience}
                onChange={(e) =>
                  handleFilterChange("experience", e.target.value)
                }
                className={selectClasses}
              >
                <option value="">Any Experience</option>
                <option value="none">No Experience</option>
                <option value="1-2">1-2 Years</option>
                <option value="3-5">3-5 Years</option>
                <option value="5+">5+ Years</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                English Proficiency
              </label>
              <select
                value={filters.englishLevel}
                onChange={(e) =>
                  handleFilterChange("englishLevel", e.target.value)
                }
                className={selectClasses}
              >
                <option value="">Any Level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="native">Native Speaker</option>
                <option value="ielts-6">IELTS 6.0+</option>
                <option value="ielts-7">IELTS 7.0+</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                Age Range
              </label>
              <select
                value={filters.age}
                onChange={(e) => handleFilterChange("age", e.target.value)}
                className={selectClasses}
              >
                <option value="">Any Age</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-45">36-45</option>
                <option value="45+">45+</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                Family Status
              </label>
              <select
                value={filters.family}
                onChange={(e) => handleFilterChange("family", e.target.value)}
                className={selectClasses}
              >
                <option value="">Any Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="with-children">With Children</option>
              </select>
            </div>
          </div>

          {hasActiveFilters && (
            <div className="mt-6 rounded-xl border-l-4 border-brand-primary bg-white p-5 shadow-sm">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-primary">
                Active Filters
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {Object.entries(filters).map(([key, value]) => {
                  if (value && value !== "") {
                    return (
                      <span
                        key={key}
                        className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white"
                      >
                        {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                        <button
                          type="button"
                          onClick={() => handleFilterChange(key, "")}
                          className="rounded-full bg-white/20 px-2 text-sm font-bold text-white transition hover:bg-white/40"
                        >
                          ×
                        </button>
                      </span>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ServiceFilter;

