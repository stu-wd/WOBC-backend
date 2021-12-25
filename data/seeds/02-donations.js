exports.seed = function(knex) {
  return knex('donations').del()
    .then(function () {
      return knex('donations').insert([
        {
          serial: 'TEST1',
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
          serial: 'TEST2',
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
        },
        {
          serial: 'TEST3',
          future: 'Scrap',
          condition: 'Poor',
          type: 'Hybrid',
          size: '24',
          brand: 'Schwinn',
          gender: 'F',
          kidadult: 'Adult',
          received: 'Becaffeinated',
          storage: 'Lookouts'
        },
        {
          serial: 'TEST4',
          future: 'Scrap',
          condition: 'Poor',
          type: 'Hybrid',
          size: '24',
          brand: 'Schwinn',
          gender: 'F',
          kidadult: 'Adult',
          received: 'Becaffeinated',
          storage: 'Lookouts'
        },
        {
          serial: 'TEST5',
          future: 'Scrap',
          condition: 'Poor',
          type: 'Hybrid',
          size: '24',
          brand: 'Schwinn',
          gender: 'F',
          kidadult: 'Adult',
          received: 'Becaffeinated',
          storage: 'Lookouts'
        },
        {
          serial: 'TEST6',
          future: 'Scrap',
          condition: 'Poor',
          type: 'Hybrid',
          size: '24',
          brand: 'Schwinn',
          gender: 'F',
          kidadult: 'Adult',
          received: 'Becaffeinated',
          storage: 'Lookouts'
        }
      ]);
    });
};
