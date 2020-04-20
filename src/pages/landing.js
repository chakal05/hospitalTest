import React, { useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Search from '../components/search';
import { startSearchResults } from '../redux/actions/searchJobs';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

  list: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: '1rem',
    borderBottomRightRadius: '1rem',
  },

  secondHeader: {
    textAlign: 'center',
    margin: '2rem',
    color: '#15347A',
  },

  links :{
   textDecoration: 'none'
  }
}));

const Landing = (props) => {
  useEffect(() => {
    props.dispatch(startSearchResults());
  });

  const handleSubmit = () => {
    props.history.push('/annonser');
  };

  const classes = useStyles();

  return (
    <Route>
      <div>
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
                77 new jobs posted{' '}
              </h1>
            </Grid>
            <Grid
              item
              xs={7}
              className={classes.searchInput}>
              <Search onSubmit={handleSubmit} />
            </Grid>
          </Grid>
        </div>

        <Grid
          container
          justify='center'
          className={classes.list}>
          <Grid
            item
            xs={12}
            className={classes.secondHeader}>
            <h1
              style={{
                fontSize: '3rem',
                fontWeight: 'bold',
              }}>
              {' '}
              Latest posts{' '}
            </h1>
          </Grid>
          <Grid
            style={{ marginBottom: '4rem' }}
            item
            xs={12}>
            <Grid
              container
              justify='center'
              spacing={2}>
              {props.results.map((item) => (
                <Grid key={item.identifier} item>
                  <Paper
                    className={classes.paper}>
                    <Card
                      className={classes.root}
                      variant='outlined'>
                      <CardContent>
                        <Typography
                          color='textSecondary'
                          gutterBottom>
                          New
                        </Typography>
                        <Typography
                          variant='h5'
                          component='h2'>
                          {
                            item.jobPositionTitle
                              .title
                          }
                        </Typography>
                        <Typography
                          className={classes.pos}
                          color='textSecondary'>
                          Durarion: {' '}
                          {
                            item.classification
                              .duration
                          }
                        </Typography>
                        <Typography
                          variant='body2'
                          component='p'>
                          {
                            item
                              .jobPositionPurpose
                              .purpose
                          }
                        </Typography>
                      </CardContent>
                      <CardActions>
                      <Link to={`/annonser/${item.identifier}`} className={classes.links}>
                      <Button variant='contained' >Learn more </Button>
                      </Link>
                      </CardActions>
                    </Card>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Route>
  );
};

const propsToState = (state) => {
  return {
    // Get the last 4 elements of the array
    results: state.results.slice(
      Math.max(state.results.length - 4, 0)
    ),
  };
};

export default connect(propsToState)(Landing);
