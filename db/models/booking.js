'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Booking.belongsTo(
        models.Haunt,
        { foreignKey: 'hauntId' }
      )
      Booking.belongsTo(
        models.User,
        { foreignKey: 'userId' }
      )
    }
  }
  Booking.init({
    hauntId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    check_in: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        dateValidator(value) {
          if (new Date(value) < new Date()) {
            throw new Error("Date cannot be in the past");
          }
        }
      }
    },
    check_out: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        dateValidator(value) {
          if (new Date(value) < new Date()) {
            throw new Error("Date cannot be in the past");
          }
        }
      }
    },
    num_guests: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      validate: {
        len: [0, 500]
      }
    }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};