import { DataTypes } from 'sequelize';
export default (sequalize) => sequalize.define('Course', {
    title: DataTypes.STRING,
    email: DataTypes.STRING,
});
//# sourceMappingURL=course.model.js.map