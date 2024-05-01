// App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from './actions/jobActions';
import JobCard from './components/JobCard';
import FilterBar from './components/FilterBar';

function App() {
  const dispatch = useDispatch();
  const { loading, jobs, error } = useSelector(state => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  console.log('Jobs:', jobs); // Added this line to inspect the value of jobs in the console

  return (
    <div>
      <h1>Job Listings</h1>
      <FilterBar />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="job-list">
          {jobs && jobs.map(job => (
            <JobCard key={job.jdUid} job={job} /> // Use a unique identifier from job object as key prop
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
