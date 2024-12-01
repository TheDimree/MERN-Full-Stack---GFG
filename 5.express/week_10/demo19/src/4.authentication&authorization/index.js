import express from "express"
import AuthRoutes from './routes/AuthRoutes.js'
import ProductRoutes from "./routes/ProductsRoutes.js";

// * Configuring dotenv
import { configDotenv } from "dotenv";
configDotenv ({ path: '../../.env'})
const PORT = process.env.PORT || 8080;

const TOKEN_SECRET = process.env.TOKEN_SECRET;
const app = express();
app.use(express.json());    // used to parse body data in json  format

// -> http://localhost:8008/api/auth/signup -> http://localhost:8008/api/auth/signin
app.use('/api/auth', AuthRoutes)

// -> http://localhost:8008/api/product/getAllProducts
app.use('/api/product', ProductRoutes)

// * Wrong route = Not Found
app.use((req, res) => {
    res.json({"err":"1", "msg": "No route found"})
    console.log("Route not found")
})
app.listen(PORT, (err)=> {
    if(err) throw err;
    console.log(`Demo 19.4: Server is listening at ${PORT}`)
})