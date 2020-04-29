import sortByText from '../../redux/selectors/sortByText';

test('should ', () => {
	const action = sortByText([
		{
			jobPositionTitle: { title: 'directeur' },
			jobPositionLocation: {
				city: 'Djibouti',
            },
            postDetail:{
                published: '25 april 2019'
            }
		},
		{
			jobPositionTitle: { title: 'mecanic' },
			jobPositionLocation: {
				city: 'Stockholm',
            },
            postDetail:{
                published: '25 januari 2019'
            }
		},
    ], {text: 'me'});
    
    expect(action).toEqual([{
        jobPositionTitle: { title: 'mecanic' },
			jobPositionLocation: {
				city: 'Stockholm',
            },
            postDetail:{
                published: '25 januari 2019'
            }
    }])
});
