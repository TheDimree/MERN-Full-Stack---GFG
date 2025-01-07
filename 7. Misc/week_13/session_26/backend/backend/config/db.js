import mongoose from "mongoose";
const database_connectivity=async ()=>{
 try{
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log("MongoDb connected");
 }
 catch(err){
    console.log("Mongodb not connected")
 }
}
export default database_connectivity;