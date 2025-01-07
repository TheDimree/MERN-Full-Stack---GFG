import express from "express"
import dotenv from "dotenv"
dotenv.configDotenv({ path: "../../.env" }) // need to set path manually as .env is not in the root directory.
import UsersRoutes from "./routes/UsersRouter.js"

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express()
const PORT = process.env.PORT ?? 1111;

//Middlewares
app.use(express.json()) // to use post data in json format

// documentation: https://blog.logrocket.com/documenting-express-js-api-swagger/
    // -> localhost:8008/api-docs
const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "LogRocket Express API with Swagger",
            version: "0.1.0",
            description:
                "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "LogRocket",
                url: "https://logrocket.com",
                email: "info@email.com",
            },
        },
        servers: [
            {
                url: "http://localhost:8008",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
    "/api",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);

app.use('/auth', UsersRoutes)

// * Default should be in the last.
app.use((req, res, next) => {
    res.json({ "err": 1, "msg": "No routes found" })
    next();
})
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`3. Server is running on port ${PORT}`)
})