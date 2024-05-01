import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from './actions/jobActions';
import FilterBar from './components/FilterBar';
import JobList from './components/JobList';
import './styles.css'; 

function App() {
  const dispatch = useDispatch();
  const { loading, jobs, error } = useSelector(state => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  console.log('Jobs:', jobs); // Added this line to inspect the value of jobs in the console

  return (
    <div>
      <div className="app-header">
        <h1>Candidate Application Platform</h1>
      </div>
      <FilterBar />
      <div className="job-list-container">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <JobList jobs={jobs} /> // Render the JobList component and pass the jobs array as a prop
        )}
      </div>
    </div>
  );
}

export default App;
