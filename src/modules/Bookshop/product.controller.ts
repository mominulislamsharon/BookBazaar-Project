import { Request, Response } from "express";
import { ProductService } from "./product.service";


const createProduct = async (req: Request, res: Response)=> {
  try{
    const {productdata} = await req.body;

    const result = await ProductService.createProductDB(productdata);

    // response 

    res.status(200).json({
      message: 'Book created successfully',
      status: true,
      data: result,
  })
} catch (err: any) {
  res.status(404).json({
      status: false,
      message: 'Failed to create Book',
      error: err,
  })
}  
}

export const ProductController = {
  createProduct,
}