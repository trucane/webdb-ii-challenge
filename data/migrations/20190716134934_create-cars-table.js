
exports.up = function(knex) {
    //return the schema table
    return knex.schema.createTable('cars', tbl =>{
        //create primekey, id, auto-increment
        tbl.increments();
        // make vin, make, model, mileage columns
        tbl.string('vin', 128)
        .unique()
        .notNullable;

        tbl.string('make').notNullable;
        tbl.string('model').notNullable;
        tbl.string('transmission');
        tbl.string('title');
        tbl.decimal('mileage').notNullable;
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableExists('cars')
};
