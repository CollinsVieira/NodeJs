import express from "express";
import dotenv from "dotenv";
import apiRouter from "./server";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.SERVER_PORT;

app.get("/", (req, res) => {
  res.send(
    "<h1>Server is running</h1> <h2>Version 1.0.0</h2> <p>API de gestión de cursos</p>"
  );
});

apiRouter(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
