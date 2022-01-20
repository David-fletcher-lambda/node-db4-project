/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
      .createTable('recipes', tbl =>{
         tbl.increments('recipe_id')
         tbl.string('recipe_name')
      })
      .createTable('ingredients', tbl =>{
         tbl.increments('ingredient_id')
         tbl.string('ingredient_name')
         tbl.
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
