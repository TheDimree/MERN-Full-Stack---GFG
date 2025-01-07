import express from "express"
import connection from "./src/config/Db.js";
import EmpRouter from "./src/routes/EmpRouter.js"

const PORT = 8008;
const app = express();

app.use(express.json())

app.use("/api", EmpRouter)  // using router for emp routes
app.use((req, res) => {
    res.status(404).json({ message: "Page not found" })  // handling 404 error with custom message
})

const startServer = async () => {
    try {
        await connection(); // Ensure DB is connected

        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        });
    } catch (err) {
        console.error("Error during initialization:", err);
    }
};

startServer()