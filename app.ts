import express from "express";
import taskRouter from "./routes/task.routes";

export const app = express();

//router
app.use("/api/task", taskRouter);

app.get("/", (_req, res) => {
  res.send("Welcome to task management system");
});
