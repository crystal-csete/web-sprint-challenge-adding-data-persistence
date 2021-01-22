const db = require("../../data/dbConfig.js");

module.exports = {
  getTasks,
  createPosts,
};


// function getTasks() {
//   return db
//     .select("tasks as t")
//     .leftJoin("projects as p", "p.id", "t.project_id")

//     // .select("t.id", "p.project_name", "p.project_description");
// }

function getTasks() {
  return db("tasks as t")
    .leftJoin("projects as p", "p.id", "t.project_id")
    .select("t.id", "p.project_name", "p.project_description");
}

function createPosts() {
  return db("tasks as t")
    .leftJoin("projects as p", "p.id", "t.project_id")
    .select("t.*", "p.project_id")
    .insert("t.id", "p.id", "p.project_id");
}
