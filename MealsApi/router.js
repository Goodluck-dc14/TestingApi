const express = require("express");
const router = express.Router();
const deliciousMeal = require("./model");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("avatar"), async (req, res) => {
  try {
    const getData = await deliciousMeal.create({
      name: req.body.name,
      description: req.body.description,
      order: req.body.order,
      image: req.file.path,
    });
    res.status(200).json({
      message: "created successfully",
      data: getData,
    });
  } catch (error) {
    res.status(400).json({
      message: "error",
      data: error,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const getData = await deliciousMeal.find();
    res.status(202).json({
      message: "found all successfully",
      data: getData,
    });
  } catch (error) {
    res.status(404).json({
      message: "error",
      data: error,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getData = await deliciousMeal.findById(req.params.id);
    res.status(202).json({
      message: "found each successfully",
      data: getData,
    });
  } catch (error) {
    res.status(404).json({
      message: "error",
      data: error,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const getData = await deliciousMeal.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json({
      message: "updated successfully",
      data: getData,
    });
  } catch (error) {
    res.status(400).json({
      message: "error",
      data: error,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const getData = await deliciousMeal.findByIdAndRemove(
      req.params.id,
      req.body
    );
    res.status(202).json({
      message: "deleted successfully",
      data: getData,
    });
  } catch (error) {
    res.status(404).json({
      message: "error",
      data: error,
    });
  }
});

module.exports = router;
