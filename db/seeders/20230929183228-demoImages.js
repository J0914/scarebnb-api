'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        "hauntId": 1,
        "userId": null,
        "url": 's3://scarebnbprojectimages/house1.jpg'
      },
      {
        "hauntId": 1,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior 11.jpg'
      },
      {
        "hauntId": 1,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior1.jpg'
      },
      {
        "hauntId": 1,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior14.jpg'
      },
      {
        "hauntId": 1,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior2.jpg'
      },
      {
        "hauntId": 2,
        "userId": null,
        "url": 's3://scarebnbprojectimages/house10.jpg'
      },
      {
        "hauntId": 2,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior9.jpg'
      },
      {
        "hauntId": 2,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior6.jpg'
      },
      {
        "hauntId": 2,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior4.jpg'
      },
      {
        "hauntId": 2,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior20.jpg'
      },
      {
        "hauntId": 3,
        "userId": null,
        "url": 's3://scarebnbprojectimages/house2.jpg'
      },
      {
        "hauntId": 3,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior12.jpg'
      },
      {
        "hauntId": 3,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior15.jpg'
      },
      {
        "hauntId": 3,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior13.jpg'
      },
      {
        "hauntId": 3,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior3.jpg'
      },
      {
        "hauntId": 3,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior5.jpg'
      },
      {
        "hauntId": 3,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior18.jpg'
      },
      {
        "hauntId": 4,
        "userId": null,
        "url": 's3://scarebnbprojectimages/house3.jpg'
      },
      {
        "hauntId": 4,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior7.jpg'
      },
      {
        "hauntId": 4,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior6.jpg'
      },
      {
        "hauntId": 4,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior16.jpg'
      },
      {
        "hauntId": 4,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior15.jpg'
      },
      {
        "hauntId": 4,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior3.jpg'
      },
      {
        "hauntId": 4,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior4.jpg'
      },
      {
        "hauntId": 5,
        "userId": null,
        "url": 's3://scarebnbprojectimages/house4.jpg'
      },
      {
        "hauntId": 5,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior18.jpg'
      },
      {
        "hauntId": 5,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior1.jpg'
      },
      {
        "hauntId": 5,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior11.jpg'
      },
      {
        "hauntId": 5,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior14.jpg'
      },
      {
        "hauntId": 6,
        "userId": null,
        "url": 's3://scarebnbprojectimages/house5.jpg'
      },
      {
        "hauntId": 6,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior9.jpg'
      },
      {
        "hauntId": 6,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior8.jpg'
      },
      {
        "hauntId": 6,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior6.jpg'
      },
      {
        "hauntId": 6,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior20.jpg'
      },
      {
        "hauntId": 7,
        "userId": null,
        "url": 's3://scarebnbprojectimages/house6.jpg'
      },
      {
        "hauntId": 7,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior19.jpg'
      },
      {
        "hauntId": 7,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior13.jpg'
      },
      {
        "hauntId": 7,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior16.jpg'
      },
      {
        "hauntId": 7,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior18.jpg'
      },
      {
        "hauntId": 8,
        "userId": null,
        "url": 's3://scarebnbprojectimages/house9.jpg'
      },
      {
        "hauntId": 8,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior12.jpg'
      },
      {
        "hauntId": 8,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior1.jpg'
      },
      {
        "hauntId": 8,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior2.jpg'
      },
      {
        "hauntId": 8,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior12.jpg'
      },
      {
        "hauntId": 8,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior8.jpg'
      },
      {
        "hauntId": 9,
        "userId": null,
        "url": 's3://scarebnbprojectimages/house7.jpg'
      },
      {
        "hauntId": 9,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior7.jpg'
      },
      {
        "hauntId": 9,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior5.jpg'
      },
      {
        "hauntId": 9,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior3.jpg'
      },
      {
        "hauntId": 9,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior2.jpg'
      },
      {
        "hauntId": 10,
        "userId": null,
        "url": 's3://scarebnbprojectimages/house8.jpg'
      },
      {
        "hauntId": 10,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior1.jpg'
      },
      {
        "hauntId": 10,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior11.jpg'
      },
      {
        "hauntId": 10,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior17.jpg'
      },
      {
        "hauntId": 10,
        "userId": null,
        "url": 's3://scarebnbprojectimages/interior15.jpg'
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Images', {
      hauntId: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
    }, {});
  }
};
