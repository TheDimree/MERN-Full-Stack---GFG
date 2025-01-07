import express from 'express';
import { getAllProducts, getProductById, addProduct, deleteProduct, updateProduct } from '../controller/ProductsController.js'

import JwtAuthorizationMiddleware from '../middlewares/JwtAuthorization.js';

const router = express.Router();

// * Using our JWT Middleware at router level.
router.get('/getallproducts', getAllProducts)
router.get('/getproductbyid/:id', getProductById)
router.post('/addproduct', JwtAuthorizationMiddleware, addProduct)
router.delete('/deleteproduct/:id', JwtAuthorizationMiddleware, deleteProduct)
router.put('/updateproduct/:id', JwtAuthorizationMiddleware, updateProduct)

export default router;