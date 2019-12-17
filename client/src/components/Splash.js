import React, { useState } from 'react';
import axios from 'axios';

import Login from './LoginBar';

import {
	Grid, Paper, TextField, Button, Typography, makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		background: '#222831',
		height: '100vh'

	},
	paper: {
		background: '#29a19c',
		border:'5px solid #393e46',
		padding: 10,
	},
	button: {
		background: '#393e46',
		color: '#a3f7bf'
	}
}));
function Splash() {
	const classes = useStyles();
	
	const [user, setUser] = useState({
		username: '',
		password: ''
	});


	const handleChanges = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log(user);
		axios
			.post('https://auth79.herokuapp.com/api/register', user)
			.then(res => {
				console.log('Post', res);
				
			})
			.catch(err => {
				console.log(err);
			});
		setUser({ username: '', password: '' });
		
	};
	return (
		<div>
			<Login />
			<Grid container className={classes.root} spacing={1}>
				<Paper className={classes.paper}>
					<form onSubmit={handleSubmit}>
						<Typography variant='h5'>Register</Typography>
						<TextField
							id='outlined-basic'
							label='username'
							name='username'
							margin='normal'
							variant='outlined'
							value={user.username}
							onChange={handleChanges}
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
							required
						/>
						<Button type='submit' className={classes.button}>
							submit
						</Button>
					</form>
				</Paper>
				
			</Grid>
		</div>
	);
}

export default Splash;
