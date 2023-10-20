'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [
      {
        "hauntId": 1,
        "userId": 2,
        "check_in": new Date("2023-09-18"),
        "check_out": new Date("2023-09-25"),
        "num_guests": 3,
      },
      {
        "hauntId": 3,
        "userId": 2,
        "check_in": new Date("2023-10-18"),
        "check_out": new Date("2023-10-25"),
        "num_guests": 2,
      },
      {
        "hauntId": 4,
        "userId": 2,
        "check_in": new Date("2024-12-18"),
        "check_out": new Date("2024-12-25"),
        "num_guests": 5,
      },
      {
        "hauntId": 2,
        "userId": 1,
        "check_in": new Date("2023-05-18"),
        "check_out": new Date("2023-05-25"),
        "num_guests": 8,
      },
      {
        "hauntId": 3,
        "userId": 1,
        "check_in": new Date("2023-06-18"),
        "check_out": new Date("2023-06-25"),
        "num_guests": 2,
      },
      {
        "hauntId": 5,
        "userId": 1,
        "check_in": new Date("2024-07-18"),
        "check_out": new Date("2024-07-25"),
        "num_guests": 3,
      },
      {
        "hauntId": 6,
        "userId": 1,
        "check_in": new Date("2024-08-18"),
        "check_out": new Date("2024-08-25"),
        "num_guests": 6,
      },
      {
        "hauntId": 1,
        "userId": 3,
        "check_in": new Date("2023-04-18"),
        "check_out": new Date("2023-04-25"),
        "num_guests": 5,
      },
      {
        "hauntId": 2,
        "userId": 3,
        "check_in": new Date("2023-01-18"),
        "check_out": new Date("2023-01-25"),
        "num_guests": 7,
      },
      {
        "hauntId": 4,
        "userId": 3,
        "check_in": new Date("2024-02-18"),
        "check_out": new Date("2024-02-25"),
        "num_guests": 3,
      },
      {
        "hauntId": 1,
        "userId": 6,
        "check_in": new Date("2023-09-18"),
        "check_out": new Date("2023-09-25"),
        "num_guests": 3,
      },
      {
        "hauntId": 3,
        "userId": 5,
        "check_in": new Date("2023-10-18"),
        "check_out": new Date("2023-10-25"),
        "num_guests": 2,
      },
      {
        "hauntId": 4,
        "userId": 4,
        "check_in": new Date("2023-12-18"),
        "check_out": new Date("2023-12-25"),
        "num_guests": 5,
      },
      {
        "hauntId": 2,
        "userId": 6,
        "check_in": new Date("2023-05-18"),
        "check_out": new Date("2023-05-25"),
        "num_guests": 8,
      },
      {
        "hauntId": 3,
        "userId": 5,
        "check_in": new Date("2023-06-18"),
        "check_out": new Date("2023-06-25"),
        "num_guests": 2,
      },
      {
        "hauntId": 5,
        "userId": 4,
        "check_in": new Date("2023-07-18"),
        "check_out": new Date("2023-07-25"),
        "num_guests": 3,
      },
      {
        "hauntId": 6,
        "userId": 5,
        "check_in": new Date("2023-08-18"),
        "check_out": new Date("2023-08-25"),
        "num_guests": 6,
      },
      {
        "hauntId": 1,
        "userId": 6,
        "check_in": new Date("2023-04-18"),
        "check_out": new Date("2023-04-25"),
        "num_guests": 5,
      },
      {
        "hauntId": 2,
        "userId": 4,
        "check_in": new Date("2023-01-18"),
        "check_out": new Date("2023-01-25"),
        "num_guests": 7,
      },
      {
        "hauntId": 4,
        "userId": 6,
        "check_in": new Date("2023-02-18"),
        "check_out": new Date("2023-02-25"),
        "num_guests": 3,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Bookings', {
      userId: { [Op.in]: [1, 2, 3] }
    }, {});
  }
};
