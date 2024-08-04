const port = 3387;
const cors = require('cors');
const chalk = require('chalk');
const express = require('express');
const app = express();
const parser = require('body-parser');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
require('./config/dbConn');
const Post = require('./utils/Post_api');
const Student = require('./utils/Student_api');
const Notice = require('./utils/Notice_api');
const authRoutes = require('./routes/auth');
const review = require('./utils/reviews_api');
const Image = require('./utils/Image_Gallery_api');
const authMiddleware = require('./middleware/authMiddleware');
const isAdmin = require('./middleware/isAdmin');

app.use(cors());
app.use(parser.json());

const uploadDir = path.join(__dirname, '../uploads');
app.use('/uploads', express.static(uploadDir));

app.use('/api/auth', authRoutes);

app.use('/api/', Post);
app.use('/api/', Student);
app.use('/api/', review);
app.use('/api/', Notice);
app.use('/api/', Image);

app.listen(port, (err) => {
    if (err) {
        console.log(chalk.inverse.red("Something went wrong"), err);
    } else {
        console.log(chalk.inverse.green(`Server is running on port ${port}`));
    }
});
