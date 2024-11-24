import { Schema, model, connect } from 'mongoose';
import { Category, IProduct } from './Bookshop/product.interface';

const productSchema = new Schema<IProduct<Category>>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: {
      type: String,
      required: true,
      enum: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
    },
    description: { type: String },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);

export const ProductModel = model<IProduct<Category>>(
  'IProduct',
  productSchema,
);
