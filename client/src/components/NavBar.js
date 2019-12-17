import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
button: {
    background: '#222831',
    color: '#29a19c',
    border: '1px solid #a3f7bf'
}
}));



function NavBar() {
	const classes = useStyles();
	return (
		<div className='navbar'>
			<NavLink
				exact
				to='/'
				activeClassName='activeNavButton'
				className='navLink'
			>
				Home
			</NavLink>
			<NavLink
				to='/home-page'
				activeClassName='activeNavButton'
				className='navLink'
			>
				Users
			</NavLink>
			<Button className={classes.button} >LogOut</Button>
		</div>
	);
}

export default NavBar;
