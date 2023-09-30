'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        "hauntId": 1,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/house1.jpg'
      },
      {
        "hauntId": 1,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior+11.jpg'
      },
      {
        "hauntId": 1,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior1.jpg'
      },
      {
        "hauntId": 1,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior10.jpg'
      },
      {
        "hauntId": 1,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior11.jpg'
      },
      {
        "hauntId": 2,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/house10.jpg'
      },
      {
        "hauntId": 2,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior12.jpg'
      },
      {
        "hauntId": 2,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior13.jpg'
      },
      {
        "hauntId": 2,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior14.jpg'
      },
      {
        "hauntId": 2,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior15.jpg'
      },
      {
        "hauntId": 3,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/house2.jpg'
      },
      {
        "hauntId": 3,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior16.jpg'
      },
      {
        "hauntId": 3,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior17.jpg'
      },
      {
        "hauntId": 3,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior18.jpg'
      },
      {
        "hauntId": 3,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior19.jpg'
      },
      {
        "hauntId": 3,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior2.jpg'
      },
      {
        "hauntId": 3,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior20.jpg'
      },
      {
        "hauntId": 4,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/house3.jpg'
      },
      {
        "hauntId": 4,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior3.jpg'
      },
      {
        "hauntId": 4,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior4.jpeg'
      },
      {
        "hauntId": 4,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior4.jpg'
      },
      {
        "hauntId": 4,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior5.jpg'
      },
      {
        "hauntId": 4,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior6.jpg'
      },
      {
        "hauntId": 4,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior7.jpg'
      },
      {
        "hauntId": 5,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/house4.jpg'
      },
      {
        "hauntId": 5,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior9.jpg'
      },
      {
        "hauntId": 5,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior8.jpg'
      },
      {
        "hauntId": 5,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior6.jpg'
      },
      {
        "hauntId": 5,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior4.jpg'
      },
      {
        "hauntId": 6,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/house5.jpg'
      },
      {
        "hauntId": 6,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior3.jpg'
      },
      {
        "hauntId": 6,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior2.jpg'
      },
      {
        "hauntId": 6,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior14.jpg'
      },
      {
        "hauntId": 6,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior16.jpg'
      },
      {
        "hauntId": 7,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/house6.jpg'
      },
      {
        "hauntId": 7,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior14.jpg'
      },
      {
        "hauntId": 7,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior12.jpg'
      },
      {
        "hauntId": 7,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior10.jpg'
      },
      {
        "hauntId": 7,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior+11.jpg'
      },
      {
        "hauntId": 8,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/house9.jpg'
      },
      {
        "hauntId": 8,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior+11.jpg'
      },
      {
        "hauntId": 8,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior10.jpg'
      },
      {
        "hauntId": 8,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior12.jpg'
      },
      {
        "hauntId": 8,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior14.jpg'
      },
      {
        "hauntId": 8,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior16.jpg'
      },
      {
        "hauntId": 9,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/house7.jpg'
      },
      {
        "hauntId": 9,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior18.jpg'
      },
      {
        "hauntId": 9,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior2.jpg'
      },
      {
        "hauntId": 9,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior3.jpg'
      },
      {
        "hauntId": 9,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior4.jpg'
      },
      {
        "hauntId": 10,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/house8.jpg'
      },
      {
        "hauntId": 10,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior8.jpg'
      },
      {
        "hauntId": 10,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior6.jpg'
      },
      {
        "hauntId": 10,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior9.jpg'
      },
      {
        "hauntId": 10,
        "userId": null,
        "url": 'https://scarebnbprojectimages.s3.us-west-2.amazonaws.com/interior7.jpg'
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
