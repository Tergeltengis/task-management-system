import { Request, Response } from "express";
import { Task } from "../models";

export const getTasks = async (_request: Request, response: Response) => {
  try {
    const tasks = await Task.find().populate(["assigned", "assignee"]);
    response.send(tasks);
  } catch (error) {
    console.error("Error retrieving tasks:", error);
  }
};

export const updateTask = async (request: Request, response: Response) => {
  const id = request.params.id;
  const updatedData = request.body;
  try {
    const updatedTaskData = await Task.findByIdAndUpdate(id, updatedData);
    response.status(200).send(updatedTaskData);
  } catch (error) {
    console.error("Error update task:", error);
  }
};

export const createTask = async (request: Request, response: Response) => {
  const newData = request.body;
  try {
    const result = await new Task(newData).save();
    response.status(201).send({
      message: "Task created successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error creating task:", error);
  }
};

export const deleteTask = async (request: Request, response: Response) => {
  const id = request.params.id;
  try {
    await Task.findByIdAndDelete(id);
    response.status(200).send({
      message: "Task deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};
