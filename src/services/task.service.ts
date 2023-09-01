import { Task } from "../models";

export const getTasksService = async () => {
  const tasks = await Task.find().populate(["assigned", "assignee"]);
  return tasks;
};

export const updateTaskService = async (id: string, updatedData: any) => {
  return await Task.findByIdAndUpdate(id, updatedData);
};

export const addTaskService = async (data: any) => {
  return await new Task(data).save();
};

export const deleteTaskService = async (id: string) => {
  return await Task.findByIdAndDelete(id);
};

export const getOwnTasksService = async (assigned: string) => {
  return await Task.find({}).where("assigned").equals(assigned);
};

export const assignTaskService = async (
  id: string,
  assignee: string,
  assigned: string
) => {
  return await Task.findByIdAndUpdate(id, { assignee, assigned });
};
