import express from "express"
import dotenv from "dotenv"
dotenv.configDotenv({ path: "../../.env" }) // need to set path manually as .env is not in the root directory.
import UsersRoutes from "./routes/UsersRouter.js"
import ProductsRoutes from "./routes/ProductsRouter.js"

const app = express()
const PORT = process.env.PORT ?? 1111;

//Middlewares
app.use(express.json())

app.use('/api/auth', UsersRoutes)
app.use('/api', ProductsRoutes)
app.use((req, res, next) => {
    res.json({"err": 1, "msg": "No routes found"})
    next();
})


app.listen(PORT, (err)=> {
    if(err) throw err;
    console.log(`1. Server is running on port ${PORT}`)
})