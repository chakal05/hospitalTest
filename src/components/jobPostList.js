import React from 'react';
import SaveBtn from '../components/saveBtn';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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

  savedJobs: {
    position: 'relative',
    top: '2rem',
    textAlign: 'right',
    paddingRight: '3rem',
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

  links: {
    textDecoration: 'none',
    flexGrow: 1,
  },
}));

const JobPostList = (props) => {
  const classes = useStyles();

  return (
    <>
      {props.list.map((item) => (
        <Grid
          key={item.identifier}
          className={classes.paper}
          item>
          <Paper className={classes.paper}>
            <Card
              className={classes.root}
              variant='outlined'>
              <CardContent>
                <Typography
                  variant='h5'
                  component='h2'>
                  {item.jobPositionTitle.title}
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
                  {item.jobPositionTitle.title}
                </Typography>

                <Typography component='p'>
                  {` Duration: ${item.classification.duration}`}
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  to={`/annonser/${item.identifier}`}
                  className={classes.links}>
                  <Button variant='contained'>
                    Läs mer{' '}
                  </Button>
                </Link>
                <SaveBtn
                  onClick={props.action}
                  text={props.text}
                />
              </CardActions>
            </Card>
          </Paper>
        </Grid>
      ))}
    </>
  );
};

export default JobPostList;
