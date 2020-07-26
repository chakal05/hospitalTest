import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
	sortbyJobType,
	sortByPublishedDay,
	sortbyCity,
} from '../redux/actions/filters';
import moment from 'moment';
import SavedJobs from '../components/savedJobs';
import JobPostList from '../components/jobPostList';
import Entete from '../components/entete';
import selectData from '../redux/selectors/sortJob';
import Grid from '@material-ui/core/Grid';
import Select from '../components/select';
import './styles/annonser.scss';

const Annonser = (props) => {
	const [city, setCity] = useState('');
	const [type, setType] = useState('');
	const [published, setPublished] = useState('');
	return (
		<>
			<Entete
				title={`Hittade: ${props.results.length}`}
				onSubmit={() => {}}
			/>
			<Grid container justify='center' className='annonsWrapper'>
				<Grid item xs={12}>
					<Grid
						container
						justify='center'
						className='dropdownContainer'>
						<Grid item className='dropdown'>
							<Select
								title='Stad'
								value={city}
								handleChange={(event) => {
									console.log(event.target.value);
									setCity(event.target.value);
									if (event.target.value === 'Alla') {
										props.dispatch(
											sortbyCity({ city: '' })
										);
									} else {
										props.dispatch(
											sortbyCity({
												city: event.target.value,
											})
										);
									}
								}}
								options={[
									'Alla',
									'Umeå',
									'Gävle',
									'Stockholm',
									'Trollhättan',
								]}
							/>
						</Grid>
						<Grid className='dropdown'>
							<Select
								title='Omfattning'
								value={type}
								handleChange={(event) => {
									setType(event.target.value);
									if (event.target.value === 'Alla') {
										props.dispatch(
											sortbyJobType({ jobType: '' })
										);
									} else {
										props.dispatch(
											sortbyJobType({
												jobType: event.target.value,
											})
										);
									}
								}}
								options={['Alla', 'Heltid', 'Deltid']}
							/>
						</Grid>
						<Grid className='dropdown'>
							<Select
								title='Publicerad'
								value={published}
								handleChange={(event) => {
									setPublished(event.target.value);

									if (event.target.value === 'Idag') {
										const day = moment()
											.format()
											.substr(0, 10);
										props.dispatch(
											sortByPublishedDay({
												published: [day, 'today'],
											})
										);
									} else if (
										event.target.value === 'Senaste 7 dagarna'
									) {
										const day = moment().subtract(
											7,
											'days'
										);
										const day_7 = day
											.format()
											.substr(0, 10);

										props.dispatch(
											sortByPublishedDay({
												published: [day_7, 'last_7_days'],
											})
										);
									} else if (
										event.target.value === 'Senaste 30 dagarna'
									) {
										const day = moment().subtract(
											30,
											'days'
										);
										const day_30 = day
											.format()
											.substr(0, 10);
										props.dispatch(
											sortByPublishedDay({
												published: [
													day_30,
													'last_30_days',
												],
											})
										);
									} else if (event.target.value === 'Alla') {
										props.dispatch(
											sortByPublishedDay({
												published: ['', 'all'],
											})
										);
									}
								}}
								options={[
									'Alla',
									'Idag',
									'Senaste 7 dagarna',
									'Senaste 30 dagarna',
								]}
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} className='savedJob'>
					<SavedJobs />
				</Grid>

				<Grid item xs={12}>
					<JobPostList results={props.results} text={'Spara'} />
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
