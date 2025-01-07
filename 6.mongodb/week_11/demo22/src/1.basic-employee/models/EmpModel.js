import mongoose from "mongoose";

const EmpSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
    }
}, {timestamps: true})  // created at and updated at

const employee = mongoose.model("s_12-employee", EmpSchema);

export default employee;