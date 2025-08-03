import {Sequelize, DataTypes} from 'sequelize';


export default (sequelize: Sequelize) =>
  sequelize.define('Teacher', {
    name: DataTypes.STRING,
    department: DataTypes.STRING,
  });