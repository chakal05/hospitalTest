import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../firebase/index';
import CssBaseline from '@material-ui/core/CssBaseline';
import storage from '../redux/store/index';
import { Provider } from 'react-redux';
import Header from '../components/header';
import Routes from '../router/index';
import Container from '@material-ui/core/Container';
const store = storage();

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Container  maxWidth='lg'>
        <Header />
        <Routes />
      </Container>
    </Provider>
  );
};

export default App;
