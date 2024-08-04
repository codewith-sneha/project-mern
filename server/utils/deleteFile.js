const fs = require('fs');
const path = require('path');

const deleteFile = (filePath) => {
    if (filePath) {
        // Adjust the path to point to the 'uploads' folder in the project root directory
        const fullPath = path.join(__dirname, '../../uploads', path.basename(filePath));
        console.log(__dirname)
        console.log(fullPath)
        fs.unlink(fullPath, (err) => {
            if (err) {
                console.error('Error deleting file:', err);
            }
        });
    }
};

module.exports = deleteFile;