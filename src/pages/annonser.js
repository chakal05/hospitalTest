import React from 'react';
import { connect } from 'react-redux';
import { addToSaved } from '../redux/actions/savedJobs';
import SavedJobs from '../components/savedJobs';
import { Link } from 'react-router-dom';
import Entete from '../components/entete';
import Button from '../components/button';
import selectData from '../redux/selectors/sortJob';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './styles/annonser.scss';

const Annonser = (props) => {

	return (
		<>
			<Entete
				title={`Hittade: ${props.results.length}`}
				onSubmit={() => {}}
			/>
			<Grid
				container
				justify='center'
                className='annonsWrapper'>
              
				<Grid
					item
					xs={12}
					className='savedJob'>
					<SavedJobs />
				</Grid>

				<Grid item xs={12}>
                    <Grid
                        className='cardContainer'
						container
						justify='center'
						spacing={2}>
						{props.results.map((item) => (
							<Grid
								key={item.identifier}
								xs={12}
								item>
								<Paper
									>
									<Card variant='outlined'>
										<CardContent>
                                            <Typography
                                            className='jobTitle'
												variant='h5'
												component='h2'>
												{
													item
														.jobPositionTitle
														.title
												}
											</Typography>
											<Typography
												className='pos'
												color='textSecondary'>
												{
													item
														.hiringOrg
														.name
												}{' '}
												-{' '}
												{item.hiringOrgContact.addressLine
													.split(',')
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

											<Button
												text={'Save'}
												action={() => {
													const savedJobs = JSON.parse(
														localStorage.getItem(
															'savedJobs'
														)
													);

													// if SavedJobs is empty

													if (
														!savedJobs
													) {
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
													} else {
														const check = savedJobs.find(
															(
																element
															) =>
																element.identifier ===
																item.identifier
														);

														if (
															check ===
															undefined
														) {
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
														} else {
															alert(
																'Redan sparade'
															);
														}
													}
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
		results: selectData(
			state.results,
			state.filter
		),
	};
};

export default connect(mapPropsToTheState)(
	Annonser
);
