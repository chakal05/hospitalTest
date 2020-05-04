import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { addToSaved } from '../redux/actions/savedJobs';
import Button from '../components/button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const jobPostList = (props) => {
	return (
		<>
			{props.results.map((item) => (
				<Grid key={item.identifier}  item>
					<Paper>
						<Card variant='outlined'>
							<CardContent>
								<Typography
									className='jobTitle'
									variant='h5'
									component='h2'>
									{item.jobPositionTitle.title}
								</Typography>
								<Typography
									className='pos'
									color='textSecondary'>
									{item.hiringOrg.name} -{' '}
									{item.jobPositionLocation.city}
								</Typography>
								<Typography component='h5'>
									{item.jobPositionTitle.title}
								</Typography>

								<Typography component='p'>
									{` Duration: ${item.classification.duration}`}
								</Typography>
								<Typography variant='body2' component='p'>
									{`Published: ${moment(
										item.postDetail.published
									).format('MMM Do YYYY')}`}
								</Typography>
							</CardContent>
							<CardActions>
								<Link to={`/annonser/${item.identifier}`}>
									<Button text={'See more'} />
								</Link>

								<Button
									text={'Save'}
									action={() => {
										const savedJobs = JSON.parse(
											localStorage.getItem('savedJobs')
										);

										// if SavedJobs is empty

										if (!savedJobs) {
											props.dispatch(addToSaved(item));
											localStorage.setItem(
												'savedJobs',
												JSON.stringify([item])
											);
										} else {
											const check = savedJobs.find(
												(element) =>
													element.identifier ===
													item.identifier
											);

											if (check === undefined) {
												props.dispatch(addToSaved(item));
												localStorage.setItem(
													'savedJobs',
													JSON.stringify([item])
												);
											} else {
												alert('Redan sparade');
											}
										}
									}}
								/>
							</CardActions>
						</Card>
					</Paper>
				</Grid>
			))}
		</>
	);
};

export default connect()(jobPostList);
