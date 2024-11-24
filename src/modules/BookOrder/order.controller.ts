import { Request, Response } from "express";
import { orderService } from "./order.service";

// create order
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

// create revenue

const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderService.calculateRevenueDB();
    console.log(result);

    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: result,
    });
  } 
  catch (err: any) {
    res.status(404).json({
      status: false,
      message: 'order calculate couldnot revenue',
      error: err,
    });
  }
  }

export const orderController = {
  createOrder,
  calculateRevenue
}