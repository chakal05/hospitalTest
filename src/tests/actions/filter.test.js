import { sortByText } from '../../redux/actions/filters';

test('should setup text filter action', () => {
	const action = sortByText({ text: 'hehe' });
	expect(action).toEqual({
		type: 'SORT_BY_TEXT',
		text: 'hehe',
	});
});
 