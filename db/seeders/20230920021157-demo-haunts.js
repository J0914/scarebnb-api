'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Haunts', [
      {
        hostId: 1,
        title: 'Amazing cabin in the woods',
        description: "Adorable cedar loft cabin secluded in the woods ~2miles from Lake Texoma. The space This cozy cabin was built by the former owners son and her late husband. The rough cedar you will find around the inside of the house was cut on this property. The metal interior roof is reclaimed from an old barn not far from here. Guest access The pond by the barndominium is a shared space for any guests that wish to fish for fun! We have a catch and release policy. If you plan to spend the day on the lake, you can park your boat on the main lot by the red barndominium at night. Please let us know in advance. Other things to note If there is a burn ban notice, campfires are not permitted. If not, feel free to have a nice cozy fire in the fire pit.",
        street: '123 cedar st',
        city: 'Wasilla',
        state: 'Ak',
        zip_code: 99654,
        max_guests: 5,
        beds: 3,
        bedrooms: 3,
        bathrooms: 1
      },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Haunts', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
