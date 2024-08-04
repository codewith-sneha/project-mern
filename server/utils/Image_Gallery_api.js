const express = require("express");
const Image = require('../config/Image_Gallery');
const app = express();
const upload = require('../multerConfig');

app.use('/uploads', express.static('uploads'));

//Add a new image 
app.post('/add_image', upload.single('image'),async(req,res)=>{
    try{
        const imagePath = req.file ? `uploads/${req.file.filename}` : null;
        const newImage = new Image({image : imagePath});
        console.log(imagePath)
        await newImage.save();
        res.status(201).json({
            id : newImage._id,
            message: 'Image added successfully'
        });
    } catch(err){
        console.log(err)
        res.status(400).json({message: err.message});
    }
});

//Delete an image by Id 
app.delete('/delete_image/:id' , async(req,res)=>{
    try{
        const image = await Image.findByIdAndDelete(req.params.id);
        if(!image) {
            return res.status(404).json({message: 'Image not found'});
    }
    else{
        res.status(200).json({
            id: req.params.id,
            message: 'Image deleted successfully'
        });
    }
    } catch(err){
        res.status(400).json({
            message: err.message
        })
    }
});

//Get a single image by Id 
app.get('/get_image/:id', async(req,res)=>{
    try{
        const image = await Image.findById(req.params.id);
        if(!image){
            return res.status(404).json({message: 'Image not found'});
        }
        else{
            res.status(200).json(image)
        }
    } catch(err){
        res.status(400).json({
            message: err.message
        });
    }
});

//Get all images
app.get('/get_all_images', async(req,res)=>{
    try{
        const images = await Image.find();
        res.status(200).json(images);
    } catch(err){
        res.status(400).json({message: err.message});
    }
});

module.exports = app;