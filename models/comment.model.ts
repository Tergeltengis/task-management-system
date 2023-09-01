import { Schema } from "mongoose";

export const commentSchema = new Schema({
  text: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
