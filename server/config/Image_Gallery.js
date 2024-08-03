const mongoose = require('mongoose');

const ImageGallerySchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

const Image = mongoose.model('Image', ImageGallerySchema);

module.exports = Image;