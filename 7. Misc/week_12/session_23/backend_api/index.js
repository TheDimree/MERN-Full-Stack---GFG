import express from 'express';
import userRoutes from './routes/UserRoutes.js';
import productRoutes from './routes/ProductRoutes.js';
import mydbconnection from './db.js';
const PORT=9999;
const app=express();
mydbconnection();
app.use(express.json());
app.use("/api/auth",userRoutes);
app.use("/api/product",productRoutes);
app.use((req,res,next)=>{
    res.json({"err":1,"msg":"No route found"})
})
app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`Server work on ${PORT} number`);
})