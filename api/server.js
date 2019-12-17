const express = require('express');
const cors = require('cors');

// Require router
const authRouter = require('../auth/authRouter');

const server = express();

server.use(express.json());
server.use(cors());


// Call authRouter
server.use('/api', authRouter);


// Global test endpoint
server.get('/', (req, res) => {
res.send(`<h3>Let's Get into this App!</h3>`)
});



module.exports = server;