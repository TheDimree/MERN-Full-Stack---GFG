import express from 'express'
const PORT = '8008';

const app = express();  // creating instance of express

//* check theses routes in thunder extension.
// * 1. Basic Routings
app.get("/", (req, res) => {
    res.send("Default Express Route")
    res.send("Default Express Route")
})
app.get("/post", (req, res) => {
    res.send("Get Route or API")
})

app.post("/post", (req, res)=>{
    res.send("Post route or API")
})
app.put("/post", (req, res)=>{
    res.send("Put route or API")
})
app.delete("/post", (req, res)=>{
    res.send("Delete route or API")
})

app.listen(PORT,(err)=> {
    if(err) throw err
    console.log(`Server listening on ${PORT}`)
})