import { ProductModel } from "../product.model";
import { Category, IProduct } from "./product.interface";

const createProductDB = async (product: IProduct<Category>) => {
 const result =  await ProductModel.create(product);
 return result
}

export const ProductService = {
  createProductDB
}