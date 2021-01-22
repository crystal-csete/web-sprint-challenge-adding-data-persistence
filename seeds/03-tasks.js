exports.seed = function (knex) {

  return knex("tasks")
    .truncate()
    .then(function () {

      return knex("tasks").insert([
        {
          task_description: "complete sql tutorial",
          task_notes: "use select * to select everything",
          task_completed: "",
          project_id: 1,
        },
        {
          task_description: "complete css tutorial",
          task_notes: "only use one h1 tag per document",
          task_completed: "",
          project_id: 2
        },
        {
          task_description: "look through the mdn docs for more info on js",
          task_notes: "use dot notation to axcess array elements in js",
          task_completed: "",
          project_id: 3
        },
      ]);
    });
};
