import {Sequelize, DataTypes} from 'sequelize';


export default (sequelize: Sequelize) =>
  sequelize.define('Course', {
    title: DataTypes.STRING,
    email: DataTypes.STRING,
  });