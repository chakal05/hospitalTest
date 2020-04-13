import database from '../../firebase/index';



   
export const searchResult = (results) => ({
  type: 'RETRIVE_RESULTS',
  results,
});

export const startSearchResults = () => {
  return (dispatch) => {
    return database
      .ref('jobPostList')
      .once('value')
      .then((data) => {
        const results = [];
        data.forEach((result) => {
          results.push({
            identifier: result.key,
            ...result.val(),
          });
        });

        dispatch(searchResult(results));
      });
  };
};
