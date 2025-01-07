import express from "express";
import {configDotenv} from 'dotenv';
import cors from "cors";
import database_connectivity from "./config/db.js";
import AuthRoutes from './routes/Authroute.js';
import ProductRoutes from './routes/ProductRoute.js'
configDotenv({path:'./.env'});
const PORT=process.env.PORT|8899;
database_connectivity();
const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/auth",AuthRoutes);
app.use("/api/v1/products",ProductRoutes);
app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`Server work on ${PORT}`)
})