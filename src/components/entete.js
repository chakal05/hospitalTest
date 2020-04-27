import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sortByText } from '../redux/actions/filters';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '../components/button';
import Grid from '@material-ui/core/Grid';
import '../pages/styles/entete.scss';

const Entete = (props) => {
   const [textInput, setText] = useState('');


   return (
      <div className='entetePage'>
         <Grid
            container
            justify='center'
            className='blue'>
            <Grid
               item
               xs={12}
               className='title'>
               <h1 >
                  {' '}
                  {props.title}
               </h1>
            </Grid>
            <Grid
               item
               xs={10}
               className='searchInput'>
               <Paper
                  component='form'
                  className='paper'
                  onSubmit={(e) => {
                     e.preventDefault();
                     props.dispatch(
                        sortByText({
                           text: textInput,
                        })
                     );
                     props.onSubmit();
                  }}>
                  <InputBase
                     className='input'
                     placeholder='Search by profession or city  '
                     onChange={(e) => {
                        setText(e.target.value);
                     }}
                  />

                  <Button
                     type='submit'
                     text={'SEARCH'}
                     className='btnSearch'
                     />
               </Paper>
            </Grid>
         </Grid>
      </div>
   );
};

export default connect()(Entete);
