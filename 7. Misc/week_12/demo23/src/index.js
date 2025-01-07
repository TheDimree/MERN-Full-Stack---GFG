import express from "express"
import UsersRouter from "./routes/UserRoutes.js"
import ProductsRouter from "./routes/ProductsRoutes.js"
import connection from "./config/db.js"
import appConfig from "./config/appConfig.js"

const app = express()
const PORT = 8008

console.log(appConfig.TOKEN_SECRET)
app.use(express.json())
app.use("/api/auth", UsersRouter)
app.use("/api", ProductsRouter)
app.use((req, res, next) => {
    res.status(404).json({"err": 1, "message": "Page not found"});   // 404 status code for not found page
    next();
})

connection();
app.listen(PORT, (err)=> {
    if(err) throw err;
    console.log(`Server is running on port ${PORT}`);
})