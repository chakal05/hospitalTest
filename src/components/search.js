import React from 'react';
import { connect } from 'react-redux';
import { sortByText } from '../redux/actions/filters';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  searchQuery = (e) => {
    const query = e.target.value;
    this.setState(() => ({
      query,
    }));
  };

  onsubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(
      sortByText({ text: this.state.query })
    );
    this.props.onSubmit();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onsubmit}>
          <input
            type='text'
            onChange={this.searchQuery}
          />
          <button type='submit'>Search</button>
        </form>
      </div>
    );
  }
}

// (state) => {
//     return {
//       filter: state.filter,
//     };
//   }

export default connect()(Search);
