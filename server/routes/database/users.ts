import { Schema, model } from "mongoose";
import { IUser } from "../interfaces";
const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    parentId: [{ type: Schema.Types.ObjectId, ref: "Users", required: false }],
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);
let Users = model<IUser>("Users", userSchema);
export default Users;
