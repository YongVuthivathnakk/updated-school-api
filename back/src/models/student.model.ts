import {Sequelize, DataTypes} from 'sequelize';


export default (sequelize: Sequelize) =>
  sequelize.define('Student', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  });