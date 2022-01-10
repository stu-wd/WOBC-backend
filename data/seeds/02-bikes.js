exports.seed = function(knex) {
  return knex('Bikes').del()
    .then(function () {
      return knex('Bikes').insert([
        {
          serial: 'TEST1',
          future: 'Repair',
          condition: 'Fair',
          type: 'Mountain',
          size: '24 in',
          brand: 'Raleigh',
          gender: 'Male',
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
          size: '24 in',
          brand: 'Schwinn',
          gender: 'Male',
          kidadult: 'Adult',
          received: 'Becaffeinated',
          storage: 'Lookouts',
          user_id: 2
        },
        {
          serial: 'TEST3',
          future: 'Donate',
          condition: 'Perfect',
          type: 'Road',
          size: '24 in',
          brand: 'Raleigh',
          gender: 'Male',
          kidadult: 'Adult',
          received: 'East Ridge',
          storage: 'Red Bank'
        },
        {
          serial: 'TEST4',
          future: 'Scrap',
          condition: 'Poor',
          type: 'Road',
          size: '24 in',
          brand: 'Specialized',
          gender: 'Male',
          kidadult: 'Adult',
          received: 'Pedego',
          storage: 'Dodds'
        },
        {
          serial: 'TEST5',
          future: 'Repair',
          condition: 'Fair',
          type: 'Mountain',
          size: '24 in',
          brand: 'Cannondale',
          gender: 'Male',
          kidadult: 'Adult',
          received: 'Hamilton Co. Recyclying',
          storage: 'Red Bank'
        }, 
        {
          serial: 'TEST6',
          future: 'Donate',
          condition: 'Perfect',
          type: 'Mountain',
          size: '24 in',
          brand: 'Schwinn',
          gender: 'Male',
          kidadult: 'Adult',
          received: 'Becaffeinated',
          storage: 'Lookouts'
        }
      ]);
    });
};
