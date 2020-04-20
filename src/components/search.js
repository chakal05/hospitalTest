import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sortByText } from '../redux/actions/filters';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: '2px 1px',
    display: 'flex',
  },
  input: {
    marginLeft: theme.spacing(3),
    flex: 1,
    height: '60px',
  },
}));

const Search = (props) => {
  const [textInput, setText] = useState('');
  const onsubmit = (e) => {
    e.preventDefault();
    props.dispatch(
      sortByText({ text: textInput })
    );
    props.onSubmit();
  };

  const classes = useStyles();

  return (
    <Paper
      component='form'
      className={classes.paper}
      onSubmit={onsubmit}>
      <InputBase
        className={classes.input}
        placeholder='Search by profession, city or by free text '
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <Button type='submit' variant='contained'>
        Search
      </Button>
    </Paper>
  );
};

export default connect()(Search);
