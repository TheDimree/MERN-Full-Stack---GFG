import express from 'express';
const router=express.Router();
router.get("/",(req,res)=>{
     res.send("Admin Default")
})
router.get("/dashboard",(req,res)=>{
    res.send("Admin dashboard")
})
export default router;