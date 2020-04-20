import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  background: {
    backgroundColor: '#fff',
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        elevation={0}
        className={classes.background}>
        <Toolbar>
          <Typography
            color='primary'
            variant='h6'
            className={classes.title}>
            JobCenter
          </Typography>
          <Button color='primary'>Login</Button>
          <Button color='primary'>
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
