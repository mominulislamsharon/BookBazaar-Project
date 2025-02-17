import { Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import { userService } from './user.service';
import sendResponse from '../../Utils/sendResponse';
import catchAsync from '../../Utils/catchAsync';

const getUserProfile = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user?.id;
  
  if (!userId) {
    throw new Error('User not authenticated');
  }
  const result = await userService.getSingleById(userId);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'User Profile retrieved successfully',
    data: result,
  });
});

const getSingleById = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await userService.getSingleById(id);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'User single successfully',
    data: result,
  });
});

const updateUserProfile = catchAsync(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const result = await userService.updateProfilerUser(id, body);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Profile updated successfully',
    data: result,
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  await userService.deleteUser(id);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'User deleted successfully',
    data: id,
  });
});

export const UserController = {
  getUserProfile,
  getSingleById,
  updateUserProfile,
  deleteUser,
};
