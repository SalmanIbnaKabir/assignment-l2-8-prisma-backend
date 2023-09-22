import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from './../../../enums/user';
import { OrderController } from './order.controller';

const router = express.Router();

// router.get(
//   '/get-all-orders',
//   auth(ENUM_USER_ROLE.ADMIN),
//   OrderController.getAllOrder,
// );

router.post(
  '/create-order',
  auth(ENUM_USER_ROLE.CUSTOMER),
  OrderController.createOrder,
);

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  OrderController.getSingleOrder,
);

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  OrderController.getSpecificOrder,
);

export const OrderRoutes = router;
