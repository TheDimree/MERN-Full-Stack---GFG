import express from 'express';//import express from node_modules 
//import all routes
import mainRoutes from './routes/mainRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import userRoutes from './routes/userRoutes.js';
const PORT=9999;
const app=express();//create instance of express 
 //call routes 
 app.use("/",mainRoutes);
 app.use("/admin",adminRoutes);
 app.use("/users",userRoutes);
app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`Server work on ${PORT} port number`);
})