
exports.seed = function(knex) {

  return knex('resources').truncate()
    .then(function () {

      return knex('resources').insert([
        { resource_name: 'w3-schools', resource_description: 'online learning tool' },
        { resource_name: 'free code camp', resource_description: 'free online coding bootcamp' },
        { resource_name: 'mdn docs', resource_description: 'free online definitions of code' }
      ]);
    });
};
