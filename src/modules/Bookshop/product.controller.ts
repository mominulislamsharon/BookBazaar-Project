import { NextFunction, Request, Response } from "express";
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

// getAllbooks 
const getAllbooks = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string | undefined;
    
    const result = await ProductService.getAllBooksDB(searchTerm);


    res.status(200).json({
      message: 'Book retrieved successfully',
      status: true,
      data: result,
  })
} catch (err) {
  console.log(err);
    
  }  
};

export const ProductController = {
  createProduct,
  getAllbooks,
}