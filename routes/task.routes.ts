import express from "express";
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
  getOwnTasks,
} from "../controller";
const taskRouter = express.Router();

taskRouter.get("", getTasks);
taskRouter.post("", createTask);
taskRouter.patch("/:id", updateTask);
taskRouter.delete("/:id", deleteTask);
taskRouter.get("/own-tasks", getOwnTasks);

export default taskRouter;
