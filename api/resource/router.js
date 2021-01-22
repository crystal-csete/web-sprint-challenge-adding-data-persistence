
const express = require("express");

const Resource = require("./model.js");
const db = require("../../data/dbConfig.js");
const router = express();



// get all Resources from the database
router.get("/", (req, res, next) => {
    Resource.getResources()
    .then((resource) => {
      res.json(resource);
    })
    .catch(next);
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

router.use((err, req, res, next) => {
  const environment = process.env.NODE_ENV || 'development'
  const message = environment === 'development' ? err.message : 'Something went wrong!'
  res.status(500).json(message)
  console.log(next)
})


module.exports = router;