import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../pages/styles/header.scss';

export default function ButtonAppBar() {
	return (
		
			<AppBar className='AppBar' position='static' elevation={0}>
				<Toolbar>
					<Typography variant='h4' className='titre'>
						JobCenter
					</Typography>
				</Toolbar>
			</AppBar>
	);
}
