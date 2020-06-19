import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 123,
	},
}));

const Dropdown = (props) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	return (
		<>
			<FormControl className={classes.formControl}>
				<InputLabel id='demo-controlled-open-select-label'>
					{props.title}
				</InputLabel>
				<Select
					labelId='demo-controlled-open-select-label'
					id='demo-controlled-open-select'
					open={open}
					onClose={() => {
						setOpen(false);
					}}
					onOpen={() => {
						setOpen(true);
					}}
					value={props.value}
					onChange={props.handleChange}>
					{props.options.map((item, index) => {
						return (
							<MenuItem key={index} value={item}>
								{' '}
								{item}{' '}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</>
	);
};

export default Dropdown;
