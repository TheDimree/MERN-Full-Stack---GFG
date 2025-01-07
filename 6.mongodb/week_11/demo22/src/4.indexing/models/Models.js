import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true }, // Unique index
    age: { type: Number },
    }, { timestamps: true });

const UserModel = mongoose.model("s_12-user", UserSchema);
export default UserModel;