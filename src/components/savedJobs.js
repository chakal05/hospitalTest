import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from '../components/button';
import { removeFromSavedJobs } from '../redux/actions/savedJobs';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

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

const SavedJobs = (props) => {
  const classes = useStyles();
  const [
    modalShow,
    setModalShow,
  ] = React.useState(false);

  return (
    <div>
      <Button
        text={`${props.saved.length} saved jobs`}
        action={() => setModalShow(true)}/>
        
      

      <Modal
        show={modalShow}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered>
        <Modal.Header>
          <Modal.Title id='contained-modal-title-vcenter'>
            Saved jobs
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.saved.map((element) => (
            <Grid
              key={element.identifier}
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
                      {
                        element.jobPositionTitle
                          .title
                      }
                    </Typography>
                    <Typography
                      className={classes.pos}
                      color='textSecondary'>
                      {element.hiringOrg.name} -{' '}
                      {element.hiringOrgContact.addressLine
                        .split(',')
                        .pop()}
                    </Typography>
                    <Typography component='h5'>
                      {
                        element.jobPositionTitle
                          .title
                      }
                    </Typography>

                    <Typography component='p'>
                      {` Duration: ${element.classification.duration}`}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                    text={'See more'}
                      className={classes.links}>
                      <Link
                        to={`/annonser/${element.identifier}`}
                        className={classes.link}>
                        
                      </Link>
                    </Button>
                    <Button
                    text={'Delete'}
                      action={() => {
                        props.dispatch(
                          removeFromSavedJobs(
                            element
                          )
                        );

                        const toRemove = JSON.parse(
                          localStorage.getItem(
                            'savedJobs'
                          )
                        );
                        toRemove.splice(
                          element,
                          1
                        );
                        localStorage.setItem(
                          'savedJobs',
                          JSON.stringify(toRemove)
                        );
                        setModalShow(false);
                      }} />
            
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
          ))}

          {props.saved[0] === undefined && <p> You have no saved jobs </p>  }
        </Modal.Body>
        <Modal.Footer>
          <Button
          text={'Close'}
            action={() => {
              setModalShow(false);
            }}/>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const toProps = (state) => {
  return {
    saved: state.saved,
  };
};

export default connect(toProps)(SavedJobs);
