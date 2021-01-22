exports.seed = function (knex) {
  return knex("project_resources")
    .truncate()
    .then(function () {
      return knex("project_resources").insert([
        { project_id: 1, resource_name: "w3-schools" },
        { project_id: 2, resource_name: "free code camp" },
        { project_id: 3, resource_name: "mdn docs" },
      ]);
    });
};
