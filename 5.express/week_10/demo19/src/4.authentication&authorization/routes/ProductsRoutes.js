import express from 'express';
import { getAllProducts, getProductById, addProduct, deleteProduct, updateProduct } from '../controller/ProductsController.js'

import JwtAuthorizationMiddleware from '../middlewares/JwtAuthorization.js';

const router = express.Router();

// * Using our JWT Middleware at router level.
router.get('/getAllProducts', getAllProducts)
router.get('/getProductById/:id', getProductById)
router.post('/addProduct', JwtAuthorizationMiddleware, addProduct)
router.delete('/deleteProduct/:id', JwtAuthorizationMiddleware, deleteProduct)
router.put('/updateProduct/:id', JwtAuthorizationMiddleware, updateProduct)

export default router;