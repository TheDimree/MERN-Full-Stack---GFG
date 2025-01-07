import express from 'express';
import { getAllProducts } from '../controllers/ProductsController.js';
import { authenticateToken ,isAdmin} from '../middleware/authToken.js';
const router=express.Router();
router.get('/getall',authenticateToken,isAdmin,getAllProducts);
export default router;