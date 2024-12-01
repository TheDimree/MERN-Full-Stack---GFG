import express from "express"

// * Importing & Configuring dotenv
import { configDotenv } from "dotenv";
configDotenv({
    path: "../../.env"
})
const PORT = process.env.PORT;

const app = express();

// * Wrong route = Not Found
app.use((req, res) => {
    res.json({"err":"1", "msg": "No route found"})
    console.log("No Routes are declared.")
})
app.listen(PORT, (err)=> {
    if(err) throw err;
    console.log(`Demo 19: Server is listening at ${PORT}`)
})