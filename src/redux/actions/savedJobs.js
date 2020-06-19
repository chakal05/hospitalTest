export const addToSaved = (job) => ({
	type: 'ADD_JOB',
	job,
});

export const removeFromSavedJobs = ({ identifier }) => ({
	type: 'REMOVE_JOB',
	job: {
		identifier,
	},
});
