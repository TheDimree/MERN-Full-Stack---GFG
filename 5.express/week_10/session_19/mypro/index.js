import express from 'express';
import AuthRoute from './routes/AuthRoutes.js';
import ProductRoute from './routes/ProductRoutes.js'
import { configDotenv } from 'dotenv';
configDotenv({
    path:'./.env'
})
const PORT=process.env.PORT;
const app=express();
app.use(express.json());//parse the body data
//call routes 
app.use("/api/auth",AuthRoute);
app.use("/api/products",ProductRoute);
//not found 
app.use((req,res,next)=>{
    res.json({"err":1,"msg":"No route found"});
})
app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`Server work on ${PORT}`);
})