import React from 'react';
import Search from './search'
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
}));

const Entete = (props) => {
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
          <Search onSubmit={props.onSubmit} />  
        </Grid>
      </Grid>
    </div>
  );
};

export default Entete;


//onSubmit={handleSubmit} 