import React from 'react';
import { connect } from 'react-redux';
import SavedJobs from '../components/savedJobs';
import JobPost from '../components/jobPost';
import Button from '../components/button';
import './styles/clickOnJob.scss';


const PostedJob = (props) => {


	return (
		<div>
			<div className='btnContainer'>
				<div className='back'>
					<Button
						text={'Go back to results'}
						action={() => {
							props.history.push(
								'/annonser'
							);
						}}
					/>
				</div>
				<div className='savedJobs'>
					<SavedJobs />
				</div>
			</div>
			<JobPost {...props.result} />
		</div>
	);
};

const mapPropsTo = (state, props) => {
	return {
		result: state.results.find((element) => {
			return (
				element.identifier ===
				props.match.params.id
			);
		}),
	};
};

export default connect(mapPropsTo)(PostedJob);
