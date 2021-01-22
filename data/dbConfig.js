const knex = require("knex");

const environment = process.env.NODE_ENV || "development";

const config = require("../knexfile.js");

const db = knex(config[environment]);

module.exports = db;
