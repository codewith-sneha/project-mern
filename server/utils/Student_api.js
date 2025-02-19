const express = require('express');
const Student = require('../config/Student');
const app = express();
const upload = require('../multerConfig'); 
const  deleteFile  = require('./deleteFile');

app.post('/add_student', upload.single('profile_image'), async (request, response) => {
    try {
        const {email, password, name, class: studentClass, dob, progress } = request.body;
        const profile_image =request.file ? `uploads/${request.file.filename}` : null;
        const newStudent = new Student({
            email,
            password,
            name,
            class: studentClass,
            dob,
            profile_image,
            progress
        });
        await newStudent.save();
        response.status(201).json({
            message: 'Student created successfully',
            student: newStudent
        });
    } catch (error) {
        response.status(500).json({
            message: 'Error creating student',
            error
        });
    }
});

app.get('/get_student/:id', async (request, response) => {
    try {
        const student_id = request.params.id;
        const student = await Student.findOne({_id : student_id});
        if(!student){
            response.status(404).json({
                message : 'user does not exist'
            })
        }
        else{
            response.status(200).json(student);
        }

    } catch (error) {
        console.error('Error fetching student:', error);
        response.status(500).json({
            message: 'Error fetching student',
            error
        });
    }
});
app.put('/update_student/:id', upload.single('profile_image'), async (req, res) => {
    try {
        const studentId = req.params.id;
        const updateData = req.body;

        const existingStudent = await Student.findById(studentId);
        if (!existingStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }

        if (req.file) {
            if (existingStudent.profile_image) {
                deleteFile(existingStudent.profile_image);
            }
            updateData.profile_image = `uploads/${req.file.filename}`;
        }

        const updatedStudent = await Student.findByIdAndUpdate(studentId, updateData, { new: true });
        res.status(200).json({
            message: 'Student updated successfully',
            student: updatedStudent
        });
    } catch (error) {
        console.error('Error updating student:', error);
        res.status(500).json({
            message: 'Error updating student',
            error
        });
    }
});
app.delete('/delete_student/:id', async (request, response) => {
    try {
        const studentId = request.params.id;
        const student = await Student.findById(studentId);
        if (!student) return response.status(404).json({ message: 'Student not found' });

        const profileImagePath = student.profile_image;

        await Student.findByIdAndDelete(studentId);

        if (profileImagePath) {
            deleteFile(profileImagePath);
        }

        response.status(204).send();
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
});

app.get('/get_all_students',async(request,response) =>{
    try {
        const students = await Student.find();
        response.status(200).json(students);
    } catch (error) {
        console.error('Error retrieving students:', error);
        response.status(500).json({
            message: 'Error retrieving students',
            error: error.message
        });
    }
})

module.exports = app;