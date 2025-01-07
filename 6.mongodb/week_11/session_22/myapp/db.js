import mongoose from 'mongoose';
const mydb=async ()=>{
 const CONNECTION_STRING="mongodb://localhost:27017/geek54batch_project";
 try{
    await mongoose.connect(CONNECTION_STRING);
    console.log("MongoDB Connected");
 }
 catch(err){
    console.log("MongoDB is not connected")
 }
}
export default mydb;