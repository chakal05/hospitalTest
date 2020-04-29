import savedJobsReducer from '../../redux/reducers/savedJobsReducer';

test('should retrive default savedJobs state', () => {
	const state = savedJobsReducer(undefined, {
		type: '@@INIT',
	});
	expect(state).toEqual([]);
});

test('should add job to saved', () => {
	const state = savedJobsReducer(undefined, {
		type: 'ADD_JOB',
		job: { name: 'aa', location: 'sdd' },
	});
	expect(state).toEqual([
		{ name: 'aa', location: 'sdd' },
	]);
});

test('should remove job from saved', () => {
	const state = savedJobsReducer(
		[{ identifier: 2, name: 'sd' }],
		{
			type: 'REMOVE_JOB',
			job: { identifier: 2, name: 'sd' },
		}
	);

	expect(state).toEqual([]);
});
