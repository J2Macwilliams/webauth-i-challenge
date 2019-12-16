const express = require('express');
const bcrypt = require('bcryptjs');

const dB = require('../models/authDb');
const restricted = require('../middleware/restricted');

const router = express.Router();

router.post('/register', (req, res) => {
    

});

router.post('/login', (req, res) => {
    

});

router.get('/users', (req, res) => {
    

});



module.exports = router;