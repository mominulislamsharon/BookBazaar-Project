import { TAdmin } from "./admin.interface";
import { AdminModel } from "./admin.model";

const  createAdminDB = async(adminData: TAdmin) => {
  const result = await AdminModel.create(adminData);
  return result;
}

const getAllAdminFromDB = async(query: Record<string, unknown>) => {
  const result = await AdminModel.find(query);
  return result;
}

const getSingleAdminFromDB = async (id: string) => {
  const result = await AdminModel.findById(id);
  return result;
};

const updateAdminFromDB = async (id: string, updateData: Partial<TAdmin>) => {
  const result = await AdminModel.findByIdAndUpdate(id, updateData, { new: true });
  return result;
};

const deleteAdminFromDB = async (id: string) => {
  const result = await AdminModel.findByIdAndDelete(id);
  return result;
};


export const adminServices = {
  createAdminDB,
  getAllAdminFromDB,
  getSingleAdminFromDB,
  updateAdminFromDB,
  deleteAdminFromDB,
 };