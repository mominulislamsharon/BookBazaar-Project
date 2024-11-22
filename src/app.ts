import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();

// middleware parser
app.use(express.json());
app.use(cors());

// routes
app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is live!',
  });
});

export default app;


