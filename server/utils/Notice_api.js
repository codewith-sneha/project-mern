const express = require("express");
const Notice = require('../config/Notice');
const app = express();
const upload = require("../multerConfig");

app.use('/uploads', express.static('/uploads'));


//create a new notice
app.post("/add_notice", upload.array("attatchments", 10), async (req, res) => {
  try {
    const filepaths = req.files.map((file) => file.path);

    let notice = new Notice({
      description: req.body.description,
      attatchments: filepaths,
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
app.put("/update_notice/:id",upload.array("attachments", 10), async (req, res) => {
    try {
      const filepaths = req.files.map((file) => file.path);

      const notice = await Notice.findByIdAndUpdate(
        req.params.id,
        {
          description: req.body.description,
          attatchments: filepaths,
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
    const notice = await Notice.findByIdAndDelete(req.params.id);
    if (!notice) {
      return req.status(404).json({
        message: "The notice with the given id was not found",
      });
    } else {
      res.status(200).json({ message: "Post Deleted" });
    }
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