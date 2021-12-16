exports.seed = function(knex) {
  return knex('donations').del()
    .then(function () {
      return knex('donations').insert([
        {
          serial: 'ABC123',
          future: 'Repair',
          condition: 'Fair',
          type: 'Mountain',
          size: '26',
          brand: 'Raleigh',
          gender: 'M',
          kidadult: 'Adult',
          received: 'East Ridge',
          storage: 'Dodds',
          user_id: 2
        },
        {
          serial: 'XYZ789',
          future: 'Scrap',
          condition: 'Poor',
          type: 'Hybrid',
          size: '24',
          brand: 'Schwinn',
          gender: 'F',
          kidadult: 'Adult',
          received: 'Becaffeinated',
          storage: 'Lookouts',
          user_id: 2
        }
      ]);
    });
};
