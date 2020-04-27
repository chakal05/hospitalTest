import React from 'react';
import { connect } from 'react-redux';
import { addToSaved } from '../redux/actions/savedJobs';
import Button from './button';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import '../pages/styles/jobPost.scss';

const JobPost = (props) => {
	return (
		<div className='jobPostWrapper'>
			<Paper>
				<Card variant='outlined'>
					<CardContent>
						<Typography
							variant='h4'
							component='h3'
							className='boldTitle'>
							{props.jobPositionTitle.title}
						</Typography>
						<Typography variant='h4' component='h3'>
							{props.hiringOrg.name}
						</Typography>
						<Typography variant='h5' component='h2'>
							{props.jobPositionTitle.title}
						</Typography>
						<Typography style={{ margin: '3px' }}>
							{`Kommun: ${props.hiringOrgContact.addressLine
								.split(',')
								.pop()} `}
						</Typography>
						<Typography style={{ margin: '3px' }}>
							{`Varaktighet: ${props.classification.duration}`}
						</Typography>
						<Typography>
							{`Anställningsform: ${props.classification.TypeOfEmployment}`}
						</Typography>
						<Paper className='elevatedCard' elevation={3}>
							<Card>
								<CardContent>
									<div>
										<h2 className='boldTitle'>
											{' '}
											Kvalifikationer{' '}
										</h2>
										{props.qualificationsRequiredSummary
											.education && (
											<Typography>
												{`- ${props.qualificationsRequiredSummary.education}`}{' '}
											</Typography>
										)}

										{props.qualificationsRequiredSummary
											.hasExperience.type && (
											<Typography>
												{`- ${props.qualificationsRequiredSummary.hasExperience.type}`}
										
											</Typography>
										)}
										{props.qualificationsRequiredSummary
											.hasDriverLicence.category && (
											<Typography>
												{` - Driver licence: ${
													props
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
						<div className='jobDescription'>
							<div>
								<h2 className='boldTitle'>Om jobbet :</h2>
								{props.jobPositionPurpose.purpose}
							</div>
							<div className='anstallning'>
								<h2 className='boldTitle'>
									{' '}
									Om anställningen :{' '}
								</h2>
								{`Lön: ${props.compensation.salaryType}`}
							</div>
							<div>
								<h2 className='boldTitle'> Adress : </h2>
								{props.hiringOrgContact.addressLine}
							</div>
						</div>
					</CardContent>

                    <CardActions>
                 
                    <Button
                        text={'Save'}
                        action={() => {
                            const savedJobs = JSON.parse(
                                localStorage.getItem(
                                    'savedJobs'
                                )
                            );

                            // if SavedJobs is empty

                            if (!savedJobs) {
                                props.dispatch(
                                    addToSaved(props)
                                );
                                localStorage.setItem(
                                    'savedJobs',
                                    JSON.stringify([props])
                                );


                            } else {
                            const check = savedJobs.find(
                                (element) =>
                                    element.identifier ===
                                    props.identifier
                            );


                            if (check === undefined) {
                                props.dispatch(
                                    addToSaved(props)
                                );
                                localStorage.setItem(
                                    'savedJobs',
                                    JSON.stringify([props])
                                );
                            } else {
                                alert('Redan sparade')
                            }
                           }
                        }}
                    />
                    </CardActions>
				</Card>
			</Paper>
		</div>
	);
};

export default connect()(JobPost);
