import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


import { TextField, Button, makeStyles } from '@material-ui/core';

import '../App.css';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	form: {
		display: 'flex',
		width: '60%'
	},
	input: {
		background: 'white',
		margin: 5,
		borderRadius: 5
	},
	button: {
		background: '#a3f7bf',
		fontSize: '1rem',
		
	}
}));

function Login() {
	const classes = useStyles();

	const [user, setUser] = useState({
		username: '',
		password: ''
	});

	const handleChanges = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log(user);
		axios
			.post('localhost:5000/api/login', user)
			.then(res => {
				console.log('Post', res);
			})
			.catch(err => {
				console.log(err);
			});
		setUser({ username: '', password: '' });
	};

	return (
		
			<div className='navbar' >
			<NavLink exact to='/'  activeClassName="activeNavButton" className="navLink" >
        Home
      </NavLink>
      <NavLink to='/home-page' activeClassName="activeNavButton" className="navLink" >Users</NavLink>
				
				<form onSubmit={handleSubmit} className={classes.form}>
					<TextField
						id='outlined-basic'
						label='username'
						name='username'
						margin='normal'
						variant='outlined'
						value={user.username}
						onChange={handleChanges}
						className={classes.input}
						required
					/>
					<TextField
						id='outlined-basic'
						label='password'
						name='password'
						margin='normal'
						variant='outlined'
						value={user.password}
						onChange={handleChanges}
						className={classes.input}
						required
					/>
					<Button type='submit' className={classes.button}>
						submit
					</Button>
				</form>
			</div>
		
	);
}

export default Login;
