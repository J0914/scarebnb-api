'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        "hauntId": 1,
        "userId": 2,
        "body": '1 Wow this place was so scaryyyyy. 10/10! Bring extra underpants!'
      },
      {
        "hauntId": 1,
        "userId": 3,
        "body": '1 I wasn\'t even scared, Nothing scares me. I\'m the scariest thing around'
      },
      {
        "hauntId": 2,
        "userId": 1,
        "body": '2 Wow this place was so scaryyyyy. 10/10! Bring extra underpants!'
      },
      {
        "hauntId": 2,
        "userId": 3,
        "body": '2 I wasn\'t even scared, Nothing scares me. I\'m the scariest thing around'
      },
      {
        "hauntId": 3,
        "userId": 1,
        "body": '3 Wow this place was so scaryyyyy. 10/10! Bring extra underpants!'
      },
      {
        "hauntId": 3,
        "userId": 2,
        "body": '3 I wasn\'t even scared, Nothing scares me. I\'m the scariest thing around'
      },
      {
        "hauntId": 4,
        "userId": 2,
        "body": '4 Wow this place was so scaryyyyy. 10/10! Bring extra underpants!'
      },
      {
        "hauntId": 4,
        "userId": 3,
        "body": '4 I wasn\'t even scared, Nothing scares me. I\'m the scariest thing around'
      },
      {
        "hauntId": 5,
        "userId": 1,
        "body": '5 Wow this place was so scaryyyyy. 10/10! Bring extra underpants!'
      },
      {
        "hauntId": 5,
        "userId": 3,
        "body": '5 I wasn\'t even scared, Nothing scares me. I\'m the scariest thing around'
      },
      {
        "hauntId": 6,
        "userId": 1,
        "body": '6 Wow this place was so scaryyyyy. 10/10! Bring extra underpants!'
      },
      {
        "hauntId": 6,
        "userId": 2,
        "body": '6 I wasn\'t even scared, Nothing scares me. I\'m the scariest thing around'
      },
      {
        "hauntId": 7,
        "userId": 2,
        "body": '7 Wow this place was so scaryyyyy. 10/10! Bring extra underpants!'
      },
      {
        "hauntId": 7,
        "userId": 3,
        "body": '7 I wasn\'t even scared, Nothing scares me. I\'m the scariest thing around'
      },
      {
        "hauntId": 8,
        "userId": 1,
        "body": '8 Wow this place was so scaryyyyy. 10/10! Bring extra underpants!'
      },
      {
        "hauntId": 8,
        "userId": 3,
        "body": '8 I wasn\'t even scared, Nothing scares me. I\'m the scariest thing around'
      },
      {
        "hauntId": 9,
        "userId": 1,
        "body": '9 Wow this place was so scaryyyyy. 10/10! Bring extra underpants!'
      },
      {
        "hauntId": 9,
        "userId": 2,
        "body": '9 I wasn\'t even scared, Nothing scares me. I\'m the scariest thing around'
      },
      {
        "hauntId": 10,
        "userId": 2,
        "body": '10 Wow this place was so scaryyyyy. 10/10! Bring extra underpants!'
      },
      {
        "hauntId": 10,
        "userId": 3,
        "body": '10 I wasn\'t even scared, Nothing scares me. I\'m the scariest thing around'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Reviews', {
      userId: { [Op.in]: [1, 2, 3] }
    }, {});
  }
};
