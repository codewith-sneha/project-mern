const express = require('express');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/auth');
const Student = require('../config/Student');
const Admin = require('../config/Admin');

const router = express.Router();

router.post('/student_login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const student = await Student.findOne({ email : email ,password : password});
        if (!student) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        const token = generateToken({ id: student._id });

        res.json({ token });
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Server error' });
    }
});

router.post('/admin_login', async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    try {
        const admin = await Admin.findOne({ email :email });
        if (!admin) {
            return res.status(400).json({ error: 'Invalid credentials wrong email' });
        }
        const isMatch = await admin.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials wrong password' });
        }

        const token = generateToken({ id: admin._id });

        res.json({ token });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Server error' });
    }
});

//This function is used to create a admin and should be used while testing 


// router.post('/add_admin', async(req,res) =>{
//     try{
//         const admin = new Admin(req.body)
//         await admin.save()
//         res.status(201).json({'msg':"admin created "})
//     }
//     catch(err){
//         console.log(err)
//     }
// })

module.exports = router;
