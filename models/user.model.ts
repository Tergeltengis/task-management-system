import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  username: { type: String },
});
export const User = model("users", UserSchema);
