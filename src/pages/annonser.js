import React, {
  useEffect,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import SavedJobs from '../components/savedJobsBtn';
import Entete from '../components/entete';
import JobPostList from '../components/jobPostList';
import selectData from '../redux/selectors/sortByText';
import { startSearchResults } from '../redux/actions/searchJobs';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

const Annonser = (props) => {
  const savedJobs = JSON.parse(
    localStorage.getItem('savedJobs')
  );

  const [jobs, setJobs] = useState(
    savedJobs || []
  );

  useEffect(() => {
    localStorage.setItem(
      'savedJobs',
      JSON.stringify(jobs)
    );

    props.dispatch(startSearchResults());
  });

  const saveAnnons = () => {
    setJobs([...jobs, { ...props }]);

    // Retrive saved jobs from localStorage
    //  const da = JSON.parse(localStorage.getItem('savedJobs'));
  };

 

  const handle = () => {
    console.log('new stuff should show');
  };

  const classes = useStyles();

  const toSavedJobs = () => {
      props.history.push('/saved')
  }
  
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
          item
          xs={12}
          className={classes.savedJobs}>
          <SavedJobs toSaved={toSavedJobs} />
        </Grid>
        <Grid
          style={{ margin: '4rem' }}
          item
          xs={12}>
          <Grid
            container
            justify='center'
            spacing={2}>
            <JobPostList
              list={props.results}
              text={'save'}
              action={saveAnnons}
            />
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

// <Grid
// container
// justify='center'
// className={classes.list}>
// <Grid
//   item
//   xs={12}
//   className={classes.savedJobs}>
//   <SavedJobs />
// </Grid>
// <Grid
//   style={{ margin: '4rem' }}
//   item
//   xs={12}>
//   <Grid
//     container
//     justify='center'
//     spacing={2}>
//<JobPostList list={props.results} text={'save'} action={saveAnnons}/>
//   </Grid>
// </Grid>
// </Grid>

// <div className={classes.savedJobs}>
//         <SavedJobs />
//       </div>
//       <JobPostList
//         list={props.results}
//         text={'save'}
//         action={saveAnnons}
//       />
