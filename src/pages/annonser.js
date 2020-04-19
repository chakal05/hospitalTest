import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import JobPost from '../components/jobPost';
import Search from '../components/search';
import selectData from '../redux/selectors/sortByText';
import { startSearchResults } from '../redux/actions/searchJobs';

class Annonser extends React.Component {
  

  componentWillMount() {
    this.props.dispatch(startSearchResults());
  }
     handle = () => {
         console.log('new stuff should show')
     }

  render() {
    return (
      <div>
        <h2> List of posted jobs </h2>
        <Search onSubmit={this.handle} />
        <div>
          <ul>
            {this.props.results.map((post) => {
              return (
                <li key={post.identifier}>
                  <Link
                    to={`/annonser/${post.identifier}`}>
                    <JobPost {...post} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapPropsToTheState = (state) => {
  return {
    results: selectData(
      state.results,
      state.filter
    ),
  };
};

export default connect(mapPropsToTheState)(
  Annonser
);