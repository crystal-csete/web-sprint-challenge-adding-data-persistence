exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "sql tutorial",
          project_description: "learn sql",
          project_completed: "",
          project_id: 1,
        },
        {
          project_name: "css tutorial",
          project_description: "learn css",
          project_completed: "",
          project_id: 2,
        },
        {
          project_name: "javascript tutorial",
          project_description: "learn javascript easily",
          project_completed: "",
          project_id: 3,
        },
      ]);
    });
};
