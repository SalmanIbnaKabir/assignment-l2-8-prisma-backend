import { Request, Response } from 'express';

import { BookService } from './book.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { booksFilterableOptions } from './book.constants';

const getAllBook = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, booksFilterableOptions);
  const options = pick(req.query, [
    'limit',
    'page',
    'skip',
    'sortBy',
    'sortOrder',
  ]);
  const result = await BookService.getAllBook(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'books fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

// get books by category id
const getBooksByCategoryId = catchAsync(async (req: Request, res: Response) => {
  const options = pick(req.query, [
    'limit',
    'page',
    'skip',
    'sortBy',
    'sortOrder',
  ]);
  const result = await BookService.getBooksByCategoryId(
    req.params.categoryId,
    options,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'books fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});
const createBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.createBooks(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'books  created successfully',
    data: result,
  });
});

// single
const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getSingleBook(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'book retrieved  successfully',
    data: result,
  });
});

// update

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.updateBook(req.params.id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'book updated   successfully',
    data: result,
  });
});

// delete
const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.deleteBook(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'book deleted   successfully',
    data: result,
  });
});

export const BookController = {
  getAllBook,
  createBooks,
  getBooksByCategoryId,
  getSingleBook,
  updateBook,
  deleteBook,
};
