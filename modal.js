const { Model, DataTypes } = require("sequelize");
const sequelize = require("./dbconfig");

class Profile extends Model {}

Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: 1,
    },
    stage: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    title: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "profile",
    timestamps: false,
  }
);

module.exports = Profile;
