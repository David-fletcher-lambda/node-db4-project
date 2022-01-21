/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
      .createTable('recipes', tbl =>{
         tbl.increments('recipe_id')
         tbl.string('recipe_name').notNullable().unique()
      })
      .createTable('steps', tbl =>{
         tbl.increments('step_id')
         tbl.integer('step_number')
         tbl.string('step_instructions')
         tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id').inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
      })
      .createTable('ingredients', tbl =>{
         tbl.increments('ingredient_id')
         tbl.string('ingredient_name')
         tbl.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id').inTable('steps')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
      })
      // .createTable('steps_ingredients', tbl =>{
      //    tbl.
      // })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down =  function(knex) {
  return knex.schema
  .dropTableIfExists('ingredients')
  .dropTableIfExists('steps')
  .dropTableIfExists('recipes')
};
