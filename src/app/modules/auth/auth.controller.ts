import { Request, Response } from 'express';
import config from '../../../config';
import catchAsync from '../../../shared/catchAsync';
import { AuthService } from './auth.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createAuthUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.createAuthUser(req.body);
  const { password, ...resData } = result;

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Users created successfully',
    data: resData,
  });
});
const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.loginUser(req.body);
  const { refreshToken, ...others } = result;
  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };
  res.cookie('refreshToken', refreshToken, cookieOptions);

  res.send({
    success: true,
    statusCode: 200,
    message: 'user login successfully',
    data: others,
  });
});

const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;
  const result = await AuthService.refreshToken(refreshToken);
  const cookieOptions = {
    secure: config.env === 'production' ? true : false,
    httpOnly: true,
  };
  res.cookie('refreshToken', refreshToken, cookieOptions);

  res.send({
    statusCode: 200,
    success: true,
    message: 'User login Successfully',
    data: result,
  });
});

// profile
const getUserProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.getUserProfile(req.user);
  res.send({
    statusCode: 200,
    success: true,
    message: 'User profile information retrieve  Successfully',
    data: result,
  });
});

export const AuthController = {
  createAuthUser,
  loginUser,
  refreshToken,
  getUserProfile,
};
