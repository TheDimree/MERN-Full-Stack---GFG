import express from "express"
import appConfig from "../config/appConfig.js";
import connection from "../config/db.js";
import EmpModel from "./models/EmpModel.js";

const PORT = appConfig.PORT ?? 8008;
const app = express();

const addEmployee = async () => {
    try {
        let newData = {
            firstName: 'Johny',
            lastName: 'Dep',
            email: 'johny.mc@example.com',
            age: 36
        }
        let emp = new EmpModel(newData)
        await emp.save()
        console.log("Employee added successfully");
    } catch (err) {
        console.error("Error: " + err);
        throw err;
    }
}

const fetchEmployee = async() => {
    try {
        let empData = await EmpModel.find()
        console.log("Employees: ", empData)
    } catch (error) {
        console.log("Error: ", error)
    }
}

const startServer = () => {
    connection();
    addEmployee()
    fetchEmployee()
    app.listen(PORT, (err) => {
        if (err) {
            console.error(`Error starting server: ${err}`);
            throw err;
        }
        console.log(`Server listening on port ${PORT}`);
    })
}

startServer();