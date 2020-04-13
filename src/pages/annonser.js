import React from 'react';
import ListOfPostedJobs from '../components/jobPostList'
import { startSearchResults } from '../redux/actions/searchJobs';
import { connect } from 'react-redux';

class Annonser extends React.Component {

    componentWillMount() {
        this.props.dispatch(startSearchResults());
      
      }
    
    render() { 
        return ( 
            <div>
            <h2> List of posted jobs  </h2>
    
            <ListOfPostedJobs />
            
            </div>
         );
    }
}

 

export default  connect()(Annonser);