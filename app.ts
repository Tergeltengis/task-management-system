import express from "express";
import Task from "./task.model";

export const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to task management system");
});

// get tasks
app.get("/tasks", async (_req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (error) {
    console.error("Error", error);
  }
});
