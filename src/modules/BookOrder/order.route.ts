import { Router } from 'express';
import { orderController } from './order.controller';
import validateRequest from '../../middleware/validateRequest';
import { orderValidation } from './order.validation';

const router = Router();

router.post(
  '/',
  validateRequest(orderValidation.orderSchema),
  orderController.createOrder,
);
router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getSingleOrder);
router.patch('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);

// order revenue routes
router.get('/revenue', orderController.calculateRevenue);

export const OrdersRoutes = router;
