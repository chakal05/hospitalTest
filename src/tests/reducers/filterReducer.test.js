import filterReducer from '../../redux/reducers/filterReducer';

test('should setup filter reducer ', () => {
	const action = filterReducer(undefined, {
		type: '@@INIT',
	});

	expect(action).toEqual({
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined,
	});
});

test('should setup text filter ', () => {
	const action = filterReducer(undefined, {
		type: 'SORT_BY_TEXT',
		text: 'hehe',
	});

	expect(action.text).toBe('hehe');
});
