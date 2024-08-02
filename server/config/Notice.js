const mongoose = require('mongoose');

const NoticeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    attatchments: [{
        type: String
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

const Notice = mongoose.model('Notice', NoticeSchema);

module.exports = Notice;