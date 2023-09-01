import { Request, Response } from "express";
import {
  getTasksService,
  addTaskService,
  deleteTaskService,
  getOwnTasksService,
  updateTaskService,
  assignTaskService,
} from "../services";

export const getTasks = async (_request: Request, response: Response) => {
  try {
    const tasks = await getTasksService();
    response.send(tasks);
  } catch (error) {
    console.error("Error retrieving tasks:", error);
    response
      .status(500)
      .send({ error: "Unable to retrieve tasks. Please try again later." });
  }
};

export const updateTask = async (request: Request, response: Response) => {
  const id = request.params.id;
  const updatedData = request.body;
  try {
    const updatedTaskData = await updateTaskService(id, updatedData);
    response.status(200).send(updatedTaskData);
  } catch (error) {
    console.error("Error update task:", error);
    response
      .status(500)
      .send({ error: "Unable to update the task. Please try again later." });
  }
};

export const createTask = async (request: Request, response: Response) => {
  const newData = request.body;
  try {
    const result = await addTaskService(newData);
    response.status(201).send({
      message: "Task created successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error creating task:", error);
    response
      .status(500)
      .send({ error: "Unable to create the task. Please try again later." });
  }
};

export const deleteTask = async (request: Request, response: Response) => {
  const id = request.params.id;
  try {
    await deleteTaskService(id);
    response.status(200).send({
      message: "Task deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting task:", error);
    response
      .status(500)
      .send({ error: "Unable to delete the task. Please try again later." });
  }
};

export const getOwnTasks = async (request: Request, response: Response) => {
  const userId = request.headers.userId as string;
  try {
    const tasks = await getOwnTasksService(userId);
    response.status(200).send(tasks);
  } catch (error) {
    console.error("Error retrieving tasks:", error);
    response
      .status(500)
      .send({ error: "Unable to retrieve tasks. Please try again later." });
  }
};

export const assignTask = async (request: Request, response: Response) => {
  try {
    const assignee = request.headers.user as string;
    const assigned = request.body.assigned;
    const taskId = request.params.taskId;
    const task = await assignTaskService(taskId, assignee, assigned);

    response.status(200).send(task);
  } catch (error) {
    console.error("Error assign task:", error);
    response
      .status(500)
      .send({ error: "Task assign failed. Please try again later." });
  }
};
