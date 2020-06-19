const filterReducerDefaultState = {
	text: '',
	jobType: '',
	published: [],
	city: '',
};

export default (state = filterReducerDefaultState, action) => {
	switch (action.type) {
		case 'SORT_BY_TEXT':
			return {
				...state,
				text: action.text,
			};
		case 'SORT_BY_JOBTYPE':
			return {
				...state,
				jobType: action.jobType,
			};

		case 'SORT_BY_PUBLISHED_DAY':
			return {
				...state,
				published: action.published,
			};

		case 'SORT_BY_CITY':
			return {
				...state,
				city: action.city,
			};
		default:
			return state;
	}
};
