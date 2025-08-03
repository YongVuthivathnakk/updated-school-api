import express from "express";
import dotenv from "dotenv";
import { serveSwagger, setupSwagger } from "./utils/swagger";
import { initializeDatabase } from "./models";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use("/docs", serveSwagger, setupSwagger);
app.use(express.json());
app.use("/", (req, res) => {
    res.send("Welcome to the school api");
});
initializeDatabase().then(() => {
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
});
//# sourceMappingURL=index.js.map