import express from "express";
import Task from "./models/task.model";

const taskRouter = express.Router();

taskRouter.post("/create", async (req, res) => {
  try {
    const newTask = new Task(req.body).save();
    res.send(newTask);
  } catch (error) {
    console.error("Error", error);
  }
});

taskRouter.get("/tasks", async (_req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (error) {
    console.error("Error", error);
  }
});

taskRouter.patch("/:id", async (req, res) => {
  try {
    const updatedData = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.send(updatedData);
  } catch (error) {
    console.error("Error", error);
  }
});

taskRouter.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.send({ message: "Deleted" });
  } catch (error) {
    console.error("Error", error);
  }
});

export default taskRouter;
