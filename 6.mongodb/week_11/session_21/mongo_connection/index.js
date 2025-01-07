import express from "express";
import { db_connection } from "./db.js";
import employeeRoutes from "./routes/employee.router.js";
const PORT=7788;
const app=express();
app.use(express.json());
db_connection();
app.use("/api/v1/employee",employeeRoutes);
//routes 
app.get("/",(req,res)=>{
     res.json({"err":0,"msg":"Mongo Process"});
})
app.use((req,res,next)=>{
    res.json({"err":1,"msg":"No route found"})
})
app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`Server work on ${PORT}`)
})