import searchReducer from '../../redux/reducers/jobSearchReducer';

test('should test job search default state', () => {
	const state = searchReducer(undefined, {
		type: '@@INIT',
	});
	expect(state).toEqual([]);
});

test('should retrieve jobs ', () => {
	const state = searchReducer(undefined, {
		type: 'RETRIEVE_RESULTS',
		results: [{ name: 'moi', age: 31 }],
	});

	expect(state).toEqual([
		{ name: 'moi', age: 31 },
	]);
});
