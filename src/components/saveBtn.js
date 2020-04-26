import React from 'react';
import Button from '../components/button';

const SaveBtn = (props) => {
  //const classes = useStyles();
  return (
    <Button text={'Save'} action={props.save}>  </Button>
    
  );
};

export default SaveBtn;
