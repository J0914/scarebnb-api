'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Haunt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Haunt.belongsTo(
        models.User,
        { foreignKey: 'hostId' }
      )
      Haunt.hasMany(
        models.Booking,
        { foreignKey: 'hauntId', onDelete: 'CASCADE', hooks: true}
      )
      Haunt.hasMany(
        models.Review,
        { foreignKey: 'hauntId', onDelete: 'CASCADE', hooks: true}
      )
      Haunt.hasMany(
        models.Favorite,
        { foreignKey: 'hauntId', onDelete: 'CASCADE', hooks: true}
      )
    }
  }
  Haunt.init({
    hostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,50]
      },
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        len: [1,500]
      },
      allowNull: false
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,50]
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,30]
      }
    },
    state: {
      type: DataTypes.STRING,
      validate: {
        len: [1,20]
      },
      allowNull: false,
    },
    zip_code: {
      type: DataTypes.INTEGER,
      validate: {
        len: [5]
      },
      allowNull: false
    },
    max_guests: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    beds: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bedrooms: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bathrooms: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Haunt',
  });
  return Haunt;
};