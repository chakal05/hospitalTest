import React from 'react';
import { connect } from 'react-redux';
import JobPost from '../components/jobPost';

const PostedJob = (props) => {
  const goBack = () => {
    props.history.push('/annonser');
  };

  return (
    <div>
      <button onClick={goBack}>
        {' '}
        Go back to results{' '}
      </button>
      <JobPost {...props.result} />
      <p>
        Job post id: {props.match.params.id}{' '}
      </p>
    </div>
  );
};

const mapPropsTo = (state, props) => {
  return {
    result: state.results.find((element) => {
      return (
        element.identifier ===
        props.match.params.id
      );
    }),
  };
};

export default connect(mapPropsTo)(PostedJob);
