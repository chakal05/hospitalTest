import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Search from '../components/search';
export class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

 
  handleSubmit = (query) => {
    this.props.history.push('/annonser');
  };

  render() {
    return (
      <Route>
        <Search onSubmit={this.handleSubmit} />
      </Route>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//     startSearchResults : dispatch(startSearchResults())
// });

export default connect()(Landing);
