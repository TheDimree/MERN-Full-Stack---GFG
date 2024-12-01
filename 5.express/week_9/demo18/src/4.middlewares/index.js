import express from 'express'
import adminRoutes from './routes/AdminRoutes.js'
import authRoutes from './routes/AuthRoutes.js'

import {TitleMiddleware} from './custom_middlewares/MyMiddlewares.js'   //* middleware

const PORT = 8008;
const app = express();

// * 1 Using customized TitleMiddleware as Global middleware.
app.use(TitleMiddleware)   // Global-Level Middleware

// * 2 Using router middleware
app.use("/admin", adminRoutes); //=> used customized AuthMiddleware as Router middleware in AuthRoutes.
app.use('/api/auth', authRoutes)    // using router middleware.

// * 3 Last middleware => if any route is not found then that will be handled by this.
app.use((req, res, next)=> {
    res.send("No Route is found.")
})

app.listen(PORT, (err)=>{
    if(err) console.log(err);
    console.log("Middlewares")
    console.log(`listening on port: ${PORT}`);
})
