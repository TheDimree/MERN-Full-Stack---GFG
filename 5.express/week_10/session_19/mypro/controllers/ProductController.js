const getAllProducts=(req,res)=>{
    res.json({"err":0,"prodata":["A","B"]})
}
const getProductById=(req,res)=>{
  res.json({"err":0,"prodata":"products by id"})
}
const addProducts=(req,res)=>{
    res.json({"err":0,"msg":"Product Added"})
}
const deleteProduct=(req,res)=>{
    res.json({"err":0,"msg":"Product deleted"})
}
const updateProduct=(req,res)=>{
    res.json({"err":0,"msg":"Product updated"})
}
export {getAllProducts,getProductById,addProducts,deleteProduct,updateProduct}