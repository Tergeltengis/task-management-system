import { Schema, model } from "mongoose";
import { commentSchema } from "./comment.model";
import { User } from "./user.model";

const taskSchema = new Schema({
  taskName: { type: String, required: true },
  description: { type: String },
  assignee: {
    type: Schema.Types.ObjectId,
    ref: User,
  },
  assigned: {
    type: Schema.Types.ObjectId,
    ref: User,
  },
  status: {
    type: String,
    enum: ["todo", "progress", "done"],
    default: "todo",
  },
  comments: [commentSchema],
  createdAt: { type: Date, default: Date.now },
});
export const Task = model("tasks", taskSchema);
