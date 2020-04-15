import React from 'react';
import { connect } from 'react-redux';
import JobPost from '../components/jobPost';

class PostedJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goBack() {
    this.props.history.push('/annonser');
  }

  render() {
    return (
      <div>
      <button onClick={this.goBack}>
      {' '}
      Go back to results{' '}
    </button>
        <JobPost {...this.props.result} />
        <p>
          Job post id:{' '}
          {this.props.match.params.id}{' '}
        </p>
      </div>
    );
  }
}

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
