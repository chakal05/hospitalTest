import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const pageStyle = makeStyles((theme) => ({
   
  btnSave: {
    backgroundColor: '#15347A',
    color: '#fff',
  },
}));

export default (props) => {
  const classes = pageStyle();
  const saved = JSON.parse(
    localStorage.getItem('savedJobs')
  )
    ? JSON.parse(
        localStorage.getItem('savedJobs')
      )
    : 0;
    
  return (
    <div className={classes.root}>
      <Button
        className={classes.btnSave}
        onClick={props.toSaved}
        variant='contained'>
        {`${saved.length} sparade annonser `}
      </Button>
    </div>
  );
};
