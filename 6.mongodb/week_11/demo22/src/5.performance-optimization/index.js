import express from "express"
import appConfig from "../config/appConfig.js";
import connection from "../config/db.js";
import UserModel from "./models/Models.js";

const PORT = appConfig.PORT ?? 8008;
const app = express();

const displayData = async(model) => {
    try {
        // let data = await model.find()
        // console.log("Documents in the collection: ", data)

        // let obj = await model.find().lean()
        // console.log("JavaScript Object: ", obj)
        
        // let limit = await model.find().limit(2)
        // console.log("Limit 2: ", limit)
        // let skip = await model.find().skip(2)
        // console.log("Skip 2: ", skip)

        let nameAgeField = await model.findById("67611175338c122757cbdf6a", 'name age')
        console.log("Name & Age: ", nameAgeField)
        let nameField = await model.findById("67611175338c122757cbdf6a", 'name')
        console.log("Only Name : ", nameField)

    } catch (error) {
        console.log("Error: ", error)
    }
}

const addUser = async () => {
    try {
        let newData = {
            name: 'Sohan',
            email: "SohanSingh@gmail.com",
            age: 21
        }
        let user = new UserModel(newData)
        await user.save()
        console.log("User added successfully");
        displayData(UserModel)
    } catch (err) {
        console.error("Error: " + err);
        throw err;
    }
}

const startServer = () => {
    connection();
    addUser()
    displayData(UserModel)
    app.listen(PORT, (err) => {
        if (err) {
            console.error(`Error starting server: ${err}`);
            throw err;
        }
        console.log(`Server listening on port ${PORT}`);
    })
}

startServer();