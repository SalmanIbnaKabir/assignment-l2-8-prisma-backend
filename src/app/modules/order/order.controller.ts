import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { OrderService } from './order.service';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  console.log(req.user);
  const result = await OrderService.createOrder(req.user, req.body);
  res.send({
    success: true,
    statusCode: 200,
    message: 'orders created  successfully',
    data: result,
  });
});

// const getAllOrders  =  catchAsync(async(req:Request,res:Response)=>{
//     const result  = await OrderService.getAllOrders()
//     res.send({
//         success: true,
//         statusCode: 200,
//         message: 'orders retrieve  successfully',
//         data: result,
//       })
// })
const getSingleOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.getSingleOrder(req.user);
  res.send({
    success: true,
    statusCode: 200,
    message: 'orders retrieve  successfully',
    data: result,
  });
});

const getSpecificOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.getSpecificOrder(req.params.id, req.user);
  res.send({
    success: true,
    statusCode: 200,
    message: 'orders retrieve  successfully',
    data: result,
  });
});

export const OrderController = {
  createOrder,

  getSpecificOrder,
  getSingleOrder,
};
