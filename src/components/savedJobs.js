import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from '../components/button';
import JobPostList from './jobPostList';

const SavedJobs = (props) => {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<div>
			<Button
				text={`${props.saved.length} sparade`}
				action={() => (props.saved[0] ? setModalShow(true) : '')}
			/>

			<Modal
				show={modalShow}
				size='lg'
				aria-labelledby='contained-modal-title-vcenter'
				centered>
				<Modal.Header>
					<Modal.Title id='contained-modal-title-vcenter'>
						Sparade
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<JobPostList results={props.saved} text={'Radera'} />

					{!props.saved[0] && (
						<i>
							<h5 style={{ textAlign: 'center' }}>
								{' '}
								Inga sparade annonser{' '}
							</h5>
						</i>
					)}
				</Modal.Body>
				<Modal.Footer>
					<Button
						text={'Stäng'}
						action={() => {
							setModalShow(false);
						}}
					/>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

const toProps = (state) => {
	return {
		saved: state.saved,
	};
};

export default connect(toProps)(SavedJobs);
