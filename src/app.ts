import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './modules/BookOrder/order.route';
import { orderController } from './modules/BookOrder/order.controller';
import { ProductRoutes } from './modules/BookProduct/product.route';
const app = express();

// middleware parser
app.use(express.json());
app.use(cors());

// booke create routes
app.use('/api/products', ProductRoutes);

// order routes
app.use("/api/orders", router);

// order revenue routes
app.get('/api/orders/revenue', orderController.calculateRevenue);

// routes
app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is live!',
  });
});

export default app;
