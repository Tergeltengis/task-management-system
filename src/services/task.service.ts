import { Task } from "../models";

export const getTasksService = async () => {
  const tasks = await Task.find().populate(["assigned", "assignee"]);
  return tasks;
};

export const updateTaskService = (id: string, updatedData: any) => {
  return Task.findByIdAndUpdate(id, updatedData);
};

export const addTaskService = (data: any) => {
  return new Task(data).save();
};

export const deleteTaskService = (id: string) => {
  return Task.findByIdAndDelete(id);
};

export const getOwnTasksService = (assigned: string) => {
  return Task.find({}).where("assigned").equals(assigned);
};

export const assignTaskService = (
  id: string,
  assignee: string,
  assigned: string
) => {
  return Task.findByIdAndUpdate(id, { assignee, assigned });
};
