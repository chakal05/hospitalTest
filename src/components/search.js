import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sortByText } from '../redux/actions/filters';

const Search = (props) => {
  const [textInput, setText] = useState('');
  const onsubmit = (e) => {
    e.preventDefault();
    props.dispatch(
      sortByText({ text: textInput })
    );
    props.onSubmit();
  };

  return (
    <div>
      <form onSubmit={onsubmit}>
        <input
          type='text'
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default connect()(Search);
