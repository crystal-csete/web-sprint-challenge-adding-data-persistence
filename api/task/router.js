// build your `/api/tasks` router here
const express = require("express");

const Tasks = require("./model.js");
const db = require("../../data/dbConfig.js");

const router = express.Router();

// get all the Tasks from the database
router.get("/", (req, res) => {
    Tasks.getTasks()
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((error) => {
      res.status(500).json({ message: "Failed to get tasks", error });
    });
});

// add a Task to the database
router.post("/", (req, res) => {
  const taskData = req.body;

  db("tasks as t")
    .leftJoin("projects as p", "p.id", "t.project_id")
    .select("t.*", "p.project_id")
    .insert(taskData, "t.id", "p.id", "p.project_id")
    .then((ids) => {
      res.status(201).json(ids);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new task", err });
    });
});


module.exports = router;
