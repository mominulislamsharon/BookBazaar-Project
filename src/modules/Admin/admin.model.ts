import { model, Schema } from "mongoose";
import { TAdmin } from "./admin.interface";


const adminSchema = new Schema<TAdmin>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'admin' },
  },
  { timestamps: true }
);

export const AdminModel = model<TAdmin>('Admin', adminSchema);