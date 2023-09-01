import { Router } from "express";
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
  getOwnTasks,
  assignTask,
} from "../controller";
const taskRouter = Router();

taskRouter.get("", getTasks);
taskRouter.post("", createTask);
taskRouter.patch("/:id", updateTask);
taskRouter.delete("/:id", deleteTask);
taskRouter.get("/own-tasks", getOwnTasks);
taskRouter.patch("/assign/:taskId", assignTask);

export default taskRouter;
