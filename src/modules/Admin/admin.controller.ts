import catchAsync from '../../Utils/catchAsync';
import sendResponse from '../../Utils/sendResponse';
import { adminServices } from './admin.service';
import { StatusCodes } from 'http-status-codes';

const createAdmin = catchAsync(async (req, res) => {
  const adminData = req.body;
  const result = await adminServices.createAdminDB(adminData);
  sendResponse(res, {
    message: 'Admin created successfully',
    status: true,
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});

const getAllAdmins = catchAsync(async (req, res) => {
  const result = await adminServices.getAllAdminFromDB(req.query);

  sendResponse(res, {
    message: 'Admins retrieved successfully',
    status: true,
    statusCode: StatusCodes.OK,
    data: result,
  });
});


const getSingleAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await adminServices.getSingleAdminFromDB(id);

  sendResponse(res, {
    message: 'Admin retrieved successfully',
    status: true,
    statusCode: StatusCodes.OK,
    data: result,
  });
})


const updateAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const adminData = req.body;
  const result = await adminServices.updateAdminFromDB(id, adminData);

  sendResponse(res, {
    message: 'Admin updated successfully',
    status: true,
    statusCode: StatusCodes.OK,
    data: result,
  });
})

const deleteAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await adminServices.deleteAdminFromDB(id);

  sendResponse(res, {
    message: 'Admin deleted successfully',
    status: true,
    statusCode: StatusCodes.OK,
    data: result,
  });
})



export const adminController = {
  createAdmin,
  getAllAdmins,
  getSingleAdmin,
  updateAdmin,
  deleteAdmin,
}