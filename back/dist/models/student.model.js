import { DataTypes } from 'sequelize';
export default (sequalize) => sequalize.define('Student', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
});
//# sourceMappingURL=student.model.js.map