import express from 'express'

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Default Express Route")
})
router.get("/post", (req, res) => {
    res.send("Get Route or API")
})

//* 1. Parameters in the routes
router.get("/category/:cat", (req,res)=>{
    let catName = req.params.cat;
    res.send(`You requested category: ${catName}`)
})

//* 2. Optional Parameters (?)
router.get("/category/:cat/:subcat?", (req,res)=>{
    let catName = req.params.cat;
    let subcatName = req.params.subcat;
    subcatName !== undefined ? res.send(`You requested subcategory: ${subcatName}`) : res.send(`You requested category: ${catName}`)
})

router.post("/post", (req, res)=>{
    res.send("Post route or API")
})
router.put("/post", (req, res)=>{
    res.send("Put route or API")
})
router.delete("/post", (req, res)=>{
    res.send("Delete route or API")
})

export default router;