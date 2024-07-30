const port = 3387;
const jwt = require('jsonwebtoken');
const cors = require('cors');
const chalk = require('chalk');
const express = require('express');
const app = express();
const parser = require('body-parser');
require('./config/dbConn');
const Admin = require('./config/Admin');
const Student = require('./config/Student')
const Post = require('./config/Post')


app.use(cors());
app.use(parser.json());

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const isMatch = await admin.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign({ id: admin._id, email: admin.email }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({
            token,
            admin: {
                id: admin._id,
                name: admin.name,
                email: admin.email,
                created_at: admin.created_at
            },
            message: 'Login successful'
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});













app.listen(port ,(err)=>{
    if(err){
        console.log(chalk.inverse.red("something went wrong"));
    }
    else{
        console.log(chalk.inverse.green(`server is running on ${port}`))
    }
})
