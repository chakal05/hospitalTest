const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  
  export default (
    state = filterReducerDefaultState,
    action,
  ) => {
    switch (action.type) {
      case 'SET_TEXT_FILTER':
        return { ...state, ...action.update };
      case 'SORT_BY_DATE':
        return {
          ...state,
          sortBy: action.sortBy,
        };
  
      case 'START_DATE':
        return {
          ...state,
          startDate: action.startDate,
        };
  
      case 'END_DATE':
        return {
          ...state,
          endDate: action.endDate,
        };
  
      case 'SORT_BY_TEXT':
        return {
          ...state,
          text: action.text,
        };
      default:
        return state;
    }
  };