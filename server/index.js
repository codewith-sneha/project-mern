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
const authMiddleware = require('./middleware/authMiddleware');
const Image = require('./utils/Image_Gallery_api');

app.use(cors());
app.use(parser.json());

const uploadDir = path.join(__dirname, '../uploads');
app.use('/uploads', express.static(uploadDir));

app.use('/api/auth', authRoutes);

app.use('/api/', authMiddleware, Post);
app.use('/api/', authMiddleware, Student);
app.use('/api/', authMiddleware, review);
app.use('/api/', authMiddleware, Notice);
app.use('/api/', authMiddleware, Image);

app.listen(port, (err) => {
    if (err) {
        console.log(chalk.inverse.red("Something went wrong"), err);
    } else {
        console.log(chalk.inverse.green(`Server is running on port ${port}`));
    }
});
