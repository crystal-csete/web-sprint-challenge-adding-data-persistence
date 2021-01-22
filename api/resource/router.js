// build your `/api/resources` router here
// build your `/api/projects` router here
const express = require("express");

const Resource = require("./model.js");
const db = require("../../data/dbConfig.js");

const router = express();

// get all Resources from the database
router.get("/", (req, res) => {
    Resource.getResources()
    .then((resource) => {
      res.json(resource);
    })
    .catch((error) => {
      res.status(500).json({ message: "Failed to get the resource!", error });
    });
});

// add a Resource to the database
router.post('/', (req, res) => {
 db('resources').insert(req.body)
 .then(ids => {
   const id = ids[0]

   db('resources')
   .where({ id })
   .first()
   .then(resource => {
     res.status(201).json(resource)
   })
 })
 .catch(error => {
   res.status(500).json({ message: 'Failed to add the Resource!', error })
 })
})


module.exports = router;