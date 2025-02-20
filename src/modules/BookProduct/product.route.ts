import express from 'express';
import { ProductController } from './product.controller';
import validateRequest from '../../middleware/validateRequest';
import { productValidation } from './product.validation';

const router = express.Router();
// CREATE book
router.post('/',validateRequest(productValidation.productSchema), ProductController.createProduct);

// get all books
router.get(
  '/',
  ProductController.getAllbooks,
);

// get special book id
router.get('/:productId', ProductController.getSingleBook);

// updata book
router.put(
  '/:productId',
  validateRequest(productValidation.updateProductSchema),
  ProductController.updateBook,
);

// delete book

router.delete('/:productId', ProductController.deleteBook);

export const ProductRoutes = router;
