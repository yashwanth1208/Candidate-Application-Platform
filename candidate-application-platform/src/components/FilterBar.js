// FilterBar.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../actions/filterActions';

const FilterBar = () => {
  const dispatch = useDispatch();
  const [filters, setLocalFilters] = useState({
    minExperience: '',
    companyName: '',
    location: '',
    isRemote: false,
    techStack: '',
    role: '',
    minBasePay: ''
  });

  const handleFilterChange = (filterName, value) => {
    setLocalFilters({
      ...filters,
      [filterName]: value
    });
  };

  const applyFilters = () => {
    dispatch(setFilters(filters));
  };

  return (
    <div className="filter-bar">
      <select
        value={filters.companyName}
        onChange={e => handleFilterChange('companyName', e.target.value)}
      >
        <option value="">Select Company Name</option>
        <option value="Company A">Company A</option>
        <option value="Company B">Company B</option>
        <option value="Company C">Company C</option>
        {/* Add more options as needed */}
      </select>
      
      <select
        value={filters.location}
        onChange={e => handleFilterChange('location', e.target.value)}
      >
        <option value="">Select Location</option>
        <option value="New York">New York</option>
        <option value="London">London</option>
        <option value="San Francisco">San Francisco</option>
        {/* Add more options as needed */}
      </select>
      
      <select
        value={filters.techStack}
        onChange={e => handleFilterChange('techStack', e.target.value)}
      >
        <option value="">Select Tech Stack</option>
        <option value="React">React</option>
        <option value="Node.js">Node.js</option>
        <option value="Python">Python</option>
        {/* Add more options as needed */}
      </select>
      
      <select
        value={filters.role}
        onChange={e => handleFilterChange('role', e.target.value)}
      >
        <option value="">Select Role</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Full Stack Developer">Full Stack Developer</option>
        {/* Add more options as needed */}
      </select>
      
      <select
        value={filters.minBasePay}
        onChange={e => handleFilterChange('minBasePay', e.target.value)}
      >
        <option value="">Select Salary Range</option>
        <option value="0-50k">0 - 50k</option>
        <option value="50k-100k">50k - 100k</option>
        <option value="100k-150k">100k - 150k</option>
        {/* Add more options as needed */}
      </select>
      
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterBar;
