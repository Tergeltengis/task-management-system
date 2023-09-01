import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  username: { type: String },
});
const User = model("users", UserSchema);
export default User;
