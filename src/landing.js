import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import workplace from './assets/workers.jpeg';
import logo from './assets/LogoMakr_6XClbq.png';
import grey from '@material-ui/core/colors/grey';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 21, 1),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },

  topBar: {
    border: '1px solid',
    borderTopLeftRadius: '1.1rem',
    borderTopRightRadius: '1.1rem',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderBottomColor: '#5A5B5D',
  },

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    position: 'relative',
    bottom: '0',
    margin: '0 auto',
    width: '99%',
  },
  logo: {
    height: '40px',
    flexGrow: 1,
  },

  media: {
    // border:'1px solid',
    width: '70%',
    height: '600px',
  },

  signUp:{
    marginLeft:'1rem'
  },

  pic: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: '1rem',
    borderBottomRightRadius: '1rem',
  },
  main: {
    border: '1px solid',
    borderBottomLeftRadius: '1.5rem',
    borderBottomRightRadius: '1.5rem',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderBottomColor: '#5A5B5D',
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container>
        <AppBar
          className={classes.topBar}
          color='#5A5B5D'
          elevation={0}
          position='relative'
        >
          <Toolbar>
           <Typography className={classes.title}>
           <a href='#'>
           <img src={logo} className={classes.logo} />
           </a>
           </Typography>
            <Button variant='text'  color='#212121'>Login</Button>
            <Button variant='text' className={classes.signUp}  color='inherit'>Sign up</Button>
          </Toolbar>
        </AppBar>
      </Container>
      <Container>
        {/* Hero unit */}

        <Grid container maxWidth={'lg'} align='center' className={classes.main}>
          <Grid item xs={12}>
            <div className={classes.heroContent}>
              <Typography
                component='h2'
                variant='h4'
                align='center'
                color='textPrimary'
                gutterBottom
              >
                Meet your new collegue
              </Typography>
              <Typography
                variant='h6'
                align='center'
                color='textSecondary'
                paragraph
              >
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don&apos;t simply skip over it entirely.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify='center'>
                  <Grid item>
                    <Button variant='outlined' color='5A5B5D'>
                      Search job
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant='outlined' color='5A5B5D'>
                      Post jobs
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.pic}>
              <img src={workplace} alt='workplace' className={classes.media} />
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* Footer */}

      {/* End footer */}
    </React.Fragment>
  );
}

/*

<footer className={classes.footer}>
<Typography
  variant='subtitle1'
  align='center'
  color='textSecondary'
  component='p'
>
  Something here to give the footer a purpose!
</Typography>
<Copyright />
</footer>

*/
