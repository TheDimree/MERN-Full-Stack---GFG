import mongoose from "mongoose";

const empSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    }
},{timestamps:true});

const empModel=mongoose.model('employee',empSchema);    // employee is collection name but it will create its plural, check compass

export default empModel;