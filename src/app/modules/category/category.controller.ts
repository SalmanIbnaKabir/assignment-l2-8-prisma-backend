import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import { CategoryServices } from './category.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryServices.createCategory(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category created successfully',
    data: result,
  });
});

const updateCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryServices.updateCategory(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'category updated   successfully',
    data: result,
  });
});

const getAllCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryServices.getAllCategory();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'categories retrieved  successfully',
    data: result,
  });
});

// get single
const getSingleCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryServices.getSingleCategory(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'category retrieved  successfully',
    data: result,
  });
});

const deleteCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryServices.deleteCategory(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'category deleted   successfully',
    data: result,
  });
});

export const CategoryController = {
  createCategory,
  updateCategory,
  deleteCategory,
  getSingleCategory,
  getAllCategory,
};
