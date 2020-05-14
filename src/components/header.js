import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '../pages/styles/header.scss';

export default function ButtonAppBar() {
	return (
		<AppBar className='AppBar' position='static' elevation={0}>
			<Toolbar>
				<NavLink to='/' className='link'>
					KerJa
				</NavLink>
			</Toolbar>
		</AppBar>
	);
}
