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

const useStyles = makeStyles((theme) => ({
	list: {
		backgroundColor: '#fff',
		borderBottomLeftRadius: '1rem',
		borderBottomRightRadius: '1rem',
	},

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
		<div>
			<Entete
				title={`${props.results.length} post found`}
				onSubmit={() => {}}
			/>
			<Grid
				container
				justify='center'
				className={classes.list}>
				<Grid
					style={{ margin: '4rem' }}
					item
					xs={12}>
					<Grid
						item
						xs={12}
						style={{
							textAlign: 'right',
							marginTop: '-1rem',
							marginBottom: '2rem',
						}}>
						<SavedJobs />
					</Grid>

					<Grid
						container
						justify='center'
						spacing={2}>
						<>
							{props.results.map(
								(item) => (
									<Grid
										key={
											item.identifier
										}
										xs={12}
										item>
										<Paper
											className={
												classes.paper
											}>
											<Card variant='outlined'>
												<CardContent>
													<Typography
														variant='h5'
														component='h2'>
														{
															item
																.jobPositionTitle
																.title
														}
													</Typography>
													<Typography
														className={
															classes.pos
														}
														color='textSecondary'>
														{
															item
																.hiringOrg
																.name
														}{' '}
														-{' '}
														{item.hiringOrgContact.addressLine
															.split(
																','
															)
															.pop()}
													</Typography>
													<Typography component='h5'>
														{
															item
																.jobPositionTitle
																.title
														}
													</Typography>

													<Typography component='p'>
														{` Duration: ${item.classification.duration}`}
													</Typography>
												</CardContent>
												<CardActions>
													<Link
														to={`/annonser/${item.identifier}`}>
														<Button
															text={
																'See more'
															}
														/>
													</Link>

													<SaveBtn
														save={() => {
															props.dispatch(
																addToSaved(
																	item
																)
															);

															localStorage.setItem(
																'savedJobs',
																JSON.stringify(
																	[
																		item,
																	]
																)
															);
														}}
													/>
												</CardActions>
											</Card>
										</Paper>
									</Grid>
								)
							)}
						</>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

const mapPropsToTheState = (state) => {
	return {
		results: selectData(
			state.results,
			state.filter
		),
	};
};

export default connect(mapPropsToTheState)(
	Annonser
);
