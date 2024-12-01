import express from 'express'
import mainRoutes from './MainRoutes.js'
import userRoutes from './UserRoutes.js'
import adminRoutes from './AdminRoutes.js'

const PORT = 8008;
const app = express();

app.use("/", mainRoutes);
app.use("/admin", adminRoutes); //=> /admin/dashboard
app.use("/user", userRoutes);   //=> /user/dashboard
app.listen(PORT, (err)=>{
    if(err) console.log(err);
    console.log(`listening on port: ${PORT}`);
})
