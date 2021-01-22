
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { resource_name: 'w3-schools', resource_description: 'online learning tool' },
        { resource_name: 'free code camp', resource_description: 'free online coding bootcamp' },
        { resource_name: 'mdn docs', resource_description: 'free online definitions of code' }
      ]);
    });
};


// { resource_name: 'w3-schools', resource_description: 'online learning tool' },
// { resource_name: 'free code camp', resource_description: 'free online coding bootcamp' },
// { resource_name: 'mdn docs', resource_description: 'free online definitions of code' }