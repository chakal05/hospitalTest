import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Search from '../components/search';
import { startSearchResults } from '../redux/actions/searchJobs';


const Landing = (props) => {
 useEffect(() => {
 
    props.dispatch(startSearchResults());
  
  });

  const handleSubmit = () => {
    props.history.push('/annonser');
  };

  return (
    <Route>
      <h1> Landing page </h1>
      <br />
      <Search onSubmit={handleSubmit} />
    </Route>
  );
};

export default connect()(Landing);
