const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const JWT_SECRET = crypto.randomBytes(32).toString('hex');

const generateToken = (payload, secret = JWT_SECRET, expiresIn = '1h') => {
    return jwt.sign(payload, secret, { expiresIn });
};

module.exports = {
    generateToken,
    JWT_SECRET
};
