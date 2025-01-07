import mongoose from "mongoose";
const CONNECTION_STRING="mongodb://localhost:27017/geekbatch54";
const db_connection=async()=>{
  try{
       await mongoose.connect(CONNECTION_STRING);
       console.log("MongoDB Connected");
  }
  catch(err){
      console.log(`MongoDB connection error`);
  }
}
export {db_connection};