import express from "express";
import Task from "./models/task.model";

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
// create task
app.post("create", async (req, res) => {
  try {
    const newTask = new Task(req.body).save();
    res.send(newTask);
  } catch (error) {
    console.error("Error", error);
  }
});

// update task
app.patch("/:id", async (req, res) => {
  try {
    const updatedData = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.send(updatedData);
  } catch (error) {
    console.error("Error", error);
  }
});

// delete task
app.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.send({ message: "Deleted" });
  } catch (error) {
    console.error("Error", error);
  }
});
