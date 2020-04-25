export const addToSaved = (job) => ({
  type: 'ADD_JOB',
  job,
});

export const retriveSavedJobs = (jobs) => ({
  type: 'RETRIEVE_JOBS',
  jobs,
});

export const removeFromSavedJobs = ({ identifier }) => ({
  type: 'REMOVE_JOB',
  job: {
    identifier
  },
});
