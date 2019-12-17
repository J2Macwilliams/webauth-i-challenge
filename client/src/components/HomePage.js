import React, {useState, useEffect} from 'react'

import NavBar from '../components/NavBar'

import axios from 'axios';

import {Grid, Paper, Card, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		background: '#ff8000',
		padding: 10,
		margin: 10
	},
	
}));
function HomePage() {
    const classes = useStyles();
    const [clients, setClients] = useState([]);

    useEffect(() => {
		axios
			.get('http://localhost:5000/api/restricted/users')
			.then(res => {
				console.log('Get', res);
				setClients(res.data);
			})
			.catch(err => console.log(err));
    }, []);
    
    return (
        <div>
            <NavBar />
            <Paper>
					<Typography variant='h3'>Users</Typography>
					{clients.map(peeps => (
						<Grid item key={peeps.id} xs={12} sm={6} md={3}>
							<Card className={classes.card}>
								<Typography className={classes.type} variant='h5'>{peeps.username}</Typography>
							</Card>
						</Grid>
					))}
				</Paper>
        </div>
    )
}

export default HomePage
