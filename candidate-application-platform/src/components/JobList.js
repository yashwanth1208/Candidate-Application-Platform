import React from 'react';
import JobCard from './JobCard';

const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      <div className="job-grid">
        {jobs.map(job => (
          <JobCard key={job.jdUid} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobList;
