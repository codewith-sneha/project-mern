const fs = require('fs');
const path = require('path');

const deleteFile = (filePath) => {
    if (filePath) {
        const fullPath = path.join(__dirname, '../../uploads', path.basename(filePath));
        fs.unlink(fullPath, (err) => {
            if (err) {
                console.error('Error deleting file:', err);
            }
        });
    }
};

module.exports = deleteFile;