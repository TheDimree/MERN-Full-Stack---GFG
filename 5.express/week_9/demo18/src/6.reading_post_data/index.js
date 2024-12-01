import express from 'express'
import Routes from './Routes.js'

const PORT = 8008;
const app = express();

app.use(express.json()) // It parses all post-data into JSON Format.

app.use('/', Routes)

app.listen(PORT,(err)=>{
    if(err) console.log(err);
    console.log("Reading Post Data")
    console.log(`Server is running on port ${PORT}`);
})