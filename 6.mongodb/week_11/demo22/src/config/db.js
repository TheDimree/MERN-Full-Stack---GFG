import mongoose from "mongoose";
import appConfig from "./appConfig.js";
const connection = async () => {
    const CON_URL = appConfig.DB_URL
    try {
        await mongoose.connect(CON_URL)
        console.log("MongoDB connection established.")
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
}

export default connection;