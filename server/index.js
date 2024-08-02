const port = 3387;
const cors = require('cors');
const chalk = require('chalk');
const express = require('express');
const app = express();
const parser = require('body-parser');
const path = require('path');
require('./config/dbConn');
const Post = require('./utils/Post_api')
const Student = require('./utils/Student_api');
const Notice = require('./utils/Notice_api');
const authRoutes = require('./routes/auth');
const review = require('./utils/reviews_api')

app.use(cors());
app.use(parser.json());

const uploadDir = path.join(__dirname, '../uploads');
app.use('/uploads', express.static(uploadDir));

app.use('/api/auth', authRoutes);
app.use('/api/',Post);

app.use('/api/',Student);
app.use('/api/',review);

app.use('/api/',Notice);

app.listen(port ,(err)=>{
    if(err){
        console.log(chalk.inverse.red("something went wrong"));
    }
    else{
        console.log(chalk.inverse.green(`server is running on ${port}`))
    }
})
