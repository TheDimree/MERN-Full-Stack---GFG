import dotenv from "dotenv";

// Automatically loads .env from the root directory
dotenv.config();

// Configuration settings
const appConfig = {
  PORT: process.env.PORT ?? 8080,           // App's port (default to 5000)
  DB_URL: process.env.CON_URL ?? "mongodb://localhost:27017/geekbatch54"  // MongoDB UR, geekbatch54 is db name
};

// console.log("appConfig: ", appConfig)
export default appConfig;