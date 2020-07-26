const savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];

export default (state = savedJobs, action) => {
	switch (action.type) {
		case 'ADD_JOB':
			return [...state, action.job];

		case 'REMOVE_JOB':
			return state.filter(
				(i) => i.identifier !== action.job.identifier
			);

		default:
			return state;
	}
};
 
