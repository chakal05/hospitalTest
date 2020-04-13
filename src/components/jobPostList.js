import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import JobPost from './jobPost';

class JobPostList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.results.map((post, i) => {
            return (
              <li key={i}>
                <Link to={`/annonser/${post.identifier}`}>
                  <JobPost {...post} />;
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapPropsToState = (state) => {
  return {
    results: state.results,
  };
};

export default connect(mapPropsToState)(
  JobPostList
);
