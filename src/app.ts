import express, { Request, Response } from 'express';
import cors from 'cors';
import notFound from './middleware/notFound';
import { globalErrorHandler } from './middleware/globalErrorHandler';
import cookieParser from 'cookie-parser';
import router from './modules/routes';

const app = express();
app.use(cookieParser())

// middleware parser
app.use(express.json());
app.use(cors());

////
app.use('/api', router)

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
