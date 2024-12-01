import express from 'express';
import {Router as Test} from './Test.js'

const app = express();
const PORT = 8008;
app.use('/test', Test);

app.listen(PORT, (err) => {
    if(err) throw err
    console.log(`Server is listening on ${PORT}`)
});