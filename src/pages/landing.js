import React, { useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Entete from '../components/entete';
import { startSearchResults } from '../redux/actions/searchJobs';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '../components/button';
import Typography from '@material-ui/core/Typography';
import './styles/landing.scss';

const Landing = (props) => {
	useEffect(() => {
		props.dispatch(startSearchResults());
	}, []);

	const handleSubmit = () => {
		props.history.push('/annonser');
	};

	return (
		<Route>
			<div className='landingPage'>
				<Entete
					title={'Search job'}
					onSubmit={handleSubmit}
				/>

				<Grid
					container
					justify='center'
					className='list'>
					<Grid
						item
						xs={12}
						className='secondHeader'>
						<h1> Latest posts </h1>
					</Grid>
					<Grid
                        className='cardContainer'
						item
						xs={12}>
						<Grid
							container
							justify='center'
							spacing={2}>
							{props.results.map(
								(item) => (
									<Grid
										key={
											item.identifier
                                        }
                                        
                                        className='carte'
										item>
										<Paper>
											<Card variant='outlined' >
												<CardContent>
													<Typography
														color='textSecondary'
														gutterBottom>
														Ny
													</Typography>
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
														className='pos'
														color='textSecondary'>
														{`${item.hiringOrg.name} - ${item.jobPositionLocation.city}`}
													</Typography>
													<Typography
														variant='body2'
														component='p'>
														{`Start datum: ${item.postDetail.startDate}`}
													</Typography>
													<Typography
														variant='body2'
														component='p'>
														{`Published: ${item.postDetail.published}`}
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
												</CardActions>
											</Card>
										</Paper>
									</Grid>
								)
							)}
						</Grid>
					</Grid>
				</Grid>
			</div>
		</Route>
	);
};

const propsToState = (state) => {
	return {
		// Get the last 4 elements of the array
		results: state.results.slice(
			Math.max(state.results.length - 4, 0)
		),
	};
};

export default connect(propsToState)(Landing);
