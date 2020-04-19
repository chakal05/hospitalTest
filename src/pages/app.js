import React from 'react';
import Routes from '../router/index';
import '../firebase/index';
import storage from '../redux/store/index';
import { Provider } from 'react-redux';
import Header from '../components/header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
const store = storage();

const useStyle = makeStyles((theme) => ({
  blanc: {
 //   backgroundColor: '#fff',
  },
}));
const App = () => {
  const classes = useStyle();
  return (
    <Provider store={store}>
      <CssBaseline />
      <Container
        maxWidth='lg'
        className={classes.blanc}>
        <Header />
        <Routes />
      </Container>
    </Provider>
  );
};

export default App;
