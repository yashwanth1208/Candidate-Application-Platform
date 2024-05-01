// JobCard.js
import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h2>Job Listings</h2>
      <div>
        <p>Company: {job.company}</p>
        <p>Location: {job.location}</p>
        <p>Description: {job.jobDetailsFromCompany}</p>
        <p>Minimum Experience: {job.minExp}</p>
        <button>Apply</button>
      </div>
    </div>
  );
};

export default JobCard;
