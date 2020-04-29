import {
	addToSaved,
	removeFromSavedJobs,
} from '../../redux/actions/savedJobs';

test('should setup add job to saved object', () => {
	const action = addToSaved({
		name: 'asd',
		age: 124,
	});
	expect(action).toEqual({
		type: 'ADD_JOB',
		job: { name: 'asd', age: 124 },
	});
});

test('should setup remove job obect', () => {
	const action = removeFromSavedJobs({
		identifier: '12msd',
	});
	expect(action).toEqual({
		type: 'REMOVE_JOB',
		job: {
			identifier: '12msd',
		},
	});
});
