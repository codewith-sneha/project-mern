const express = require("express");
const Notice = require('../config/Notice');
const app = express();
const upload = require("../multerConfig");
const deleteFile = require("./deleteFile");

app.use('/uploads', express.static('/uploads'));


//create a new notice
app.post("/add_notice", upload.single("attachment"), async (req, res) => {
  try {
    const filepaths = req.file ? `uploads/${req.file.filename}` : null;

    let notice = new Notice({
      description: req.body.description,
      attachment: filepaths,
      date: req.body.date,
    });

    notice = await notice.save();
    res.status(201).json({
      message: "Notice Created Successfully",
      notice: new Notice(),
    });
  } catch (err) {
    console.error("Error creating notice:", err);
    res.status(500).json({
      message: "Error Creating Notice",
      err,
    });
  }
});

//update a notice by Id
app.put("/update_notice/:id",upload.single("attachment"), async (req, res) => {
    try {
      const filepath = req.file ? `uploads/${req.file.filename}` : null;
      const notice1 = await Notice.findById(req.params.id);
      try{
        const notice1 = await Notice.findById(req.params.id);
        prevPath = notice1.attachment;
        if(prevPath){
          deleteFile(prevPath);
        }
      }
      catch(err){
        res.status(400).json({
          message: "Error updating Notice",
          err,
        });
      }
      const notice = await Notice.findByIdAndUpdate(
        req.params.id,
        {
          description: req.body.description,
          attachment: filepath,
          date: req.body.date,
        },
        { new: true }
      );

      if (!notice) {
        return res.status(404).json({
          message: "The notice with the given ID was not found.",
        });
      } else {
        res.status(200).json();
      }
    } catch (err) {
      res.status(400).json({
        message: "Error updating Notice",
        err,
      });
    }
  }
);

//Deleting a notice by Id
app.delete("/delete_notice/:id", async (req, res) => {
  try {
    const noticeId = req.params.id;
    const notice = await Notice.findById({_id: noticeId});
    if (!notice) {
      return req.status(404).json({
        message: "The notice with the given id was not found",
      });
    }
    const noticePath = notice.attachment;
    await Notice.findByIdAndDelete(noticeId); 

    if(noticePath){
      deleteFile(noticePath);
    }

    res.status(204).send();
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

//Get all notices
app.get("/get_all_notice", async (req, res) => {
  try {
    const notice = await Notice.find();
    if (!notice) {
      return res.status(404).json({ message: "Notices not found" });
    } else {
      res.status(200).json(notice);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Get a single notice by Id
app.get("/get_notice/:id", async (req, res) => {
  try {
    const notice = await Notice.findOne({ _id: req.params.id });
    if (!notice) {
      return res.status(404).json({ message: "Notices not found" });
    } else {
      res.status(200).json(notice);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = app;