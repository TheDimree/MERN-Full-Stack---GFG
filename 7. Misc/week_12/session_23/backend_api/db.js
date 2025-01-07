import mongoose from "mongoose";
const mydbconnection=async ()=>{
    try{
    const URL="mongodb://localhost:27017/geekbatch54";
    await mongoose.connect(URL);
    console.log("MongoDB connected");
    }
    catch(err){
        console.log("MongoDb not connected");
    }

}
export default mydbconnection;