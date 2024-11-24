import { Request, Response } from "express";
import { orderService } from "./order.service";


const createOrder = async (req: Request, res: Response) => {
  try {
    const receivedOrder = req.body;
    
    const result = await orderService.createOrderDB(receivedOrder);


    res.status(200).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      status: false,
      message: 'order could not be created',
      error: err,
    });
  }
}

export const orderController = {
  createOrder,
}