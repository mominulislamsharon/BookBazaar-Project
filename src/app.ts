import express, { Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './modules/Bookshop/product.route';
const app = express();

// middleware parser
app.use(express.json());
app.use(cors());


// booke create routes 
app.use('/api/products',ProductRoutes)


// routes
app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is live!',
  });
});

export default app;


