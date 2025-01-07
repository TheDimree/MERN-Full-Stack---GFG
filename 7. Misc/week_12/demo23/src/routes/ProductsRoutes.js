import express from 'express';
import { getAllProducts } from '../controllers/ProductsController.js';
import AuthMiddleware, {isAdmin} from '../middlewares/AuthTokenMiddleware.js';

const router = express.Router()

router.get('/products', AuthMiddleware, isAdmin, getAllProducts);
// http://localhost:8008/api/products => add headers : Authorization = bearer YOUR_TOKEN

export default router;