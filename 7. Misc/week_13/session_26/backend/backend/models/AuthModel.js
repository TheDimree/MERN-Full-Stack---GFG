import mongoose from "mongoose";
const authSchema=new mongoose.Schema({
    firstName:{
        type:String, 
        required:true
    },
    lastName:{
        type:String, 
        required:true
    },
    email:{
        type:String, 
        required:true,
        unique:true
    },
    password:{
        type:String, 
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        default:'user'
    }
},{timestamps:true});
const AuthModel=mongoose.model("Auth",authSchema);
export default AuthModel;