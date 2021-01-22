// build your `/api/projects` router here
const express = require("express");

const Project = require("./model.js");
const db = require("../../data/dbConfig.js");

const router = express();

// get all Project from the database
router.get("/", (req, res) => {
  Project.getProjects()
    .then((project) => {
      res.json(project);
    })
    .catch((error) => {
      res.status(500).json({ message: "Failed to get the Projects!", error });
    });
});

// post a Project to the database
router.post("/", (req, res) => {
  db("projects")
    .insert(req.body)
    .then((ids) => {
      const id = ids[0];

      db("projects")
        .where({ id })
        .first()
        .then((project) => {
          res.status(201).json(project);
        });
    })
    .catch((error) => {
      res.status(500).json({ message: "Failed to add the Project!", error });
    });
});

module.exports = router;
