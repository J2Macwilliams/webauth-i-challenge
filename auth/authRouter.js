const express = require('express');
const bcrypt = require('bcryptjs');

const userDb = require('../models/authDb');
const restricted = require('../middleware/restricted');

const router = express.Router();

router.post('/register', (req, res) => {
	let user = req.body;

	const hash = bcrypt.hashSync(user.password, 8);

	user.password = hash;

	userDb
		.add(user)
		.then(stored => {
			res.status(200).json(stored);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.post('/login', (req, res) => {
	let {username, password } = req.body;

	userDb
		.getBy({username})
		.first()
		.then(user => {
			if (user && bcrypt.compareSync(password && user.password)) {
				res.status(200).json({ message: `Welcome ${user.username}!` });
			} else {
				res.status(401).json({ message: 'Wrong Credentials' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Error Getting the User', err });
		});
});




router.get('/users', restricted, (req, res) => {
	userDb
		.get()
		.then(found => {
			res.status(200).json(found);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

module.exports = router;
