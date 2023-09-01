import express from "express";
import taskRouter from "./task.routes";

export const app = express();

//router
app.use("", taskRouter);

app.get("/", (_req, res) => {
  res.send("Welcome to task management system");
});
