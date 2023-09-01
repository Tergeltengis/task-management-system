import express from "express";
import taskRouter from "./routes/task.routes";

export const app = express();

app.use(express.json());

//router
app.use("/api/task", taskRouter);

app.get("/", (_req, res) => {
  res.send("Welcome to task management system");
});
