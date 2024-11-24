import OrderModel from "../order.modelt";
import { ProductModel } from "../product.model";
import { IOrder } from "./order.interface";


// create an order
const createOrderDB = async (receivedOrder: IOrder) => {
   const { product, quantity} = receivedOrder;
  

   const productDetails = await ProductModel.findById(receivedOrder);

   if (!productDetails) {
     throw new Error("Product not found");
   }
 
  
   if (productDetails.quantity < quantity) {
     throw new Error("Insufficient stock for the requested product");
   }
 
   productDetails.quantity -= quantity;
 
   if (productDetails.quantity === 0) {
     productDetails.inStock = false;
   }
   await productDetails.save();
   
   const TotalPrice = productDetails.price * quantity;

   const order = new OrderModel({
    email: receivedOrder.email,
    product: product,
    quantity,
    totalPrice: TotalPrice,
  });
  const result = await order.save();
  return result;

};

export const orderService = {
  createOrderDB,
}