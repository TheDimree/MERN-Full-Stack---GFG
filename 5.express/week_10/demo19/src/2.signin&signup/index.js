import express from "express"
import AuthRoutes from './routes/AuthRoutes.js'
const app = express();
const PORT = 8008;

app.use(express.json());    // used to parse body data in json  format
// -> http://localhost:8008/api/auth/signup -> http://localhost:8008/api/auth/signin
app.use('/api/auth', AuthRoutes)

// * Wrong route = Not Found
app.use((req, res) => {
    res.json({"err":"1", "msg": "No route found"})
    console.log("Route not found")
})
app.listen(PORT, (err)=> {
    if(err) throw err;
    console.log(`Demo 19: Server is listening at ${PORT}`)
})