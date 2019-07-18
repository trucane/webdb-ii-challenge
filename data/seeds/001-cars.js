
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin: 'sd3651agy558895ssd5',
          make:'chevy',
          model:'impala',
          transmission:'automatic',
          title:'clean',
          mileage:50000
        },
        {
          vin: 'sd365svsf454fdsd5',
          make:'chrysler',
          model:'sebring',
          transmission:'automatic',
          title:'salvage',
          mileage:83000
        },
        {
          vin: 'lnlf53545fse35sdfsgh35',
          make:'mercedes',
          model:'sl500',
          transmission:'manual',
          mileage:22000
        }
      ]);
    });
};
