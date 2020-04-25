import React from 'react';
import Button from '@material-ui/core/Button';

const SaveBtn = (props) => {
  //const classes = useStyles();
  return (
    <Button onClick={props.save}> save </Button>
    
  );
};

export default SaveBtn;
