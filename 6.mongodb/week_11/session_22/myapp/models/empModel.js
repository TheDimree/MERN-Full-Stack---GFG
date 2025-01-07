import mongoose from "mongoose";
const empSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true,
    }
},{timestamps:true});
const empmodel=mongoose.model("emp",empSchema);
export default empmodel;