const bcrypt = require('bcryptjs');

const userDb = require('../models/authDb');

module.exports = function(req, res, next) {
	const { username, password } = req.headers;

	if (username && password) {
		userDb
			.getBy({ username })
			.first()
			.then(user => {
				if (user && bcrypt.compareSync(password, user.password)) {
					res.status(200).json({ message: `Welcome ${user.username}!` });
				} else {
					res.status(401).json({ message: 'Wrong Credentials' });
				}
			})
			.catch(err => {
				res.status(500).json(err);
			});
	} else {
		res.status(400).json({ message: 'Provide Valid Credentials' });
	}
};
