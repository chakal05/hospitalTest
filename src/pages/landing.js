import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Search from '../components/search';
//import { startSearchResults } from '../redux/actions/searchJobs';

class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

//   componentWillMount() {
//     this.props.dispatch(startSearchResults());
//   }

  handleSubmit = () => {
    this.props.history.push('/annonser');
  };

  render() {
    return (
      <Route>
        <h1> Landing page </h1>
        <br />
        <Search onSubmit={this.handleSubmit} />
      </Route>
    );
  }

}

export default connect()(Landing);
