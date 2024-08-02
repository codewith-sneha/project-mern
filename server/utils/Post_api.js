const express = require('express');
const Post = require('../config/Post');
const app = express();
const upload = require('./multerConfig');

//creating a new post
  app.post("/add_post", upload.single('image'), async (req, res) => {
      const { title, description} = req.body;
      const image = req.file ? `uploads/${req.file.filename}` : null;
      try {
          console.log(image);
        const newPost = new Post({ title,image,description});
        await newPost.save();
  
        res.status(201).json();
      
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });
    
  //Get all posts
  app.get("/get_all_post", async (req, res) => {
    try {
      const post = await Post.find();
      if (!post) {
        return res.status(404).json({ message: "Posts not found" });
      } else {
        res.status(200).json(
          post
        );
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  //Get a single post by Id
  app.get("/get_post/:id", async (req, res) => {
    try {
      const post = await Post.findOne({ _id: req.params.id });
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      } else {
        res.status(200).json(post);
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  //updating a post by Id
  app.put("/update_post/:id" , upload.single('image'), async (req, res) => {
    const { title, description} = req.body;
    const image =  req.file ? `../uploads/${req.file.filename}` : null;
    try {
      const post = await Post.updateOne(
        { _id: req.params.id },
        { $set: {
            "title" : title,
            "description" : description,
            "image" : image
        }}
      );
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      } else {
        res.status(200).json();
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  //Deleting a post by Id
  app.delete("/delete_post/:id", async (req, res) => {
    try {
      const post = await Post.deleteOne({_id : req.params.id});
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      } else {
        res.status(200).json({ message: "Post Deleted" });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  module.exports = app;