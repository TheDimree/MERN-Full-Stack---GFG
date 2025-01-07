import express from "express";
import UserModel from "./models/Models.js"; // Adjust the path as needed
import appConfig from "../config/appConfig.js"; // Your app configuration
import connection from "../config/db.js"; // MongoDB connection

const PORT = appConfig.PORT ?? 8008;
const app = express();

const indexes = async () => {
    try {
        // Define Indexes
        await UserModel.createIndexes(); // Automatically create the indexes defined in the schema

        // Define additional indexes if needed
        UserModel.schema.index({ age: 1 }); // Single field index
        UserModel.schema.index({ name: 1, email: -1 }); // Compound index
        UserModel.schema.index({ name: 'text' }); // Text index
        UserModel.schema.index({ "$**": 1 }); // Wildcard index
        console.log("Indexes created successfully.");
    } catch (error) {
        console.error("Error during index creation: ", error);
    }
};

// Add Users
const addUsers = async () => {
    try {
        const users = [
            { name: "Alice", email: "alice@example.com", age: 25 },
            { name: "Bob", email: "bob@example.com", age: 30 },
            { name: "Charlie", email: "charlie@example.com", age: 35 },
            { name: "David", email: "david@example.com", age: 40 },
        ];

        for (const user of users) {
            await new UserModel(user).save();
        }
        console.log("Users added successfully");
    } catch (error) {
        console.error("Error adding users: ", error);
    }
};

// Display All Data and Indexes
const displayDataAndIndexes = async () => {
    try {
        const data = await UserModel.find();
        console.log("Indexed Documents: ", data);

        const indexes = await UserModel.collection.getIndexes();
        console.log("Indexes: ", indexes);
    } catch (error) {
        console.error("Error displaying data and indexes: ", error);
    }
};

// Query Using Indexes
const queryData = async () => {
    try {
        // Using Text Index
        const textSearch = await UserModel.find({ $text: { $search: "Alice" } });
        console.log("Text Search Results: ", textSearch);

        // Using Compound Index
        const compoundSearch = await UserModel.find().sort({ name: 1, email: -1 });
        console.log("Compound Index Results: ", compoundSearch);

        // Using Single Field Index
        const ageSearch = await UserModel.find({ age: { $gt: 30 } });
        console.log("Age-based Query Results: ", ageSearch);
    } catch (error) {
        console.error("Error querying data: ", error);
    }
};

// Start Server
const startServer = () => {
    connection(); // Connect to MongoDB
    //addUsers(); // Add initial user data
    indexes(); // Create indexes
    setTimeout(() => {
        displayDataAndIndexes(); // Display indexed data and indexes
        queryData(); // Query using indexes
    }, 2000); // Allow time for data insertion and indexing

    app.listen(PORT, (err) => {
        if (err) {
            console.error(`Error starting server: ${err}`);
            throw err;
        }
        console.log(`Server listening on port ${PORT}`);
    });
};

startServer();
