import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router/index';
//import database from
import './firebase/index';
import storage from './redux/store/index';
import { Provider } from 'react-redux';

const store = storage();

function App() {
  return (
   <Provider store={store}>
   <Routes />
   </Provider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
