const filterReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined,
};

export default (
	state = filterReducerDefaultState,
	action
) => {
	switch (action.type) {
		//later
		//	case 'SORT_BY_DATE':
		//		return {
		//			...state,
		//			sortBy: action.sortBy,
		//		};

		case 'SORT_BY_TEXT':
			return {
				...state,
				text: action.text,
			};
		default:
			return state;
	}
};
