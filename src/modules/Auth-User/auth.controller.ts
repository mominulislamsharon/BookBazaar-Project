import { StatusCodes } from 'http-status-codes';
import { AuthService } from './auth.service';
import catchAsync from '../../Utils/catchAsync';
import sendResponse from '../../Utils/sendResponse';

const register = catchAsync(async (req, res) => {
  const result = await AuthService.register(req.body);

  sendResponse(res, {
    success: true,
    message: 'User registered successfully',
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});

const login = catchAsync(async (req, res) => {
  const result = await AuthService.login(req.body);

  sendResponse(res, {
    success: true,
    message: 'Login successful',
    statusCode: StatusCodes.OK,
    data: { token: result.token },
  });
});

export const authController = {
  register,
  login,
};
