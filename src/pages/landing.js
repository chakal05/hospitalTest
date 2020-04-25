import React, { useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Entete from '../components/entete';
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

  links: {
    textDecoration: 'none',
  },
}));

const Landing = (props) => {
  useEffect(() => {
     const {dispatch} = props;
    dispatch(startSearchResults());
  }, [props]);

  const handleSubmit = () => {
    props.history.push('/annonser');
  };

  const classes = useStyles();

  return (
    <Route>
      <div>
        <Entete
          title={'77 nya jobb publicerade'}
          onSubmit={handleSubmit}
        /> 

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
             Senast inläggen{' '}
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
                          Ny
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
                          {`${item.hiringOrg.name} - ${item.jobPositionLocation.city}`}
                        </Typography>
                        <Typography
                          variant='body2'
                          component='p'>
                          {`Start datum: ${item.postDetail.startDate}`}
                        </Typography>
                        <Typography
                          variant='body2'
                          component='p'>
                          {`Publicerad: ${item.postDetail.published}`}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Link
                          to={`/annonser/${item.identifier}`}
                          className={
                            classes.links
                          }>
                          <Button variant='contained'>
                            Läs mer{' '}
                          </Button>
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
