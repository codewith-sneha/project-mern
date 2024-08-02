const express = require('express');
const Student = require('../config/Student');
const app = express();
const upload = require('./multerConfig'); 

app.post('/add_student', upload.single('profile_image'), async (request, response) => {
    try {
        const {email, password, name, class: studentClass, dob, progress } = request.body;
        const profile_image = request.file ? `../uploads/${request.file.filename}` : null;
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
        console.error('Error creating student:', error);
        response.status(500).json({
            message: 'Error creating student',
            error
        });
    }
});

app.get('/get_student/:id', async (request, response) => {
    try {
        console.log("the api is called");
        const {student_id} = request.params.id;
        const student = await Student.findOne({student_id});
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


app.put('/update_student/:id',async(request,response) =>{
    try{
        let student = await Student.updateOne(
            {_id : request.params.id},
            {$set : request.body}
        );
        response.send(student);
    }catch (error) {
        console.error('Error updating student:', error);
        response.status(500).json({
            message: 'Error updating student',
            error
        });
    }
    
})

app.delete('/delete_student/:id', async (request, response) => {
    try {
        const studentId = request.params.id;
        const deletedStudent = await Student.findByIdAndDelete(studentId);
        if (!deletedStudent) return response.status(404).json({ message: 'Student not found' });
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