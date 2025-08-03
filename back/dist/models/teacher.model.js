import { DataTypes } from 'sequelize';
export default (sequalize) => sequalize.define('Teacher', {
    name: DataTypes.STRING,
    department: DataTypes.STRING,
});
//# sourceMappingURL=teacher.model.js.map