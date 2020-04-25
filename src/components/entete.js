import React, {useState} from 'react';
import { connect } from 'react-redux';
import { sortByText } from '../redux/actions/filters';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '2rem',
        backgroundColor: '#fff',
      },
    
      blue: {
        padding: '1',
        background: '#0575E6',
        background:
          '-webkit-linear-gradient(to right, #021B79, #0575E6)',
        background:
          'linear-gradient(to right, #021B79, #0575E6)',
        borderRadius: '1rem',
      },
    
      title: {
        textAlign: 'center',
      },
    
      header: {
        color: '#fff',
        fontSize: '3rem',
        marginTop: '1rem',
      },
    
      searchInput: {
        position: 'relative',
        top: '2rem',
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

const Entete = (props) => {

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
    <div className={classes.root}>
      <Grid
        container
        justify='center'
        className={classes.blue}>
        <Grid
          item
          xs={12}
          className={classes.title}>
          <h1 className={classes.header}>
            {' '}
           {props.title}
          </h1>
        </Grid>
        <Grid
          item
          xs={7}
          className={classes.searchInput}>
          <Paper
      component='form'
      className={classes.paper}
      onSubmit={onsubmit}>
      <InputBase
        className={classes.input}
        placeholder='Search by profession or city  '
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <Button type='submit' variant='contained'>
        Search
      </Button>
    </Paper> 
        </Grid>
      </Grid>
    </div>
  ); 
};


export default connect()(Entete);


