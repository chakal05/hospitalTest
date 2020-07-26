import React, { useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Entete from '../components/entete';
import { startSearchResults } from '../redux/actions/searchJobs';
import Grid from '@material-ui/core/Grid';
import Button from '../components/button';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './styles/landing.scss';

const Landing = (props) => {
	const { dispatch } = props; 
	useEffect(() => {
		dispatch(startSearchResults());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);

	return (
		<Route>
			<div className='landingPage'>
				<Entete
					title={'Sök'}
					onSubmit={() => {
						props.history.push('/annonser');
					}}
				/>
				<Grid
					container
					justify='center'
					className='landingPageWrapper'>
					<Grid item xs={12} className='pageHeader'>
						<h1> Sista inläggen </h1>
					</Grid>

					<Grid className='cardContainer' item xs={12}>
						<Grid container justify='center' spacing={2}>
							{props.results.map((item) => (
								<Grid
									key={item.identifier}
									className='jobPostCard'
									item>
									<Paper>
										<Card variant='outlined'>
											<CardContent>
												<Typography
													color='textSecondary'
													gutterBottom>
													Ny
												</Typography>
												<Typography
													variant='h5'
													component='h2'>
													{item.jobPositionTitle.title}
												</Typography>
												<Typography color='textSecondary'>
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
													<Button text={'Läs mer'} />
												</Link>
											</CardActions>
										</Card>
									</Paper>
								</Grid>
							))}
						</Grid>
					</Grid>
					<Grid item xs={12} className='pageHeader'>
						{!props.results[0] && <h2>Loading ...</h2>}
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
