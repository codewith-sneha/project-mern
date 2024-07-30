const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/ClientDb';

mongoose.connect(url)
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });

module.exports = mongoose;
