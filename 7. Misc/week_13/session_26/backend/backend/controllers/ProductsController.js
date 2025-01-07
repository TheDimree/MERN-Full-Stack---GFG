import ProdModel from "../models/ProductModel.js";
const getAll=(req,res)=>{
    return res.json({"err":0,"msg":"All products"})
}
const getById=(req,res)=>{
     
    return res.json({"err":0,"msg":" product by id"})
}
const addproduct=async (req,res)=>{
    if(req.file==undefined){
         return res.json({"err":1,"msg":"Error in file uploading"});
    }
    try{
     let ProductData=req.body;
     ProductData={...ProductData,imagePath:req.file.filename};
     let newProduct=new ProdModel(ProductData); 
     await newProduct.save();
    return res.json({"err":0,"msg":"Add product successfully"})
    }
    catch(err){
        return res.json({"err":1,"msg":"Product already added or something went wrong"});
    }
}
const deleteproduct=(req,res)=>{
    return res.json({"err":0,"msg":"Delete product"})
}
const updateproduct=(req,res)=>{
    return res.json({"err":0,"msg":"update product"})
}
export {getAll,getById,addproduct,deleteproduct,updateproduct};