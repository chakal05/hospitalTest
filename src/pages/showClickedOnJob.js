import React from 'react';
import { connect } from 'react-redux';
import { addToSaved } from '../redux/actions/savedJobs';
import SavedJobs from '../components/savedJobs';
import Button from '../components/button';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../pages/styles/jobPost.scss';
const PostedJob = (props) => {
	return (
		<div className='jobPostPage'>
			<div className='btnContainer'>
				<div className='back'>
					<Button
						text={'Till resultaten'}
						action={() => {
							props.history.push('/annonser');
						}}
					/>
				</div>
				<div className='savedJobs'>
					<SavedJobs />
				</div>
			</div>
			<div className='jobPostWrapper'>
				<Paper>
					<Card variant='outlined'>
						<CardContent>
							<Typography
								variant='h4'
								component='h3'
								className='boldTitle'>
								{props.result.jobPositionTitle.title}
							</Typography>
							<Typography variant='h4' component='h3'>
								{props.result.hiringOrg.name}
							</Typography>
							<Typography variant='h5' component='h2'>
								{props.result.jobPositionTitle.title}
							</Typography>
							<Typography style={{ margin: '3px' }}>
								{`Kommun: ${props.result.jobPositionLocation.city}`}
							</Typography>
							<Typography style={{ margin: '3px' }}>
								{`Varaktighet: ${props.result.classification.duration}`}
							</Typography>
							<Typography>
								{`Anställningsform: ${props.result.classification.TypeOfEmployment}`}
							</Typography>
							<Paper className='elevatedCard' elevation={3}>
								<Card>
									<CardContent>
										<div>
											<h2 className='boldTitle'>
												{' '}
												Kvalifikationer{' '}
											</h2>
											{props.result
												.qualificationsRequiredSummary
												.education && (
												<Typography>
													{`- ${props.result.qualificationsRequiredSummary.education}`}{' '}
												</Typography>
											)}

											{props.result
												.qualificationsRequiredSummary
												.hasExperience.type && (
												<Typography>
													{`- ${props.result.qualificationsRequiredSummary.hasExperience.type}`}
												</Typography>
											)}
											{props.result
												.qualificationsRequiredSummary
												.hasDriverLicence.category && (
												<Typography>
													{` - Driver licence: ${
														props.result
															.qualificationsRequiredSummary
															.hasDriverLicence
															.category || 'ingen'
													}`}
												</Typography>
											)}
										</div>
									</CardContent>
								</Card>
							</Paper>
							<div>
								<div>
									<h2 className='boldTitle'>Om jobbet :</h2>
									<p className='description'>
										{' '}
										{
											props.result.jobPositionPurpose
												.purpose
										}{' '}
									</p>
								</div>
								<div>
									<h2 className='boldTitle'>
										{' '}
										Om anställningen :{' '}
									</h2>
									{`Lön: ${props.result.compensation.salaryType}`}
								</div>
								<div>
									<h2 className='boldTitle'> Adress : </h2>
									{props.result.hiringOrgContact.addressLine}
								</div>
								<div>
									<h2 className='boldTitle'>Publicerat: </h2>
									{props.result.postDetail.published}
								</div>
							</div>
						</CardContent>

						<CardActions>
							<Button
								text={'Spara'}
								action={() => {
									const savedJobs = JSON.parse(
										localStorage.getItem('savedJobs')
									);

									const check = savedJobs.filter(
										(element) =>
											element.identifier ===
											props.result.identifier
									);

									if (check.length === 0) {
										const toAdd = savedJobs;
										props.dispatch(
											addToSaved(props.result)
										);

										toAdd.push(props.result);
										localStorage.setItem(
											'savedJobs',
											JSON.stringify(toAdd)
										);
									} else {
										return alert('Redan sparade');
									}
								}}
							/>
						</CardActions>
					</Card>
				</Paper>
			</div>
			);
		</div>
	);
};

const mapPropsTo = (state, props) => {
	return {
		result: state.results.find((element) => {
			return element.identifier === props.match.params.id;
		}),
	};
};

export default connect(mapPropsTo)(PostedJob);
