import React, {
  useState,
  useEffect,
} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: '#15347A',
    color: '#fff',
  },
}));
const SaveBtn = (props) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.btn}
      onClick={props.action}
      variant='contained'>
      {props.text}
    </Button>
  );
};

export default SaveBtn;
