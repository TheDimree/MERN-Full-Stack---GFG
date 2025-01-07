import mongoose from "mongoose";
import appConfig from "./appConfig.js";

const {DB_URL} = appConfig
const db_connection = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("MongoDB is connected successfully");
    }
    catch (err) {
        console.log(`MongoDB connection error`);
    }
}
export default db_connection;