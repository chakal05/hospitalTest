import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  searchQuery = (e) => {
      const val = e.target.value;
    this.setState(() => ({
      query: val
    }));

  };

  onsubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      query: this.state.query,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onsubmit}>
          <input
            type='text'
            name='search'
            onChange={this.searchQuery}
          />
          <button type='submit'>Search</button>
        </form>
      </div>
    );
  }
}
