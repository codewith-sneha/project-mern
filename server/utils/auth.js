const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'your_default_secret_key';

const generateToken = (payload, secret = JWT_SECRET, expiresIn = '1h') => {
    return jwt.sign(payload, secret, { expiresIn });
};

module.exports = {
    generateToken
};
