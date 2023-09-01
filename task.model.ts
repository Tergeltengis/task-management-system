import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  taskName: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});
const Task = model("tasks", taskSchema);
export default Task;
