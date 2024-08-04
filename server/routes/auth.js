const express = require('express');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/auth');
const Student = require('../config/Student');
const Admin = require('../config/Admin');

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await Student.findOne({ email, password });

        if (!user) {
            user = await Admin.findOne({ email });
            if (!user) {
                return res.status(400).json({ error: 'Invalid credentials' });
            }

            const isMatch = await user.comparePassword(password);
            if (!isMatch) {
                return res.status(400).json({ error: 'Invalid credentials' });
            }
        }

        const role = user instanceof Admin ? 'admin' : 'student';
        const token = generateToken({ id: user._id, role });

        res.json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

//This function is used to create a admin and should be used while testing 


router.post('/add_admin', async(req,res) =>{
    const {name , email , password} = req.body;
    console.log(email);
    console.log(password);
    try{
        const admin = new Admin({name : name , email : email, password : password})
        await admin.save()
        res.status(201).json({'msg':"admin created "})
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router;
