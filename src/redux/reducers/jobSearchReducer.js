const jobSearchReducerDefaultState = [];

export default (
  state = jobSearchReducerDefaultState,
  action
) => {
  switch (action.type) {
    case 'RETRIVE_RESULTS':
      return [...action.results];
    default:
      return state;
  }
};
