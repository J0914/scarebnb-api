'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(
        models.Haunt,
        { foreignKey: 'hauntId' }
      )
      Review.belongsTo(
        models.User,
        { foreignKey: 'userId' }
      )
    }
  }
  Review.init({
    hauntId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [5, 5000]
      }
    },
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};