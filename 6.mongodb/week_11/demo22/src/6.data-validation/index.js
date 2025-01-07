import express from "express"
import appConfig from "../config/appConfig.js";
import connection from "../config/db.js";
import UserModel from "./models/Models.js";

const PORT = appConfig.PORT;
const app = express();

const displayData = async(model) => {
    try {
        let data = await model.find()
        console.log("Documents in the collection: ", data)
    } catch (error) {
        console.log("Error: ", error)
    }
}

const addUser = async () => {
    try {
        let newData = {
            name: "Bhagesh Dimri",
            email: "Dimri@gmail.com",
            age: 21,
            gender: "Male",
            status: "Active", // Capitalized to match the enum validation
            phoneNumber: "972800892",
            address: {
                street: "Shakti Nagar",
                city: "Ambala",
                postalCode: "134003"
            },
            hobbies: ["Reading", "Coding"]
        };

        let user = new UserModel(newData);

        // Save user
        await user.save();
        console.log("User added successfully:", user);

        // Display all users
        await displayData(UserModel);
    } catch (err) {
        if (err.name === "ValidationError") {
            console.error("Validation Error:", err.message);
        } else if (err.code === 11000) { // Duplicate key error
            console.error("Duplicate Key Error: Email must be unique");
        } else {
            console.error("Error adding user:", err);
        }
    }
};

const startServer = () => {
    connection();
    // addUser()
    // displayData(UserModel)
    app.listen(PORT, (err) => {
        if (err) {
            console.error(`Error starting server: ${err}`);
            throw err;
        }
        console.log(`Server listening on port ${PORT}`);
    })
}

startServer();