import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';

const router = express.Router();
router.get('/', auth(ENUM_USER_ROLE.ADMIN), UserController.getAllUser);

router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.getSingleUser);

router.patch(
  '/:id',
  validateRequest(UserValidation.update),
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.updateUser,
);

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.deleteUser);

export const UserRoutes = router;
