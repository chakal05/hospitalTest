import React from 'react';
import { connect } from 'react-redux';
import { addToSaved } from '../redux/actions/savedJobs';
import SaveBtn from '../components/saveBtn';
import SavedJobs from '../components/savedJobs';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Entete from '../components/entete';
import Button from '../components/button';
import selectData from '../redux/selectors/sortByText';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './styles/annonser.scss';
const useStyles = makeStyles((theme) => ({
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
}));

const Annonser = (props) => {
	const classes = useStyles();

	return (
		<>
			<Entete
				title={`Found: ${props.results.length}`}
				onSubmit={() => {}}
			/>
			<Grid container justify='center' className='annonsWrapper'>
				<Grid
					item
					xs={12}
					className='savedJob'>
					<SavedJobs />
				</Grid>

				<Grid item xs={12}>
					<Grid container justify='center' spacing={2}>
						{props.results.map((item) => (
							<Grid key={item.identifier} xs={12} item>
								<Paper className={classes.paper}>
									<Card variant='outlined'>
										<CardContent>
											<Typography
												variant='h5'
												component='h2'>
												{item.jobPositionTitle.title}
											</Typography>
											<Typography
												className={classes.pos}
												color='textSecondary'>
												{item.hiringOrg.name} -{' '}
												{item.hiringOrgContact.addressLine
													.split(',')
													.pop()}
											</Typography>
											<Typography component='h5'>
												{item.jobPositionTitle.title}
											</Typography>

											<Typography component='p'>
												{` Duration: ${item.classification.duration}`}
											</Typography>
										</CardContent>
										<CardActions>
											<Link
												to={`/annonser/${item.identifier}`}>
												<Button text={'See more'} />
											</Link>

											<SaveBtn
												save={() => {
													props.dispatch(
														addToSaved(item)
													);

													localStorage.setItem(
														'savedJobs',
														JSON.stringify([item])
													);
												}}
											/>
										</CardActions>
									</Card>
								</Paper>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

const mapPropsToTheState = (state) => {
	return {
		results: selectData(state.results, state.filter),
	};
};

export default connect(mapPropsToTheState)(Annonser);
