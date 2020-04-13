const jobSearchReducerDefaultState = [];

export default (
  state = jobSearchReducerDefaultState,
  action
) => {
  switch (action.type) {
    case 'RETRIVE_RESULTS':
      return [...state, ...action.results];
    default:
      return state;
  }
};
