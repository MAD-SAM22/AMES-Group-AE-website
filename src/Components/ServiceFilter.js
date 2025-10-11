import React, { useState } from 'react';
import './ServiceFilter.css';

const ServiceFilter = ({ onFilterChange, totalServices, filteredCount }) => {
  const [filters, setFilters] = useState({
    destination: '',
    visaType: '',
    timeline: '',
    budget: '',
    education: '',
    experience: '',
    englishLevel: '',
    age: '',
    family: '',
    search: ''
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      destination: '',
      visaType: '',
      timeline: '',
      budget: '',
      education: '',
      experience: '',
      englishLevel: '',
      age: '',
      family: '',
      search: ''
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="service-filter">
      {/* Main Search Bar */}
      <div className="search-bar-container">
        <div className="search-bar">
          <div className="search-input-container">
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              placeholder="Search immigration services..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="main-search-input"
            />
            {hasActiveFilters && (
              <span className="active-filters-count">
                {Object.values(filters).filter(value => value !== '').length} filters
              </span>
            )}
          </div>
          <button 
            className={`expand-btn ${isExpanded ? 'expanded' : ''}`}
            onClick={toggleExpanded}
            title={isExpanded ? 'Minimize filters' : 'Show all filters'}
          >
            <i className={`fas ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </button>
        </div>

        {/* Quick Filter Pills */}
        <div className="quick-filters">
          <button 
            className={`quick-filter ${filters.destination === 'Australia' ? 'active' : ''}`}
            onClick={() => handleFilterChange('destination', filters.destination === 'Australia' ? '' : 'Australia')}
          >
            Australia
          </button>
          <button 
            className={`quick-filter ${filters.destination === 'UAE' ? 'active' : ''}`}
            onClick={() => handleFilterChange('destination', filters.destination === 'UAE' ? '' : 'UAE')}
          >
            UAE
          </button>
          <button 
            className={`quick-filter ${filters.visaType === 'Student Visa' ? 'active' : ''}`}
            onClick={() => handleFilterChange('visaType', filters.visaType === 'Student Visa' ? '' : 'Student Visa')}
          >
            Student Visa
          </button>
          <button 
            className={`quick-filter ${filters.visaType === 'Work Visa' ? 'active' : ''}`}
            onClick={() => handleFilterChange('visaType', filters.visaType === 'Work Visa' ? '' : 'Work Visa')}
          >
            Work Visa
          </button>
          <button 
            className={`quick-filter ${filters.timeline === 'fast' ? 'active' : ''}`}
            onClick={() => handleFilterChange('timeline', filters.timeline === 'fast' ? '' : 'fast')}
          >
            Fast Processing
          </button>
          {hasActiveFilters && (
            <button className="clear-all-btn" onClick={clearFilters}>
              <i className="fas fa-times"></i> Clear All
            </button>
          )}
        </div>
      </div>

      {/* Expanded Filter Panel */}
      {isExpanded && (
        <div className="expanded-filters">
          <div className="filter-header">
            <h3>Advanced Filters</h3>
            <div className="filter-stats">
              <span className="filter-count">
                Showing {filteredCount} of {totalServices} services
              </span>
            </div>
          </div>

          <div className="filter-grid">
            {/* Destination */}
            <div className="filter-group">
              <label>Destination Country</label>
              <select
                value={filters.destination}
                onChange={(e) => handleFilterChange('destination', e.target.value)}
                className="filter-select"
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

            {/* Visa Type */}
            <div className="filter-group">
              <label>Visa Type</label>
              <select
                value={filters.visaType}
                onChange={(e) => handleFilterChange('visaType', e.target.value)}
                className="filter-select"
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

            {/* Timeline */}
            <div className="filter-group">
              <label>Processing Timeline</label>
              <select
                value={filters.timeline}
                onChange={(e) => handleFilterChange('timeline', e.target.value)}
                className="filter-select"
              >
                <option value="">Any Timeline</option>
                <option value="fast">Fast (1-3 months)</option>
                <option value="medium">Medium (3-6 months)</option>
                <option value="long">Long (6+ months)</option>
              </select>
            </div>

            {/* Budget */}
            <div className="filter-group">
              <label>Budget Range</label>
              <select
                value={filters.budget}
                onChange={(e) => handleFilterChange('budget', e.target.value)}
                className="filter-select"
              >
                <option value="">Any Budget</option>
                <option value="low">Low ($0 - $5,000)</option>
                <option value="medium">Medium ($5,000 - $20,000)</option>
                <option value="high">High ($20,000+)</option>
              </select>
            </div>

            {/* Education Level */}
            <div className="filter-group">
              <label>Education Level</label>
              <select
                value={filters.education}
                onChange={(e) => handleFilterChange('education', e.target.value)}
                className="filter-select"
              >
                <option value="">Any Education</option>
                <option value="high-school">High School</option>
                <option value="diploma">Diploma</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="phd">PhD</option>
              </select>
            </div>

            {/* Work Experience */}
            <div className="filter-group">
              <label>Work Experience</label>
              <select
                value={filters.experience}
                onChange={(e) => handleFilterChange('experience', e.target.value)}
                className="filter-select"
              >
                <option value="">Any Experience</option>
                <option value="none">No Experience</option>
                <option value="1-2">1-2 Years</option>
                <option value="3-5">3-5 Years</option>
                <option value="5+">5+ Years</option>
              </select>
            </div>

            {/* English Level */}
            <div className="filter-group">
              <label>English Proficiency</label>
              <select
                value={filters.englishLevel}
                onChange={(e) => handleFilterChange('englishLevel', e.target.value)}
                className="filter-select"
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

            {/* Age */}
            <div className="filter-group">
              <label>Age Range</label>
              <select
                value={filters.age}
                onChange={(e) => handleFilterChange('age', e.target.value)}
                className="filter-select"
              >
                <option value="">Any Age</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-45">36-45</option>
                <option value="45+">45+</option>
              </select>
            </div>

            {/* Family Status */}
            <div className="filter-group">
              <label>Family Status</label>
              <select
                value={filters.family}
                onChange={(e) => handleFilterChange('family', e.target.value)}
                className="filter-select"
              >
                <option value="">Any Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="with-children">With Children</option>
              </select>
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="active-filters">
              <h4>Active Filters:</h4>
              <div className="active-filter-tags">
                {Object.entries(filters).map(([key, value]) => {
                  if (value && value !== '') {
                    return (
                      <span key={key} className="filter-tag">
                        {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                        <button
                          onClick={() => handleFilterChange(key, '')}
                          className="remove-filter"
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
