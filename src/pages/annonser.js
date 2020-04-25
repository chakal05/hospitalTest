import React from 'react';
import { connect } from 'react-redux';
import { addToSaved } from '../redux/actions/savedJobs';
import SaveBtn from '../components/saveBtn';
import SavedJobs from '../components/savedJobs';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Entete from '../components/entete';
import Button from '@material-ui/core/Button';
import selectData from '../redux/selectors/sortByText';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  list: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: '1rem',
    borderBottomRightRadius: '1rem',
  },
  paper: {
    width: '90%',
    margin: '0 auto',
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  links: {
    backgroundColor: '#13377F',
  },
  linK: {
    textDecoration: 'none',
    color: '#fff',
  },
}));

const Annonser = (props) => {
  //   useEffect(() => {
  //     localStorage.setItem(
  //       'savedJobs',
  //       JSON.stringify(jobs)
  //     );
  //   }, [jobs]);

  const handle = () => {
    // console.log('new stuff should show');
  };

  const classes = useStyles();

  return (
    <div>
      <Entete
        title={'Annonser title'}
        onSubmit={handle}
      />
      <Grid
        container
        justify='center'
        className={classes.list}>
        <Grid
          style={{ margin: '4rem' }}
          item
          xs={12}>
          <Grid
            item
            xs={12}
            style={{
              textAlign: 'right',
              marginTop: '-1rem',
              marginBottom: '2rem',
            }}>
            <SavedJobs />
          </Grid>

          <Grid
            container
            justify='center'
            spacing={2}>
            <>
              {props.results.map((item) => (
                <Grid
                  key={item.identifier}
                  className={classes.paper}
                  item>
                  <Paper
                    className={classes.paper}>
                    <Card
                      className={classes.root}
                      variant='outlined'>
                      <CardContent>
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
                          {item.hiringOrg.name} -{' '}
                          {item.hiringOrgContact.addressLine
                            .split(',')
                            .pop()}
                        </Typography>
                        <Typography component='h5'>
                          {
                            item.jobPositionTitle
                              .title
                          }
                        </Typography>

                        <Typography component='p'>
                          {` Duration: ${item.classification.duration}`}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          variant='contained'
                          className={
                            classes.links
                          }>
                          <Link
                            to={`/annonser/${item.identifier}`}
                            className={
                              classes.link
                            }>
                            Läs mer{' '}
                          </Link>
                        </Button>

                        <SaveBtn
                          save={() => {
                            props.dispatch(
                              addToSaved(item)
                            );

                            localStorage.setItem(
                              'savedJobs',
                              JSON.stringify([item])
                            );
                          }}
                        />
                      </CardActions>
                    </Card>
                  </Paper>
                </Grid>
              ))}
            </>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const mapPropsToTheState = (state) => {
  return {
    results: selectData(
      state.results,
      state.filter
    ),
  };
};

export default connect(mapPropsToTheState)(
  Annonser
);
