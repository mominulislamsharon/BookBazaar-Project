import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();
// CREATE book
router.post('/create-product', ProductController.createProduct);

// get all books 
router.get('/', ProductController.getAllbooks);

export const ProductRoutes = router;