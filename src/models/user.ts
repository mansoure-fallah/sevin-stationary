import mongoose, { Schema, Document, Model } from "mongoose";

export interface UserInterface extends Document {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string;
  refreshToken: string;
}

const userSchema: Schema<UserInterface> = new Schema({
  name: {
    type: String,
    required: true,
    // minLength, maxLength
  },
  email: {
    type: String,
    required: true,
    // pattern (RegEx)
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  role: {
    type: String,
    default: "USER",
  },
  refreshToken: { type: String },
});

const UserModel: Model<UserInterface> =
  mongoose.models.User || mongoose.model<UserInterface>("User", userSchema);

export default UserModel;
