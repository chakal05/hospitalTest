import React from 'react';
import { connect } from 'react-redux';
import JobPost from '../components/jobPost';
import SavedJobs  from '../components/savedJobsBtn';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  btnContainer: {
    backgroundColor: '#fff',
   padding:'1rem 0 2rem'
  },

  back: {
    paddingLeft: '1rem',
  },

  backBtn:{
    backgroundColor: '#15347A',
    color: '#fff',
  },

  savedJobs: {
   marginTop: '-2.3rem',
    textAlign: 'right',
    paddingRight: '1rem',
  },
}));

const PostedJob = (props) => {
  const goBack = () => {
    props.history.push('/annonser');
  };

  const classes = useStyles();

  return (
    <div>
      <div className={classes.btnContainer}>
        <div className={classes.back}>
          <Button
          className={classes.backBtn}
            variant='contained'
            onClick={goBack}>
            {' '}
            Go back to results{' '}
          </Button>
        </div>
        <div className={classes.savedJobs}>
          <SavedJobs />
        </div>
      </div>
      <JobPost {...props.result} />
    </div>
  );
};

const mapPropsTo = (state, props) => {
  return {
    result: state.results.find((element) => {
      return (
        element.identifier ===
        props.match.params.id
      );
    }),
  };
};

export default connect(mapPropsTo)(PostedJob);
