import React from 'react';
import Button from 'react-bootstrap/Button';
import '../pages/styles/myButton.scss';

const MyButton = (props) => {
	return <Button className='myButton' onClick={props.action}  > {props.text} </Button>;
};

export default MyButton;
