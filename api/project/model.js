// build your `Project` model here
const db = require("../../data/dbConfig.js");

module.exports = {
  getProjects,
};

function getProjects() {
  return db.select("*").from("projects");
}
