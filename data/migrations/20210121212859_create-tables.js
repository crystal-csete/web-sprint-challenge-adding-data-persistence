
exports.up = function(knex) {
  return knex.schema
  .createTable('resources', tbl => {
      tbl.increments()
      tbl.string('resource_name', 128).notNullable().unique()
      tbl.string('resource_description', 128)
  })
  .createTable('projects', tbl => {
      tbl.increments()
      tbl.string('project_name', 128).notNullable()
      tbl.string('project_description', 128)
      tbl.boolean('project_completed').default(false)
      tbl.integer('project_id').unsigned()
  })
  .createTable('tasks', tbl => {
      tbl.increments()
      tbl.string('task_description', 128).notNullable()
      tbl.string('task_notes', 128)
      tbl.boolean('task_completed').default(false)
      tbl.integer('project_id').unsigned()
  })
  .createTable('project_resources', tbl => {
    tbl.increments()
    tbl.integer('project_id').unsigned()
    tbl.string('resource_name', 128).notNullable().unique()
  })

}
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('projects')
  .dropTableIfExists('resources')
}
