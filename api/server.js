const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Require router
const authRouter = require('../auth/authRouter');

const server = express();
server.use(helmet());

server.use(express.json());
server.use(cors());

// Global test endpoint
server.get('/', (req, res) => {
res.send(`<h3>Let's Get into this App!</h3>`)
});

// Call carRouter
server.use('/api', authRouter);

module.exports = server;