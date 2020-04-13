import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
  } from 'redux';
  import thunk from 'redux-thunk';
  import jobSearchReducer from '../reducers/jobSearchReducer';
  import filterReducer from '../reducers/filterReducer';
  
  const composeEnhencers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    compose;
  
  export default () => {
    const store = createStore(
      combineReducers({
        results: jobSearchReducer,
        filter: filterReducer,
      }),
  
      composeEnhencers(applyMiddleware(thunk))
  
      //Redux devTools
      // window.__REDUX_DEVTOOLS_EXTENSION__ &&
      //   window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  
    return store;
  };