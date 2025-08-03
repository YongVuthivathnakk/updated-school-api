import { Sequelize } from "sequelize";
import dbConfig from "../utils/db.config";
import studentModel from "./student.model";
import courseModel from "./course.model";
import teacherModel from "./teacher.model";
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: Number(dbConfig.PORT),
    dialect: dbConfig.dialect,
});
const db = {};
db.sequelize = sequelize;
db.Student = studentModel(sequelize);
db.Course = courseModel(sequelize);
db.Teacher = teacherModel(sequelize);
// Associations
db.Teacher.hasMany(db.Course);
db.Course.belongsTo(db.Teacher);
db.Course.belongsTo(db.Student, { through: "CourseStudent" });
db.Student.belongsToMany(db.Course, { through: "CourseStudent" });
export const initializeDatabase = async () => {
    await sequelize.sync({ alter: true }); // dev only
    console.log("Database sync");
};
export default db;
//# sourceMappingURL=index.js.map