import express from 'express';
const router=express.Router();
//routes 
router.get("/",(req,res)=>{
    res.send("Default route")
})
//route params 
router.get("/category/:cat",(req,res)=>{
   let catname=req.params.cat;
   res.send(`${catname} products`);
})
 //optional parameter (?)
 router.get("/categoryproduct/:cat/:scat?",(req,res)=>{
   let catname=req.params.cat;
   let scatname=req.params.scat;
   if(scatname!=undefined){
      res.send(`${catname} and ${scatname} products`);
   }
   else{
      res.send(`${catname} products`);
   }
})
router.get("/posts",(req,res)=>{
    res.send("Get route or api")
})
router.post("/posts",(req,res)=>{
   res.send("Post route or api")
})
router.put("/posts",(req,res)=>{
   res.send("PUT route or api")
})
router.delete("/posts",(req,res)=>{
   res.send("Delete route or api")
})
export default router;