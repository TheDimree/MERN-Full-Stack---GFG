import mongoose from "mongoose"
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
    }
}, {timestamps:true})

const User = mongoose.model('s_23-user', UserSchema)
export default User;