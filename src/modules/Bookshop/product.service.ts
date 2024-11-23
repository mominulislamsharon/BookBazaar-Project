import { ProductModel } from "../product.model";
import { Category, IProduct } from "./product.interface";


// crate a book 
const createProductDB = async (product: IProduct<Category>) => {
 const result =  await ProductModel.create(product);
 return result
}

// get all books 
const getAllBooksDB = async (searchTerm: string | undefined) => {
  if(searchTerm){
    const result =  await ProductModel.find({
      $or: [
        {title: {$regex: searchTerm, $options: "i"}},
        {author: {$regex: searchTerm, $options: "i"}},
        {category: {$regex: searchTerm, $options: "i"}},
      ]
    })
    return result;
  }
  const result = await ProductModel.find();
  return result;
 }





export const ProductService = {
  createProductDB,
  getAllBooksDB,
}