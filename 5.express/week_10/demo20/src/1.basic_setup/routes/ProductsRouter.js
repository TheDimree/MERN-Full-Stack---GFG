import express from "express"
import {getAllProducts, getProductById, addProduct, updateProduct, deleteProduct } from "../controllers/ProductsController.js"

const routers = express.Router()

routers.get('/products', getAllProducts)    // http://localhost:8008/api/products
routers.get('/product/:id', getProductById) // http://localhost:8008/api/product/6
routers.post('/addproduct', addProduct) // http://localhost:8008/api/addproduct => also send data in body section = {"p1":"v1", "p2": v2}
routers.put('/updateproduct/:id', updateProduct) // http://localhost:8008/api/updateproduct/6 => also send data in body section = {"p1":"v1", "p2": v2}
routers.delete('/deleteproduct/:id', deleteProduct) // http://localhost:8008/api/deleteproduct/6 

export default routers;