import { ProductModel } from '../BookProduct/product.model';
import { IOrder } from './order.interface';
import OrderModel from './order.model';

// create an order
const createOrderDB = async (receivedOrder: IOrder) => {
  const { product, quantity, email } = receivedOrder;

  const productDetails = await ProductModel.findById(product);
  if (!productDetails) throw new Error('Product not found');
  if (productDetails.quantity < quantity) throw new Error('Insufficient stock');

  productDetails.quantity -= quantity;
  productDetails.inStock = productDetails.quantity > 0;
  await productDetails.save();

  const totalPrice = productDetails.price * quantity;
  return await new OrderModel({ email, product, quantity, totalPrice }).save();
};

// calculateRevenue
const calculateRevenueDB = async () => {
  const dataRevenue = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);

  const result = dataRevenue.length > 0 ? dataRevenue[0].totalRevenue : 0;
  return { totalRevenue: result };
};

export const orderService = {
  createOrderDB,
  calculateRevenueDB,
};
