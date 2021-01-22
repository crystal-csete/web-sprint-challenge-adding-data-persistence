// build your `Task` model here
const db = require("../../data/dbConfig.js");

module.exports = {
  getTasks,
};

function getTasks() {
  return db('tasks as t')
  .leftJoin("projects as p", "p.id", "t.project_id")
  .select("t.id", "p.project_name", "p.project_description")
}



