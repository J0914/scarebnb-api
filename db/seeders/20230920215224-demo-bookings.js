'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [
      {
        "hauntId": 1,
        "userId": 2,
        "check_in": new Date("2024-09-18 03:30:00"),
        "check_out": new Date("2024-09-25 03:30:00"),
        "num_guests": 3,
        "message": "I'm so excited to stay, please update me on any information I need before arriving."
      },
      {
        "hauntId": 3,
        "userId": 2,
        "check_in": new Date("2024-10-18 03:30:00"),
        "check_out": new Date("2024-10-25 03:30:00"),
        "num_guests": 2,
        "message": "I'm so excited to stay, please update me on any information I need before arriving."
      },
      {
        "hauntId": 4,
        "userId": 2,
        "check_in": new Date("2024-12-18 03:30:00"),
        "check_out": new Date("2024-12-25 03:30:00"),
        "num_guests": 5,
        "message": "I'm so excited to stay, please update me on any information I need before arriving."
      },
      {
        "hauntId": 2,
        "userId": 1,
        "check_in": new Date("2025-05-18 03:30:00"),
        "check_out": new Date("2025-05-25 03:30:00"),
        "num_guests": 8,
        "message": "I'm so excited to stay, please update me on any information I need before arriving."
      },
      {
        "hauntId": 3,
        "userId": 1,
        "check_in": new Date("2025-06-18 03:30:00"),
        "check_out": new Date("2025-06-25 03:30:00"),
        "num_guests": 2,
        "message": "I'm so excited to stay, please update me on any information I need before arriving."
      },
      {
        "hauntId": 5,
        "userId": 1,
        "check_in": new Date("2025-07-18 03:30:00"),
        "check_out": new Date("2025-07-25 03:30:00"),
        "num_guests": 3,
        "message": "I'm so excited to stay, please update me on any information I need before arriving."
      },
      {
        "hauntId": 6,
        "userId": 1,
        "check_in": new Date("2025-08-18 03:30:00"),
        "check_out": new Date("2025-08-25 03:30:00"),
        "num_guests": 6,
        "message": "I'm so excited to stay, please update me on any information I need before arriving."
      },
      {
        "hauntId": 1,
        "userId": 3,
        "check_in": new Date("2025-04-18 03:30:00"),
        "check_out": new Date("2025-04-25 03:30:00"),
        "num_guests": 5,
        "message": "I'm so excited to stay, please update me on any information I need before arriving."
      },
      {
        "hauntId": 2,
        "userId": 3,
        "check_in": new Date("2025-01-18 03:30:00"),
        "check_out": new Date("2025-01-25 03:30:00"),
        "num_guests": 7,
        "message": "I'm so excited to stay, please update me on any information I need before arriving."
      },
      {
        "hauntId": 4,
        "userId": 3,
        "check_in": new Date("2025-02-18 03:30:00"),
        "check_out": new Date("2025-02-25 03:30:00"),
        "num_guests": 3,
        "message": "I'm so excited to stay, please update me on any information I need before arriving."
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
