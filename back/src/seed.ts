import dotenv from 'dotenv';
import db from './models/index.ts';
import { faker } from '@faker-js/faker';

dotenv.config();

const NUM_TEACHERS = 10;
const NUM_STUDENTS = 50;
const NUM_COURSES = 30;

async function seed() {
  try {
    await db.sequelize.sync({ force: true }); // Drop and recreate tables
    console.log('Database Synced.');

    const teachers = [];
    for (let i = 0; i < NUM_TEACHERS; i++) {
      const teacher = await db.Teacher.create({
        name: faker.person.fullName(),
        department: faker.commerce.department(),
      });
      teachers.push(teacher);
    }

    const courses = [];
    for (let i = 0; i < NUM_COURSES; i++) {
      const randomTeacher = faker.helpers.arrayElement(teachers);
      const course = await db.Course.create({
        title: faker.company.catchPhrase(),
        description: faker.lorem.paragraph(),
        TeacherId: randomTeacher.id,
      });
      courses.push(course);
    }

    for (let i = 0; i < NUM_STUDENTS; i++) {
      const student = await db.Student.create({
        name: faker.person.fullName(),
        email: faker.internet.email(),
      });

      const randomCourses = faker.helpers.arrayElements(courses, faker.number.int({ min: 1, max: 2 }));
      await student.addCourses(randomCourses);
    }

    console.log('Seeding complete!');
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
};

seed();
