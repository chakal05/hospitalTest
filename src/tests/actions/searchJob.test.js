import {searchResult} from '../../redux/actions/searchJobs';

test('should setup retrive jobs action object', () => {
    const action = searchResult({name:'sdds', age:323});
    expect(action).toEqual({
        type:'RETRIEVE_RESULTS',
        results: {name:'sdds', age:323}
    })
})
