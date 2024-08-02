const express = require('express');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/auth');
const Student = require('../config/Student');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const student = await Student.findOne({ email });
        if (!student) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = generateToken({ id: student._id });

        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'You have accessed a protected route', user: req.student });
});

module.exports = router;
