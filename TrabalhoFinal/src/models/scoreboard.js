"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Scoreboard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Scoreboard.init(
    {
      userId: DataTypes.INTEGER,
      score: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Scoreboard",
    }
  );
  return Scoreboard;
};
