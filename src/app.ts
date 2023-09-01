import express from "express";
import cors from "cors";
import taskRouter from "./routes/task.routes";

export const app = express();

app.use(cors());

app.use(express.json());

//router
app.use("/api/task", taskRouter);

app.use('*', (_req, res) => {
  res.status(404).send('This page is not found');
});

app.get("/", (_req, res) => {
  res.send("Welcome to task management system");
});
