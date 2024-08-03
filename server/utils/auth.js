const jwt = require('jsonwebtoken');

const generateToken = (payload, secret = process.env.JWT_SECRET, expiresIn = '1h') => {
    return jwt.sign(payload, secret, { expiresIn });
};

module.exports = {
    generateToken
};
