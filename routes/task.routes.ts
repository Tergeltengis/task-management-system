import express from "express";
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../controller";
const taskRouter = express.Router();

taskRouter.get("", getTasks);
taskRouter.post("", createTask);
taskRouter.patch("/:id", updateTask);
taskRouter.delete("/:id", deleteTask);

export default taskRouter;
