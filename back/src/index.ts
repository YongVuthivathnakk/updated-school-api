import express from "express";
import dotenv from "dotenv";
import { serveSwagger, setupSwagger } from "./utils/swagger.ts";
import { initializeDatabase } from "./models/index.ts";
import chalk from "chalk";
import studentRoutes from "./routes/student.route.ts";
import teacherRoutes from "./routes/teacher.route.ts";
import courseRoutes from "./routes/courses.route.ts";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use("/docs", serveSwagger, setupSwagger);
app.use(express.json());

// app.use("/", (_, res) => {
//   res.send("Welcome to the school api");
// });

app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/courses", courseRoutes);

initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(
      chalk.green.bold("🚀 Server running at: ") +
        chalk.underline.cyan(`http://localhost:${PORT}`)
    );
    console.log(
      chalk.green.bold("📄 Server Documnet at: ") +
        chalk.underline.cyan(`http://localhost:${PORT}/docs`)
    );
  });
});
