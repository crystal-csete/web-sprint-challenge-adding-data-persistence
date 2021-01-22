exports.seed = function (knex) {

  return knex("projects")
    .truncate()
    .then(function () {

      return knex("projects").insert([
        {
          project_name: "sql tutorial",
          project_description: "learn sql",
          project_completed: "true",
          project_id: 1,
        },
        {
          project_name: "css tutorial",
          project_description: "learn css",
          project_completed: "true",
          project_id: 2,
        },
        {
          project_name: "javascript tutorial",
          project_description: "learn javascript easily",
          project_completed: "true",
          project_id: 3,
        },
      ]);
    });
};
