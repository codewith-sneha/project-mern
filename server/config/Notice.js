const mongoose = require('mongoose');

const NoticeSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    attachment:{
        type: String},
    date: {
        type: Date,
        default: Date.now
    }
});

const Notice = mongoose.model('Notice', NoticeSchema);

module.exports = Notice;