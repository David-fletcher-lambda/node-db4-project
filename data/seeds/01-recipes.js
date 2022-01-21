/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'Spagetti Bolognese'},
        { recipe_name: 'meatballs marinara'},
        { recipe_name: 'macaroni and cheese'},
        { recipe_name: 'banana bread'},
      ]);
    });
};
