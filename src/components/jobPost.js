import React from 'react';
import {connect} from 'react-redux'
import {addToSaved} from '../redux/actions/savedJobs';
import SaveBtn from './saveBtn';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../pages/styles/jobPost.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2rem 13rem 2rem',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
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
  },
}));

const JobPost = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper}>
        <Card
          className={classes.root}
          variant='outlined'>
          <CardContent>
            <Typography
              variant='h4'
              component='h3'
              style={{
                fontWeight: 'bold',
                margin: '3px',
              }}>
              {props.jobPositionTitle.title}
            </Typography>
            <Typography
              variant='h4'
              component='h3'>
              {props.hiringOrg.name}
            </Typography>
            <Typography
              variant='h5'
              component='h2'>
              {props.jobPositionTitle.title}
            </Typography>
            <Typography style={{ margin: '3px' }}>
              {`Kommun: ${props.hiringOrgContact.addressLine
                .split(',')
                .pop()} `}
            </Typography>
            <Typography style={{ margin: '3px' }}>
              {`Varaktighet: ${props.classification.duration}`}
            </Typography>
            <Typography>
              {`Anställningsform: ${props.classification.TypeOfEmployment}`}
            </Typography>
            <Paper
              style={{ marginTop: '1rem' }}
              elevation={3}>
              <Card>
                <CardContent>
                  <Typography>
                    <h2> Kvalifikationer </h2>
                    <p
                      style={{
                        fontWeight: 'bold',
                      }}>
                      {' '}
                      Krav{' '}
                    </p>
                    {props
                      .qualificationsRequiredSummary
                      .education &&
                      props
                        .qualificationsRequiredSummary
                        .hasExperience.type && (
                        <Typography>
                          {
                            props
                              .qualificationsRequiredSummary
                              .education
                          }{' '}
                          -{' '}
                          {
                            props
                              .qualificationsRequiredSummary
                              .hasExperience.type
                          }
                        </Typography>
                      )}
                    {props
                      .qualificationsRequiredSummary
                      .hasDriverLicence
                      .category && (
                      <Typography>
                        {
                          props
                            .qualificationsRequiredSummary
                            .hasDriverLicence
                            .category
                        }
                      </Typography>
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
            <Typography>
              <h2 style={{ fontWeight: 'bold' }}>
                Om jobbet :
              </h2>
              {props.jobPositionPurpose.purpose}
            </Typography>
            <Typography>
              <h2> Om anställningen : </h2>
              {`Lön: ${props.compensation.salaryType}`}
            </Typography>
            <Typography>
              <h2> Adress : </h2>
              {props.hiringOrgContact.addressLine}
            </Typography>
          </CardContent>
          <CardActions>
            <SaveBtn
              save={() => {
                props.dispatch(addToSaved(props));

                localStorage.setItem(
                  'savedJobs',
                  JSON.stringify([props])
                );
              }}
            />
          </CardActions>
        </Card>
      </Paper>
    </div>
  );
};

export default connect()(JobPost);
