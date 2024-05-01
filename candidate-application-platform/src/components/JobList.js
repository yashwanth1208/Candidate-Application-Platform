import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const JobList = ({ jobs }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (windowHeight + scrollTop >= documentHeight - 20) {
        loadMoreJobs();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [jobs]); // Include jobs in the dependency array

  const loadMoreJobs = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="job-list">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
      {isLoading && <p>Loading more jobs...</p>}
    </div>
  );
};

export default JobList;
