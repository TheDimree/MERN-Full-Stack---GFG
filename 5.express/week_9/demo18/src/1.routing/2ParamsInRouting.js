import express from 'express'
const PORT = '8008';

const app = express();  // creating instance of express

//* check theses routes in thunder extension.

//* 1. Parameters in the routes
app.get("/category/:cat", (req,res)=>{
    let catName = req.params.cat;
    res.send(`You requested category: ${catName}`)
})

//* 2. Optional Parameters (?)
app.get("/category/:cat/:subcat?", (req,res)=>{
    let catName = req.params.cat;
    let subcatName = req.params.subcat;
    subcatName !== undefined ? res.send(`You requested subcategory: ${subcatName}`) : res.send(`You requested category: ${catName}`)
})

app.listen(PORT,(err)=> {
    if(err) throw err
    console.log(`Server listening on ${PORT}`)
})

//! The code is not readable so we use express.Router(), an in-built middleware to separate routes. Check 3rd Part of this project. 