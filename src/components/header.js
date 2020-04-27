import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '../pages/styles/header.scss';

export default function ButtonAppBar(props) {
	return (
		<AppBar className='AppBar' position='static' elevation={0}>
			<Toolbar>
				<a href='/' className='link'>
					{' '}
					Kerja{' '}
				</a>
			</Toolbar>
		</AppBar>
	);
}
