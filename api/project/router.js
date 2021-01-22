const express = require("express");

const Project = require("./model.js");
const db = require("../../data/dbConfig.js");

const router = express();

// get all Project from the database
router.get("/", (req, res, next) => {
  Project.getProjects()
    .then((project) => {
      res.json(project);
    })
    .catch(next);
});

// post a Project to the database
router.post("/", (req, res, next) => {
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
