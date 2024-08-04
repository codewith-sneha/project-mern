const express = require('express');
const Review = require('../config/Reviews');
const app = express();
const upload = require('../multerConfig');
const  deleteFile  = require('./deleteFile');

app.post("/add_review", upload.single('image'), async (req, res) => {
    const { title, description} = req.body;
    const image = req.file ? `uploads/${req.file.filename}` : null;
    try {
        console.log(image);
        const newReview = new Review({ title,image,description});
        await newReview.save();
        res.status(201).json();
    } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });
    
  //Get all reviews
  app.get("/get_all_reviews", async (req, res) => {
    try {
      const reviews = await Review.find();
      if (!reviews) {
        return res.status(404).json({ message: "Reviews not found" });
      } else {
        res.status(200).json(
          reviews
        );
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  //Get a single review by id
  app.get("/get_review/:id", async (req, res) => {
    try {
      const review = await Review.findOne({ _id: req.params.id });
      if (!review) {
        return res.status(404).json({ message: "Review not found" });
      } else {
        res.status(200).json(review);
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }

  });
  //updating a review by Id

  app.put("/update_review/:id", upload.single('image'), async (req, res) => {
    const { title, description } = req.body;
    const newImage = req.file ? `uploads/${req.file.filename}` : null;

    try {
        const existingReview = await Review.findById(req.params.id);
        if (!existingReview) {
            return res.status(404).json({ message: "Review not found" });
        }
        const updateData = {
            title,
            description,
            ...(newImage && { image: newImage })
        };

        const review = await Review.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (newImage && existingReview.image) {
            deleteFile(existingReview.image);
        }

        res.status(200).json({
            message: 'Review updated successfully',
            review
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

  
  //Deleting a review by Id
  
  app.delete("/delete_review/:id", async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }

        await Review.deleteOne({ _id: req.params.id });

        if (review.image) {
            deleteFile(review.image);
        }

        res.status(200).json({ message: "Review deleted successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

  
  module.exports = app;