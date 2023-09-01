import { Schema } from "mongoose";
import { User } from "./user.model";

export const commentSchema = new Schema({
  text: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: User,
  },
});
