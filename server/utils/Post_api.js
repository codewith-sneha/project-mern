const express = require('express');
const Post = require('../config/Post');
const app = express();
const upload = require('../multerConfig');
const deleteFile = require('./deleteFile');

//creating a new post
  app.post("/add_post", upload.single('image'), async (req, res) => {
      const { title, description} = req.body;
      const image = req.file ? `uploads/${req.file.filename}` : null;
      try {
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
    const updateData = req.body;
    const postId = req.params.id;
    const image = req.file ? `uploads/${req.file.filename}` : null;
    try {
      const existingPost = await Post.findById(postId);
      if (!existingPost) {
        return res.status(404).json({ message: "Post not found" });
      } 
      if(req.file){
        if(existingPost.image){
          deleteFile(existingPost.image);
        }
        updateData.image = `uploads/${req.file.filename}`;
      }
      const updatedPost = await Post.findByIdAndUpdate(postId, updateData, {new: true});
      res.status(200).json({
        message: 'Post Updated Soccessfully',
        post: updatedPost
      });
    } catch (err) {
      res.status(500).json({ message: 'Error Updating Post' , err });
    }
  });
  
  //Deleting a post by Id
  app.delete("/delete_post/:id", async (req, res) => {
    try {
      const postId = req.params.id;
      const post = await Post.findById({_id: postId});
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      } 
      const imagePath = post.image;
      await Post.findByIdAndDelete(postId);

      if(imagePath){
        deleteFile(imagePath);
      }

      res.status(204).send();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  module.exports = app;