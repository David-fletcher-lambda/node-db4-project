/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { step_number: 1, recipe_id: 1, step_instructions: 'burn the pan to shit' },
        { step_number: 2, recipe_id: 2, step_instructions: 'preheat the oven' },
        { step_number: 3, recipe_id: 1, step_instructions: 'light your hair on fire' },
      ]);
    });
};
