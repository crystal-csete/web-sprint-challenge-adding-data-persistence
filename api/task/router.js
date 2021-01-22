const express = require("express");

const Tasks = require("./model.js");

const router = express.Router();

// get all the Tasks from the database
router.get("/", (req, res, next) => {
  Tasks.getTasks()
    .then((task) => {
      res.status(201).json(task);
    })
    .catch(next);
});

// add a Task to the database
router.post("/", async (req, res, next) => {
  const taskData = await Tasks.createPosts(req.body)
    .then((ids) => {
      res.status(201).json(ids, taskData);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  const environment = process.env.NODE_ENV || "development";
  const message =
    environment === "development" ? err.message : "Something went wrong!";
  res.status(500).json(message);
  console.log(next);
});

module.exports = router;
