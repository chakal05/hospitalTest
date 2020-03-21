import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import workplace from './assets/christina-wocintechchat-com-tKYfcTaXsf0-unsplash.jpg';
import logo from './assets/LogoMakr_6XClbq.png';
import IconButton from '@material-ui/core/IconButton';

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
    padding: theme.spacing(3, 6, 1),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },

  topBar: {
    borderTopLeftRadius: '1.1rem',
    borderTopRightRadius: '1.1rem',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
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
    borderBottomLeftRadius: '1.5rem',
    height: '800px',
  },

  secondLogo: {
    height: '200px',
    padding: '3rem',
    marginTop: '2rem',
  },

  signUp: {},

  right: {},

  btns: {
    backgroundColor: '#1A2B3F',
    color: '#fff',
    marginLeft: '1rem',
  },

  pic: {},
  main: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: '1.5rem',
    borderBottomRightRadius: '1.5rem',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth='xl'>
        <AppBar
          className={classes.topBar}
          color='#5A5B5D'
          elevation={0}
          position='relative'
        >
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
            >
              <img src={logo} className={classes.logo} alt='logo' />
            </IconButton>
            <Typography className={classes.title}>
              <a href='#'>
                <h3>KERJA</h3>
              </a>
            </Typography>
            <Button variant='contained' className={classes.btns}>
              Login
            </Button>
            <Button variant='contained' className={classes.btns}>
              Sign up
            </Button>
          </Toolbar>
        </AppBar>
      </Container>
      <Container maxWidth='xl'>
        {/* Hero unit */}
        <Grid container className={classes.main}>
          <Grid item xs={12} sm={8}>
            <div className={classes.pic}>
              <img src={workplace} alt='workplace' className={classes.media} />
            </div>
          </Grid>

          <Grid item xs={12} className={classes.right} align='center' sm={4}>
            <div>
              <img src={logo} className={classes.secondLogo} alt='logo' />
            </div>
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
                Whether you are looking for a job or for your next employee,
                Kerja got what you are searching. Visit the links below for more.
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
                      Post ad
                    </Button>
                  </Grid>
                </Grid>
              </div>
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

 <Grid item xs={6}>
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

*/
