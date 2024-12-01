import express from 'express'

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Default Express Route")
})
router.get("/post", (req, res) => {
    res.send("Get Route or API")
})
router.post("/post", (req, res) => {
    // * reading post data   
    const data = req.body;
    console.log(data)
    res.send(`Post Router or API & Data Received: ${JSON.stringify(data)}`)
})

export default router;