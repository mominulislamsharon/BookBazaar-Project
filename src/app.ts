import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './modules/BookOrder/order.route';
import { orderController } from './modules/BookOrder/order.controller';
import { ProductRoutes } from './modules/BookProduct/product.route';
import notFound from './middleware/notFound';
import { globalErrorHandler } from './middleware/globalErrorHandler';
import { authRouters } from './modules/Auth-User/auth.route';
import { userRoutes } from './modules/User/usre.route';

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

////
app.use('/api/users', userRoutes);
app.use('/api/auth', authRouters)

// routes
app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'BookBazaar is Running Server',
  });
});


// middleware
app.use(globalErrorHandler)

app.use(notFound)

export default app;
