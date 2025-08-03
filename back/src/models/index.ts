import { Dialect, Sequelize } from "sequelize";
import dbConfig from "../utils/db.config.ts";
import studentModel from "./student.model.ts";
import courseModel from "./course.model.ts";
import teacherModel from "./teacher.model.ts";
import chalk from "chalk";

const sequelize = new Sequelize(dbConfig.DB!, dbConfig.USER!, dbConfig.PASSWORD!, {
  host: dbConfig.HOST!,
  port: Number(dbConfig.PORT!),
  dialect: dbConfig.dialect as Dialect,
})


const db: any = {};

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
  console.log(chalk.blue.bold("📦 Database synced successfully"));
}

export default db;