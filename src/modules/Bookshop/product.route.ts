import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();
// CREATE book
router.post('/create-product', ProductController.createProduct);

// get all books 
router.get('/', ProductController.getAllbooks);
// get special book id
router.get("/:productId", ProductController.getSingleBook)

export const ProductRoutes = router;